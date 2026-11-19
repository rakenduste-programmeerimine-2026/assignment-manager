# Andmebaas (Supabase)

## Seadistus

1. Loo [supabase.com](https://supabase.com) all uus projekt (tasuta plaan, region EU).
2. Ava **SQL Editor** ja käivita kaustast `migrations/` kõik failid numbrilises järjekorras.
3. Kopeeri **Project Settings -> API** alt `Project URL` ja `anon public` võti faili `.env.local`
   (vt `.env.example`).

Migratsioonifailid on idempotentsed (`if not exists`, `drop policy if exists`), seega korduv
käivitamine on ohutu.

## Skeem

### `assignments`

| Veerg | Tüüp | Märkus |
| --- | --- | --- |
| `id` | `uuid` | PK, `gen_random_uuid()` |
| `user_id` | `uuid` | FK → `auth.users.id`, `on delete cascade` |
| `title` | `text` | 1-120 tähemärki (trimmitult) |
| `subject` | `text` | 1-60 tähemärki (trimmitult) |
| `due_date` | `date` | tähtaeg |
| `is_done` | `boolean` | vaikimisi `false` |
| `created_at` | `timestamptz` | vaikimisi `now()` |

Indeks `assignments_user_due_idx (user_id, due_date)` katab põhipäringu "minu tööd tähtaja järjekorras".

## RLS

Tabelil on RLS sees ja neli poliitikat rollile `authenticated` — `select`, `insert`, `update`,
`delete` — kõigil tingimus `auth.uid() = user_id`. Anonüümne võti ilma sessioonita ei näe ega
muuda ühtegi rida, sisseloginud kasutaja ainult enda ridu.

### Käsitsi kontroll

```sql
-- peab tagastama true
select relrowsecurity from pg_class where relname = 'assignments';

-- peab tagastama 4 rida
select policyname, cmd from pg_policies
where schemaname = 'public' and tablename = 'assignments';
```

Lisaks: logi sisse kahe eri kasutajana ja veendu, et teise kasutaja tööd ei ole nähtavad.
