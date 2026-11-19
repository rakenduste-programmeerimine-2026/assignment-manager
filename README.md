# assignment-manager — Tähtajad ühes kohas

Lihtne veebileht, kuhu tudeng paneb kirja oma koolitööd ja tähtajad ning näeb kohe,
mis on järgmisena vaja valmis saada.

- Uue töö lisamine koos aine ja tähtajaga
- Tööde näitamine tähtaja järjekorras
- Tehtud töö märkimine

**Tehnoloogiad:** Next.js (App Router) + TypeScript + Tailwind CSS, andmed ja autentimine Supabase'is.

## Dokumentatsioon

- [BACKLOG.md](BACKLOG.md) — idee, skoop ja issue'de nimekiri
- [CONTRIBUTING.md](CONTRIBUTING.md) — haru- ja commit-konventsioonid, PR-protsess

## Käivitamine

```bash
npm install
npm install @supabase/supabase-js @supabase/ssr
cp .env.example .env.local
npm run dev
```

`.env.local` väärtused leiad Supabase projektist: **Project Settings -> API** →
`Project URL` ja `anon public` võti. Vaata ka [supabase/README.md](supabase/README.md).

`service_role` võtit rakendus ei kasuta ja seda repos ei hoita.
