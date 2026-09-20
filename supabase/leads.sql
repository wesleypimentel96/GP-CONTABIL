-- GP Contábil — tabela de leads
-- Execute no SQL Editor do Supabase (uma vez).

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  whatsapp text not null,
  segmento text not null check (segmento in ('pf', 'mei', 'empresas', 'reforma', 'outro')),
  mensagem text,
  origem text not null default 'site',
  consent_lgpd boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

drop policy if exists "leads_insert_public" on public.leads;

create policy "leads_insert_public"
on public.leads
for insert
to anon, authenticated
with check (
  consent_lgpd = true
  and char_length(nome) >= 2
  and char_length(whatsapp) >= 10
  and segmento in ('pf', 'mei', 'empresas', 'reforma', 'outro')
);

-- Nenhuma policy de SELECT / UPDATE / DELETE: leitura só via service_role no servidor.
