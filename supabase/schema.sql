-- StudioTraino: rode isto uma vez no Supabase (SQL Editor > New query > Run).
-- Uma tabela guarda tudo: treinos ("plans"), treino em andamento ("active") e cada sessão do histórico ("session:<id>").
create table if not exists public.st_docs (
  user_id    uuid        not null default auth.uid() references auth.users (id) on delete cascade,
  key        text        not null,
  data       jsonb       not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

alter table public.st_docs enable row level security;

-- Cada pessoa só lê e grava as próprias linhas.
drop policy if exists "st_docs own rows" on public.st_docs;
create policy "st_docs own rows" on public.st_docs
  for all to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

grant select, insert, update, delete on public.st_docs to authenticated;
