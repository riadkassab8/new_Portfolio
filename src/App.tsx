import { useEffect, useRef, useState } from 'react';

type InjectionRecord = {
  headNodes: HTMLElement[];
  bodyScripts: HTMLScriptElement[];
};

function serializeNode(node: ChildNode) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    return (node as HTMLElement).outerHTML;
  }

  return node.textContent ?? '';
}

function cloneHeadNode(node: Element) {
  const clone = document.createElement(node.tagName.toLowerCase());

  for (const attribute of Array.from(node.attributes)) {
    clone.setAttribute(attribute.name, attribute.value);
  }

  clone.setAttribute('data-legacy-react', 'true');
  clone.textContent = node.textContent;

  return clone as HTMLElement;
}

function cloneScriptNode(node: HTMLScriptElement) {
  const script = document.createElement('script');

  for (const attribute of Array.from(node.attributes)) {
    script.setAttribute(attribute.name, attribute.value);
  }

  script.setAttribute('data-legacy-react', 'true');
  script.textContent = node.textContent;

  return script;
}

export default function App() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [progress, setProgress] = useState(0);
  const [assetsReady, setAssetsReady] = useState(false);
  const injectionsRef = useRef<InjectionRecord>({
    headNodes: [],
    bodyScripts: [],
  });

  useEffect(() => {
    if (status === 'ready') {
      setProgress(100);
      return;
    }

    if (status === 'error') {
      return;
    }

    const timer = window.setInterval(() => {
      setProgress((current) => (current >= 100 ? 100 : current + 1));
    }, 22);

    return () => {
      window.clearInterval(timer);
    };
  }, [status]);

  useEffect(() => {
    if (status === 'loading' && assetsReady && progress >= 100) {
      setStatus('ready');
    }
  }, [assetsReady, progress, status]);

  useEffect(() => {
    let isCancelled = false;

    setProgress(0);
    setAssetsReady(false);

    const cleanupInjectedNodes = () => {
      injectionsRef.current.headNodes.forEach((node) => node.remove());
      injectionsRef.current.bodyScripts.forEach((node) => node.remove());
      injectionsRef.current = { headNodes: [], bodyScripts: [] };
    };

    const loadLegacyPortfolio = async () => {
      try {
        cleanupInjectedNodes();

        const waitForLegacyAssets = async (root: HTMLElement) => {
          const images = Array.from(root.querySelectorAll('img')).filter((image) => {
            const isLazy = image.getAttribute('loading') === 'lazy';
            if (!isLazy) return true;
            const rect = image.getBoundingClientRect();
            return rect.top < window.innerHeight * 1.35 && rect.bottom > -window.innerHeight * 0.35;
          });
          const pendingImages = images.filter((image) => !image.complete);

          const imagesPromise =
            pendingImages.length === 0
              ? Promise.resolve()
              : Promise.all(
                  pendingImages.map(
                    (image) =>
                      new Promise<void>((resolve) => {
                        const done = () => resolve();
                        image.addEventListener('load', done, { once: true });
                        image.addEventListener('error', done, { once: true });
                      }),
                  ),
                );

          const fontsPromise =
            'fonts' in document
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (document as any).fonts?.ready?.catch(() => undefined) ?? Promise.resolve()
              : Promise.resolve();

          const safetyTimeout = new Promise<void>((resolve) => window.setTimeout(resolve, 2200));
          await Promise.race([
            Promise.all([imagesPromise, fontsPromise, new Promise((r) => window.setTimeout(r, 420))]).then(
              () => undefined,
            ),
            safetyTimeout,
          ]);
        };

        const response = await fetch('/legacy-source.html', { cache: 'no-store' });

        if (!response.ok) {
          throw new Error(`Failed to load legacy source: ${response.status}`);
        }

        const html = await response.text();

        if (isCancelled || !hostRef.current) {
          return;
        }

        const parser = new DOMParser();
        const legacyDocument = parser.parseFromString(html, 'text/html');
        const headNodes = Array.from(
          legacyDocument.head.querySelectorAll('link, style, meta[name=\"theme-color\"]'),
        );
        const directBodyChildren = Array.from(legacyDocument.body.childNodes);
        const bodyScripts = directBodyChildren.filter(
          (node): node is HTMLScriptElement =>
            node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === 'SCRIPT',
        );
        const markup = directBodyChildren
          .filter(
            (node) => !(node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === 'SCRIPT'),
          )
          .map(serializeNode)
          .join('');

        document.documentElement.lang = legacyDocument.documentElement.lang || 'en';
        document.title = legacyDocument.title || 'Static React Copy';
        hostRef.current.innerHTML = markup;

        const injectedHeadNodes = headNodes.map((node) => {
          const clone = cloneHeadNode(node);
          document.head.appendChild(clone);
          return clone;
        });

        // Hide the legacy page-loader so the React counter is the only loading UI.
        const loaderOverride = document.createElement('style');
        loaderOverride.setAttribute('data-react-shell', 'true');
        loaderOverride.textContent = `
          .page-loader { display: none !important; opacity: 0 !important; pointer-events: none !important; }
        `;
        document.head.appendChild(loaderOverride);
        injectedHeadNodes.push(loaderOverride);

        const injectedBodyScripts = bodyScripts.map((scriptNode) => {
          const script = cloneScriptNode(scriptNode);
          document.body.appendChild(script);
          return script;
        });

        injectionsRef.current = {
          headNodes: injectedHeadNodes,
          bodyScripts: injectedBodyScripts,
        };

        if (!isCancelled) {
          await waitForLegacyAssets(hostRef.current);
          setAssetsReady(true);
        }
      } catch (error) {
        console.error(error);

        if (!isCancelled) {
          setStatus('error');
        }
      }
    };

    void loadLegacyPortfolio();

    return () => {
      isCancelled = true;
      cleanupInjectedNodes();

      if (hostRef.current) {
        hostRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {status === 'loading' ? (
        <div className="react-shell-status">
          <span className="react-shell-status-value">{progress}%</span>
        </div>
      ) : null}
      {status === 'error' ? (
        <div className="react-shell-status react-shell-status-error">
          حصلت مشكلة أثناء تحميل النسخة الأصلية داخل مشروع React.
        </div>
      ) : null}
      <div ref={hostRef} className={status === 'ready' ? 'legacy-host legacy-host-ready' : 'legacy-host'} />
    </>
  );
}
