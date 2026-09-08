# 3P Strategy — five-page site

A finished, five-page website. No frameworks, no build tools, no npm, no server code.
Every page is a single `.html` file you can open by double-clicking it.

Written for someone who builds without writing code. Nothing below requires a terminal.

---

## 1. The five pages

| Tab | File | What it does |
|---|---|---|
| **Home** | `index.html` | Introduces the 3Ps. The three tiles are the site's spine — each one opens its own page. |
| **Product** | `product.html` | What the audit is and what you receive: deliverables, scope, engagement models, wider services. |
| **Process** | `process.html` | How to start and how it runs: four steps, a day-by-day timeline, what you need from the client, FAQ. |
| **People** | `people.html` | Who it is for: founders, VCs and angels, grants/incubators/accelerators — plus who it is *not* for. |
| **Contact** | `contact.html` | Why work with you, your background, references, booking link and the sample-report form. |

Also in the folder: `assets/` (the stylesheet and script, provided separately in case your host
wants them that way), `sitemap.xml`, `robots.txt`, `favicon.svg`, `vercel.json` (hosting settings —
clean URLs and security headers), `PUBLISHING-GUIDE.md` (the GitHub + Vercel walkthrough), and
`build.py` (optional — §7).

**Try it now:** double-click `index.html`. The whole site works offline, including the menu,
the FAQ accordions and the form validation.

---

## 2. Publish it (pick one — all free, all no-code)

### Netlify Drop — fastest, about 60 seconds

1. Go to **app.netlify.com/drop**
2. Drag this entire folder onto the page
3. It gives you a live URL immediately
4. *Site settings → Domain management → Add custom domain* → enter `3pstrategy.io` and follow the DNS instructions

### Cloudflare Pages — best if your domain is already at Cloudflare

1. **dash.cloudflare.com** → Workers & Pages → Create → Pages → *Upload assets*
2. Drag the folder in, click Deploy
3. *Custom domains* → add `3pstrategy.io`

### GitHub + Vercel — best if you want to edit the site later

Slower to set up (about 20 minutes), but every future edit republishes itself. Full walkthrough
in `PUBLISHING-GUIDE.md`. Short version:

1. Create a repository on **github.com** named `3pstrategy-site`
2. Upload this folder's files to it (drag and drop in the browser — no commands needed)
3. On **vercel.com**, *Add New → Project → Import* that repository → **Deploy**
4. Add your custom domain in *Project → Settings → Domains*

From then on, changing a file on GitHub redeploys the live site in about 30 seconds.

### Your existing website builder

Most builders (Framer, Webflow, Carrd, Wix) have a "custom code" or "HTML embed" block, but
pasting a whole page into one is fragile and usually breaks the SEO tags. Prefer one of the two
options above — these files *are* the website, so you do not need a builder at all.

**Clean URLs:** on Netlify and Cloudflare Pages, `product.html` is also reachable at `/product`
automatically. That is the address used in the sitemap and the SEO tags, so leave it as is.

---

## 3. Edit the text

Open any `.html` file in a plain text editor (Notepad, TextEdit, VS Code) and type between the
tags. `<h1>Who the 3Ps Audit is for.</h1>` → change the words, leave `<h1>` and `</h1>` alone.

Three rules that keep everything working:

1. **Never delete a tag** — the bits in angle brackets. Only change the words between them.
2. **Search for `TODO(` before you launch.** Every placeholder is marked that way, and §5 lists them.
3. **The header and footer are repeated in all five files.** If you change the menu, change it in
   all five — or use `build.py` (§7), which does that for you.

Things you will want to change first, in every file (use Find & Replace):

| Find | Replace with |
|---|---|
| `https://calendly.com/lupinxiv-fw3/30min` | your booking link |
| `hello@3pstrategy.io` | your real email address |
| `https://3pstrategy.io` | your live domain (this appears in the SEO tags) |

---

## 4. Make the form work (10 minutes, no code)

Right now the sample-report form on `contact.html` validates but sends nowhere.

1. Sign up at **formspree.io** (free tier is enough) and create a form
2. It gives you an address like `https://formspree.io/f/abcdwxyz`
3. Open `contact.html`, find `action="#"`, and replace it with `action="https://formspree.io/f/abcdwxyz"`
4. Submit the form once yourself to confirm it arrives

Basin (`usebasin.com`) and Netlify Forms work the same way. Formspree and Basin both include spam
filtering on the free tier — leave it on.

**Optional but worth it:** create a `thank-you.html` page (copy `contact.html`, cut it down to a
short thank-you message) and point Formspree's redirect setting at it. Then you can count
conversions properly.

