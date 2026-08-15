# Arvion — Marketing & Product Site

AI-powered business growth and automation platform: marketing site, solution/industry pages,
and two interactive product demos (AI Voice Receptionist, AI Call Audit).

## Stack
Next.js 14 (App Router, static export) · TypeScript · Tailwind CSS

The whole site builds to plain static HTML/CSS/JS — no server, no database, and no external
AI API are required to run it.

## Status: MVP locked
Routes: `/`, `/solutions`, `/industries`, `/demos`, `/demos/voice-receptionist`,
`/demos/call-audit`, `/about`, `/contact`, `/audit`, `/privacy`, `/terms`.

`/about`, `/contact`, `/audit`, `/privacy`, and `/terms` are intentionally minimal placeholders —
they exist so navigation never 404s, but their full designed versions (founder section, working
audit form, contact form, legal copy) are future work, not part of this MVP.

`/demos/call-audit` and `/demos/voice-receptionist` run on deterministic, hand-authored demo
data. No telephony integration and no external AI provider are connected — see the
"How this connects to a real deployment" note on each demo page.

## Local development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Local production build
```bash
npm run build
```
This produces a static export in `out/` (configured via `output: 'export'` in `next.config.js`).
Nothing in this project requires a Node.js server at runtime. `next start` does not apply to a
static export — to preview the exported build locally, run:
```bash
npm run preview
```

## Verifying before you deploy
```bash
npm run typecheck   # tsc --noEmit
npm run lint         # next lint
npm run build         # produces out/
```
All three should complete with no errors before deploying.

---

## FREE MVP DEPLOYMENT — GitHub + Cloudflare Pages

Everything below is free. No paid infrastructure, no API keys, and no database are required
to deploy the current MVP.

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Arvion MVP"
git branch -M main
git remote add origin https://github.com/<your-username>/arvion.git
git push -u origin main
```

### 2. Connect Cloudflare Pages
1. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select your `arvion` GitHub repository and authorize Cloudflare if prompted.
3. Configure the build:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Click **Save and Deploy**. Cloudflare will install dependencies, run the build, and publish
   the `out/` directory to a `*.pages.dev` URL.

That's it — no environment variables are required for this deployment.

### 3. Add a custom domain (optional, still free)
1. In the Pages project, go to **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g. `arvion.ai`) and follow the DNS instructions Cloudflare gives you.
   If the domain's nameservers already point to Cloudflare, this is usually a single click.
3. Update `metadataBase` in `app/layout.tsx` and the URLs in `app/sitemap.ts` /
   `app/robots.ts` to match your real domain once it's live.

### 4. Every future push auto-deploys
Once connected, every push to `main` triggers a new Cloudflare Pages build and deployment
automatically. Pull requests get their own preview URLs.

---

## Connecting Supabase (future — not required for the current MVP)
The current site has no database calls anywhere. When lead capture, the Growth Audit form, or
persistent demo history are built, they should read Supabase credentials from environment
variables rather than hardcoding them:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Set these in Cloudflare Pages under **Settings → Environment variables** (never commit them to
the repo). Server-only secrets (e.g. a Supabase service role key) should only ever be used from
a Cloudflare Worker or Pages Function, never exposed with a `NEXT_PUBLIC_` prefix.

A rough starting schema for future tables (businesses, users, leads, appointments, bookings,
customers, conversations, call_audits, invoices, campaigns, automation_workflows) was scoped in
the original project brief and is not yet implemented — no tables or client code exist in this
repo today.

## Connecting a real AI provider (future — not required for the current MVP)
Both demo engines (`lib/demo/voiceReceptionistEngine.ts`, `lib/demo/callAuditEngine.ts`) are
pure, deterministic functions with a clear input/output shape. A real integration would swap
their internals for a call to a provider, configured via environment variables such as:

```
AI_PROVIDER=
AI_API_KEY=
```

These should never be prefixed `NEXT_PUBLIC_` and should only be read from a server context
(a Cloudflare Worker/Pages Function), never bundled into the static frontend.

## Adding a custom domain later
Covered in step 3 above — this can be done at any time after the initial deployment, with no
rebuild required beyond updating the two URL references mentioned.
