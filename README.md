# Static React Copy

نسخة React مستقلة مبنية من الصفحة الـ static الأصلية الموجودة سابقًا داخل `public`.

## التشغيل

```powershell
cd "e:\Desktop folders\react_app\cinematic-portfolio\static-react-copy"
npm install
npm run dev
```

ثم افتح:

```text
http://localhost:3000
```

## الفكرة

- الأصل ما زال موجودًا كما هو داخل `..\public`
- هذه النسخة تحمل الصفحة الأصلية من الملف `public/legacy-source.html`
- يمكن تطويرها تدريجيًا داخل React بدون المساس بالنسخة الأصلية

## أهم الملفات

- `src/App.tsx`
- `src/main.tsx`
- `src/react-shell.css`
- `public/legacy-source.html`
- `vite.config.ts`