---

## 5. Fill these in before launch

Search each file for `TODO(` to find them in place.

| Where | What is needed | Why it matters |
|---|---|---|
| `contact.html` | Real name, role and organisation on each of the three testimonials | An unattributed quote reads as invented — the attribution is the asset, not the quote |
| `index.html` | Written permission to name the organisations in the logo strip | Naming clients without clearance is a real risk in this market |
| `product.html` | Real figures in place of `[$X]` — a "from" number is enough | No price signal loses qualified buyers who assume it is out of reach, and wastes calls on those who cannot afford it |
| `contact.html` | A working form endpoint (§4) | Nothing is captured today |
| All five | Five share images, 1200×630, saved as `assets/og-home.jpg`, `og-product.jpg`, `og-process.jpg`, `og-people.jpg`, `og-contact.jpg` | Without them, links shared on X, LinkedIn or Telegram render as bare text. Canva has a 1200×630 preset |
| All five | A real email on your own domain | A consultancy selling operational rigour should not run on a free address |
| `index.html` | Keep "Taking new engagements for Q4 2026" current, or delete that line | A stale availability badge is worse than none |

---

## 6. After launch

**Search engines.** Add the site to Google Search Console (`search.google.com/search-console`),
verify by DNS, and submit `https://3pstrategy.io/sitemap.xml`. Repeat at Bing Webmaster Tools.
Then run both `/product` and `/process` through Google's Rich Results Test — the FAQ and the
step-by-step process are eligible for enhanced search listings, and this confirms they registered.

**Redirects.** If `lupinxbt.xyz` stays registered, point it at the new site with **301** (permanent)
redirects — Netlify and Cloudflare both do this in the dashboard. A 302 passes no search authority.

**Analytics.** Every button carries a tracking id already. Sign up at **plausible.io** or
**usefathom.com**, paste their one-line script just before `</body>` on all five pages, and these
become your funnel — no cookie banner needed, which matters because the banner itself costs
conversions:

`home-tile-product` · `home-tile-process` · `home-tile-people` · `product-hero-book` ·
`process-hero-book` · `people-hero-book` · `contact-main-calendly` · `contact-form-submit` ·
plus a `*-book` and `*-sample` pair on each page's closing call-to-action.

The four numbers worth watching monthly: home → Product click-through, page → sample-report
submissions, sample report → call booked, call → engagement. Everything else is vanity.

**Content.** This is where the compounding is. The terms your buyers search — "web3 project due
diligence", "investment readiness audit", "operational risk token project", "grant application
readiness" — have almost no credible supply. Three or four substantive articles, each linking to
`product.html`, will outperform any further technical tuning.

---

## 7. `build.py` (optional)

If you edit the menu or footer, you would otherwise have to repeat the change five times. The
`src/` folder holds each piece once — header, footer, stylesheet, the shared call-to-action, and
one file per page body. Running `python3 build.py` regenerates all five pages from them.

You never have to use it. The five `.html` files are complete on their own, and editing them
directly is perfectly fine.

---

## 8. What is already handled

You do not need to do anything about the following — it is built in.

**SEO.** Unique title and description on every page; canonical URLs; full Open Graph and Twitter
card tags; structured data on each page (business and person on Home, service catalogue on
Product, step-by-step process plus FAQ on Process, audience list on People, contact details on
Contact), all linked so search engines read one business rather than five unrelated pages;
sitemap; robots file; clean heading structure with exactly one `<h1>` per page.

**Accessibility.** Skip-to-content link, keyboard-navigable throughout, visible focus outlines,
touch targets at or above the recommended size, form labels and inline errors announced properly,
and all animation disabled automatically for anyone who has reduced motion turned on.

**Design.** Every colour pair tested for contrast — body text 19:1, muted text 9.8:1, buttons
5.9:1, all above the 4.5:1 standard. Layout verified with no horizontal scrolling at phone,
tablet, laptop and desktop widths.

**Performance.** No images, no frameworks, no tracking by default. One external request (the
font). Each page is roughly 45 KB.

---

## 9. If something breaks

| Symptom | Cause | Fix |
|---|---|---|
| Page looks unstyled — plain text on white | A `<style>` block was deleted or a tag was removed | Re-copy that page from the backup zip |
| Menu button does nothing on mobile | The `<script>` at the bottom was removed | Re-copy that page |
| Links 404 after publishing | Files were uploaded inside a subfolder | Upload the *contents* of the folder, not the folder itself |
| Form does nothing | `action="#"` was never replaced | See §4 |
| Share preview shows no image | The OG images have not been created yet | See §5 |
