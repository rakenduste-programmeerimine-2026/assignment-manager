# Backlog — Tähtajad ühes kohas

## Idee

Üks lihtne leht, kuhu tudeng paneb oma koolitööd ja tähtajad. Lehe avamisel on kohe näha,
mis on järgmisena vaja valmis saada. Eraldi kalendrit ega teavituste süsteemi **ei tehta**.

**Kolm põhifunktsiooni**

1. Uue töö lisamine koos aine ja tähtajaga
2. Tööde näitamine tähtaja järjekorras
3. Tehtud töö märkimine

## Tehnoloogiad

| Kiht | Valik |
| --- | --- |
| Frontend | Next.js (App Router), TypeScript, Tailwind CSS |
| Backend | Next.js server actions + `@supabase/ssr` |
| Andmebaas | Supabase (Postgres, Auth, RLS) |
| Deploy | Vercel |

## Skoobist väljas (MVP ei sisalda)

Teavitused, e-kiri, kalendrivaade, Moodle'i import, failide üleslaadimine, jagatud/tiimi vaated,
korduvad tööd, mobiilirakendus.

## Issue'd

Iga rida on üks issue → üks haru → üks PR. Järjekord on ka soovituslik töö järjekord.

| # | Issue | Sildid |
| --- | --- | --- |
| 1 | chore: Next.js + TypeScript + Tailwind projekti alus | `area:frontend` `type:chore` |
| 2 | chore: Supabase projekt ja kliendi seadistus | `area:database` `type:chore` |
| 3 | db: `assignments` tabel, indeks ja RLS poliitikad | `area:database` `type:feat` |
| 4 | feat(auth): Supabase e-posti sisselogimine ja väljalogimine | `area:backend` `type:feat` |
| 5 | feat(api): töö loomise server action + valideerimine | `area:backend` `type:feat` |
| 6 | feat(api): tööde päring tähtaja järjekorras | `area:backend` `type:feat` |
| 7 | feat(api): töö tehtuks/tegemata märkimise action | `area:backend` `type:feat` |
| 8 | feat(ui): disainialus — tüpograafia, värvid, lehe karkass | `area:frontend` `type:feat` |
| 9 | feat(ui): uue töö lisamise vorm | `area:frontend` `type:feat` |
| 10 | feat(ui): tööde nimekiri tähtaja järgi grupeeritult | `area:frontend` `type:feat` |
| 11 | feat(ui): tehtud märkimine, tühi olek ja vigade kuvamine | `area:frontend` `type:feat` |
| 12 | docs: README paigaldus-, kasutus- ja deploy-juhend | `area:docs` `type:docs` |

## Sõltuvused

```
1 ──> 2 ──> 3 ──> 4 ──> 5, 6, 7
      │                  │
      └──> 8 ──> 9, 10, 11 ──> 12
```

Issue'd 5–7 ja 9–11 on omavahel sõltumatud — neid saab paralleelselt teha.

## Valmiduse määratlus (Definition of Done)

Üks issue on valmis, kui:

- [ ] PR on merge'itud `main`-i ja issue on suletud
- [ ] `npm run build` õnnestub ilma TypeScripti vigadeta
- [ ] funktsionaalsus töötab käsitsi läbi proovides (PR kirjelduses "Kuidas testida")
- [ ] uusi `console.log` ega kommenteeritud koodijuppe ei jäänud sisse

**Projekt on valmis**, kui kõik `MVP`-sildiga issue'd on suletud ja rakendus on Vercelis töös.
