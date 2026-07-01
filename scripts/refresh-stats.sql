-- Refresh src/data/stats.generated.ts from live data.
-- Run against the jorsby-media Supabase (project njfezrlytrqxngmaucfx), then
-- transcribe the results into src/data/stats.generated.ts and rebuild.
-- Engagement is deduplicated to the LATEST metric snapshot per post_account.

-- 1) Studio totals + per-show reach (views) across the 6 portfolio shows
with latest as (
  select distinct on (pe.post_account_id)
    pe.post_account_id, pe.views, pe.likes, pe.comments, pe.shares
  from social_auth.post_engagement pe
  order by pe.post_account_id, pe.fetched_at desc
)
select pr.title as show,
  count(*) as posts,
  sum(l.views) as views, sum(l.likes) as likes, sum(l.comments) as comments
from latest l
join social_auth.post_accounts pa on pa.id = l.post_account_id
join social_auth.tokens t on t.account_id = pa.octupost_account_id
join projects pr on pr.id = t.editor_project_id
where t.editor_project_id in (
  '2fcbe6c3-7031-4454-84ea-70604f1c7538', -- ahlak-masallari
  '872e0626-6446-495b-a2ce-633b0036e0cf', -- jorsby-bilim
  '70b3f9d3-27f8-42b4-9cab-ecc5fb54433a', -- married-to-the-alpha
  'a50688ac-10ad-4bcc-a2e7-cc1f47e040e8', -- buyuk-zihinler
  '08d1165c-a302-44bd-b3b7-0c302f249082', -- kara-sayfa
  '45aa336e-7466-439d-bcb0-b6983917c23c'  -- para-hikayeleri
)
group by rollup(pr.title)
order by views desc nulls first;

-- 2) Platform mix (posts / views / likes per platform)
with latest as (
  select distinct on (pe.post_account_id) pe.post_account_id, pe.views, pe.likes
  from social_auth.post_engagement pe
  order by pe.post_account_id, pe.fetched_at desc
)
select pa.platform, count(*) as posts, sum(l.views) as views, sum(l.likes) as likes
from latest l
join social_auth.post_accounts pa on pa.id = l.post_account_id
join social_auth.tokens t on t.account_id = pa.octupost_account_id
where t.editor_project_id in (
  '2fcbe6c3-7031-4454-84ea-70604f1c7538','872e0626-6446-495b-a2ce-633b0036e0cf',
  '70b3f9d3-27f8-42b4-9cab-ecc5fb54433a','a50688ac-10ad-4bcc-a2e7-cc1f47e040e8',
  '08d1165c-a302-44bd-b3b7-0c302f249082','45aa336e-7466-439d-bcb0-b6983917c23c')
group by pa.platform
order by posts desc;

-- 3) Production velocity — episodes finished + posts published per month
select 'episodes' as series, to_char(date_trunc('month', e.created_at_utc),'YYYY-MM') as month, count(*) as n
from episodes e
where e.render_status='done' and e.project_id in (
  '2fcbe6c3-7031-4454-84ea-70604f1c7538','872e0626-6446-495b-a2ce-633b0036e0cf',
  '70b3f9d3-27f8-42b4-9cab-ecc5fb54433a','a50688ac-10ad-4bcc-a2e7-cc1f47e040e8',
  '08d1165c-a302-44bd-b3b7-0c302f249082','45aa336e-7466-439d-bcb0-b6983917c23c')
group by 1,2
union all
select 'posts', to_char(date_trunc('month', pa.published_at),'YYYY-MM'), count(*)
from social_auth.post_accounts pa
join social_auth.tokens t on t.account_id = pa.octupost_account_id
where pa.published_at is not null and t.editor_project_id in (
  '2fcbe6c3-7031-4454-84ea-70604f1c7538','872e0626-6446-495b-a2ce-633b0036e0cf',
  '70b3f9d3-27f8-42b4-9cab-ecc5fb54433a','a50688ac-10ad-4bcc-a2e7-cc1f47e040e8',
  '08d1165c-a302-44bd-b3b7-0c302f249082','45aa336e-7466-439d-bcb0-b6983917c23c')
group by 1,2
order by series, month;
