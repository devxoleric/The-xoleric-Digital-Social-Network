```markdown
# The XOLERIC Digital Social Network (Frontend)

Static frontend (Vite + React + TypeScript) prepared to host on GitHub Pages.
Backend: Supabase (you will import supabase/schema.sql in your Supabase project).

Repo: https://github.com/devxoleric/The-xoleric-Digital-Social-Network

Quick start (local):
1. Copy `.env` values or set environment variables.
2. npm install
3. npm run dev

Build & deploy to GitHub Pages:
1. Ensure `homepage` in package.json is `https://devxoleric.github.io/The-xoleric-Digital-Social-Network`
2. npm run build
3. npm run deploy

Notes:
- Supabase publishable (anon) key is included in `.env` by request. Do NOT add service_role key here.
- Replace `og:image` meta with your direct image URL (1200×630) for correct link previews across Telegram, WhatsApp, Discord, Facebook, X, iMessage.
```
