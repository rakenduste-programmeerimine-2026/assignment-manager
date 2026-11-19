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

Täpsem juhend tuleb issue #12 raames. Lühidalt:

```bash
npm install
cp .env.example .env.local   # lisa Supabase URL ja anon key
npm run dev
```
