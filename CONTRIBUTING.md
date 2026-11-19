# Töökorraldus ja Git-konventsioonid

## Haruharud (branches)

`main` on alati töötav. Otse `main`-i ei commiti — iga issue saab oma haru ja oma PR-i.

```
<tüüp>/<issue-number>-<lühikirjeldus>
```

Näited:

```
chore/1-next-js-setup
db/3-assignments-tabel
feat/6-tooede-nimekiri
docs/12-readme
```

Lubatud tüübid: `feat`, `fix`, `db`, `chore`, `docs`, `refactor`.

## Commit-sõnumid (Conventional Commits)

```
<tüüp>(<skoop>): <mida tehti>
```

- **tüüp** — `feat`, `fix`, `db`, `chore`, `docs`, `refactor`, `style`, `test`
- **skoop** — `ui`, `api`, `auth`, `db`, `deps`, `config` (valikuline)
- **kirjeldus** — väiketähega, käskivas kõneviisis, ilma punktiga lõpus, eesti või inglise keeles (valige üks ja jääge selle juurde)

Näited:

```
chore(config): lisa Next.js, TypeScript ja Tailwind
db(db): lisa assignments tabel ja RLS poliitikad
feat(api): lisa töö loomise server action
feat(ui): kuva tööd tähtaja järjekorras
fix(ui): paranda tähtaja kuupäeva vormindus
docs: täienda README paigaldusjuhendit
```

Üks commit = üks loogiline muudatus. Pigem mitu väikest kui üks hiiglaslik.

## Pull Request

1. Loo haru issue numbriga.
2. Tee töö ära, commiti konventsiooni järgi.
3. Ava PR `main`-i vastu. Pealkiri = commit-stiilis, nt `feat(ui): kuva tööd tähtaja järjekorras`.
4. PR kirjelduses lisa `Closes #<number>`, et issue sulguks automaatselt.
5. Vähemalt üks tiimikaaslane vaatab üle, siis **Squash and merge**.
6. Haru kustutatakse pärast merge'i.

PR kirjelduse mall:

```markdown
## Mida tehti
- ...

## Kuidas testida
1. ...

Closes #<number>
```

## Siltide tähendus

| Silt | Tähendus |
| --- | --- |
| `area:frontend` | Kasutajaliides, komponendid, stiilid |
| `area:backend` | Server actions, API, autentimine |
| `area:database` | Supabase skeem, migratsioonid, RLS |
| `type:feat` / `type:chore` / `type:docs` | Muudatuse laad |
| `MVP` | Ilma selleta ei ole projekt valmis |

Kui kõik `MVP`-sildiga issue'd on suletud, on projekt valmis.
