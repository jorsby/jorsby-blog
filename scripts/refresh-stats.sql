-- Refresh src/data/stats.generated.ts from live data.
-- Run against the jorsby-media Supabase (project njfezrlytrqxngmaucfx), then
-- transcribe the results into src/data/stats.generated.ts and rebuild.
--
-- RECONCILIATION RULE: "posts" everywhere (totals.posts, platform mix,
-- monthly velocity) = post_accounts rows with published_at set — ONE query,
-- so the counter, donut and area chart always agree. Views/likes come from
-- the LATEST post_engagement snapshot per post (engagement lags publishing;
-- do NOT mix the two sources for post counts).
-- Mark the current (in-progress) month `partial: true` in velocity[].

-- 0) Shared portfolio filter (the 6 public shows)
--    '2fcbe6c3-7031-4454-84ea-70604f1c7538' ahlak-masallari
--    '872e0626-6446-495b-a2ce-633b0036e0cf' jorsby-bilim
--    '70b3f9d3-27f8-42b4-9cab-ecc5fb54433a' married-to-the-alpha
--    'a50688ac-10ad-4bcc-a2e7-cc1f47e040e8' buyuk-zihinler
--    '08d1165c-a302-44bd-b3b7-0c302f249082' kara-sayfa
--    '45aa336e-7466-439d-bcb0-b6983917c23c' para-hikayeleri

-- 1) Posts published: total + per platform + per month (totals.posts,
--    platforms[], velocity[].posts)
with pf as (
  select unnest(array[
    '2fcbe6c3-7031-4454-84ea-70604f1c7538','872e0626-6446-495b-a2ce-633b0036e0cf',
    '70b3f9d3-27f8-42b4-9cab-ecc5fb54433a','a50688ac-10ad-4bcc-a2e7-cc1f47e040e8',
    '08d1165c-a302-44bd-b3b7-0c302f249082','45aa336e-7466-439d-bcb0-b6983917c23c'
  ]::uuid[]) as pid
),
published as (
  select pa.id, pa.platform, pa.published_at
  from social_auth.post_accounts pa
  join social_auth.tokens t on t.account_id = pa.octupost_account_id
  join pf on pf.pid = t.editor_project_id
  where pa.published_at is not null
)
select 'total' as metric, null as k, count(*) as n from published
union all
select 'platform', platform, count(*) from published group by platform
union all
select 'month', to_char(date_trunc('month', published_at),'YYYY-MM'), count(*)
from published group by 2
order by metric, k;

-- 2) Views / likes / comments: studio totals + per-show reach
--    (totals.views/likes/comments, reach[])
with pf as (
  select unnest(array[
    '2fcbe6c3-7031-4454-84ea-70604f1c7538','872e0626-6446-495b-a2ce-633b0036e0cf',
    '70b3f9d3-27f8-42b4-9cab-ecc5fb54433a','a50688ac-10ad-4bcc-a2e7-cc1f47e040e8',
    '08d1165c-a302-44bd-b3b7-0c302f249082','45aa336e-7466-439d-bcb0-b6983917c23c'
  ]::uuid[]) as pid
),
latest as (
  select distinct on (pe.post_account_id)
    pe.post_account_id, pe.views, pe.likes, pe.comments
  from social_auth.post_engagement pe
  order by pe.post_account_id, pe.fetched_at desc
)
select pr.title as show,
  sum(l.views) as views, sum(l.likes) as likes, sum(l.comments) as comments
from latest l
join social_auth.post_accounts pa on pa.id = l.post_account_id
join social_auth.tokens t on t.account_id = pa.octupost_account_id
join pf on pf.pid = t.editor_project_id
join projects pr on pr.id = t.editor_project_id
group by rollup(pr.title)
order by views desc nulls first;

-- 3) Episodes finished per month + total (totals.episodes, velocity[].episodes)
select to_char(date_trunc('month', e.created_at_utc),'YYYY-MM') as month, count(*) as episodes
from episodes e
where e.render_status='done' and e.project_id in (
  '2fcbe6c3-7031-4454-84ea-70604f1c7538','872e0626-6446-495b-a2ce-633b0036e0cf',
  '70b3f9d3-27f8-42b4-9cab-ecc5fb54433a','a50688ac-10ad-4bcc-a2e7-cc1f47e040e8',
  '08d1165c-a302-44bd-b3b7-0c302f249082','45aa336e-7466-439d-bcb0-b6983917c23c')
group by rollup(1)
order by month nulls last;

-- 4) (occasionally) show channel handles for portfolio.config.mjs `social`
with pf as (
  select unnest(array[
    '2fcbe6c3-7031-4454-84ea-70604f1c7538','872e0626-6446-495b-a2ce-633b0036e0cf',
    '70b3f9d3-27f8-42b4-9cab-ecc5fb54433a','a50688ac-10ad-4bcc-a2e7-cc1f47e040e8',
    '08d1165c-a302-44bd-b3b7-0c302f249082','45aa336e-7466-439d-bcb0-b6983917c23c'
  ]::uuid[]) as pid
)
select pr.title as show, t.platform, t.account_name, t.account_username
from social_auth.tokens t
join pf on pf.pid = t.editor_project_id
join projects pr on pr.id = t.editor_project_id
order by pr.title, t.platform;
