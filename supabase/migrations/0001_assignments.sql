-- 0001_assignments.sql
-- Koolitööde tabel koos indeksi ja RLS poliitikatega.
-- Käivitamine: Supabase Dashboard -> SQL Editor -> kleebi fail -> Run.

create table if not exists public.assignments (
  id         uuid        primary key default gen_random_uuid(),
  user_id    uuid        not null references auth.users (id) on delete cascade,
  title      text        not null check (char_length(trim(title)) between 1 and 120),
  subject    text        not null check (char_length(trim(subject)) between 1 and 60),
  due_date   date        not null,
  is_done    boolean     not null default false,
  created_at timestamptz not null default now()
);

comment on table public.assignments is 'Kasutaja koolitööd ja tähtajad.';

-- Peamine päring on "minu tööd tähtaja järjekorras", seega liitindeks.
create index if not exists assignments_user_due_idx
  on public.assignments (user_id, due_date);

-- Row Level Security: iga kasutaja näeb ja muudab ainult enda ridu.
alter table public.assignments enable row level security;

drop policy if exists "assignments_select_own" on public.assignments;
create policy "assignments_select_own"
  on public.assignments for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "assignments_insert_own" on public.assignments;
create policy "assignments_insert_own"
  on public.assignments for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "assignments_update_own" on public.assignments;
create policy "assignments_update_own"
  on public.assignments for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "assignments_delete_own" on public.assignments;
create policy "assignments_delete_own"
  on public.assignments for delete
  to authenticated
  using (auth.uid() = user_id);
