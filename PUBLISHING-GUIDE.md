# Publishing this site — GitHub + Vercel, no code

Nine steps, about 45 minutes of work plus DNS waiting time. Nothing here needs a terminal or a
single line of code.

You have: VS Code installed, a GitHub account, and a Vercel account about to be created. That is
everything required.

---

## Read this first: the Vercel plan question

Vercel's free **Hobby** plan is, in their own words, restricted to *"non-commercial, personal use
only."* A consultancy site that sells audits is commercial. So:

- **To learn the flow and test:** Hobby is fine. Deploy today, see it live.
- **To run it as your business site:** either upgrade to **Vercel Pro** (~$20/month), or host it
  free on **Cloudflare Pages**, whose free tier permits commercial use.

Everything in this guide works identically on Cloudflare Pages — same GitHub repository, same
import flow, and a `vercel.json` file that Cloudflare simply ignores (it has its own equivalent
settings in the dashboard). Nothing is wasted whichever you choose.

---

## Step 1 — Tidy the folder (2 min)

Open `D:\XBT Services\3pstrategy-site`.

**Upload these:**

```
index.html      product.html    process.html    people.html    contact.html
vercel.json     sitemap.xml     robots.txt      favicon.svg
README.md       PUBLISHING-GUIDE.md
assets/         (the folder, with site.css and site.js inside)
```

**Leave these behind** — they are working files, not part of the website:

```
src/            build.py
```

**Delete these** — leftovers from the earlier two-page version that nothing links to any more:

```
3ps-audit.html  HANDOFF.md
```

---

## Step 2 — Create the GitHub repository (3 min)

1. Go to **github.com** and sign in
2. Top right **+** → **New repository**
3. **Repository name:** `3pstrategy-site`
4. **Visibility:** *Private* is fine when the repository sits under your own account. If you put it
   under a GitHub *organisation*, Vercel's free plan cannot deploy private organisation repos —
   choose *Public* in that case
5. **Do not tick** "Add a README file", ".gitignore" or "license" — you want an empty repository
6. **Create repository**

You will land on a page that says "Quick setup". Stay there.

---

## Step 3 — Upload the files (5 min)

1. On that page, click the link **"uploading an existing file"**
2. Open `D:\XBT Services\3pstrategy-site` in File Explorer
3. Select the files from Step 1 — including the `assets` folder — and **drag them onto the browser
   window**
4. **Critical:** drag the *contents* of the folder, not the folder itself. `index.html` must end up
   at the top level of the repository. If you see `3pstrategy-site/index.html`, you dragged the
   folder — delete and redo
5. Scroll down, leave the commit message as it is, click **Commit changes**

Check: the repository page should now list `index.html`, `product.html` and the rest directly, with
`assets` as a folder beside them.

---

## Step 4 — Create the Vercel account and import (5 min)

1. Go to **vercel.com** → **Sign Up**
2. Choose **Continue with GitHub** → **Authorize Vercel**
3. GitHub asks which repositories Vercel may see. Either "All repositories" or "Only select
   repositories" → pick `3pstrategy-site`
4. In the Vercel dashboard, click **Add New…** → **Project**
5. Find `3pstrategy-site` in the list → **Import**
6. On the configure screen:
   - **Framework Preset:** `Other`
   - **Root Directory:** `./`
   - **Build and Output Settings:** leave every field empty — this is plain HTML, there is nothing
     to build
   - **Environment Variables:** none
7. Click **Deploy**

Twenty to forty seconds later you get a live URL like `3pstrategy-site.vercel.app`.

---

## Step 5 — Test the live site (3 min)

- Click through all five tabs
- Check the address bar reads `/product`, not `/product.html` — that is `vercel.json` doing its job
- Drag the window narrow until the **Menu** button appears; open and close it
- Open the URL on your phone
- Open one of the FAQ questions on the Process page

---

## Step 6 — Point your domain at it (10 min, plus DNS waiting)

If you have not bought `3pstrategy.io` yet: Namecheap, Porkbun or Cloudflare all work. A `.io`
runs roughly $30–40 a year.

1. Vercel → your project → **Settings** → **Domains**
2. Type `3pstrategy.io` → **Add**
3. Add `www.3pstrategy.io` as well. Vercel offers to redirect one to the other — send **www → the
   plain domain**, so you have one canonical address
4. Vercel then displays the exact DNS records you need (an **A** record for the plain domain, a
   **CNAME** for www). Copy the values Vercel shows you — do not use values from a blog post, they
   change
5. In your registrar's DNS panel, create those records exactly as shown
6. Wait. Usually minutes, occasionally a few hours. Vercel issues the HTTPS certificate by itself
   once the records resolve — you do nothing

---

## Step 7 — Fix the addresses inside the pages (5 min)

**This is the step people skip, and it quietly costs them their search ranking.**

Every page contains a line like `<link rel="canonical" href="https://3pstrategy.io/product">`. That
tag tells Google "this is the real address of this page". If your live site is actually at
`3pstrategy-site.vercel.app`, you are pointing Google at an address that does not serve your site,
and it may index neither.

1. Open VS Code → **File → Open Folder** → `D:\XBT Services\3pstrategy-site`
2. Press **Ctrl+Shift+H** (Replace in Files)
3. **Find:** `https://3pstrategy.io` — **Replace:** your real live address, no trailing slash
4. Click **Replace All**
5. While you are there, do the same for `hello@3pstrategy.io` → your real email, and for the
   Calendly link if yours differs
6. Re-upload the changed files to GitHub: repository page → **Add file** → **Upload files** → drag
   → **Commit changes**. Vercel redeploys within about 30 seconds

If you already own the domain, set it up first (Step 6) and do this once, with the final address.

---

## Step 8 — How to edit the site from now on

Both options are code-free, and both redeploy the live site automatically.

**On github.com — for a quick text change**

Open the file → click the **pencil** icon → edit → **Commit changes**. Vercel picks it up in
seconds.

**VS Code in the browser — for anything bigger**

On your repository page, press the **`.`** key (full stop). A complete VS Code opens at
`github.dev` with your repository loaded — nothing to install, no git commands. Edit, then click
**Source Control** in the left sidebar, type a short message, and click **Commit & Push**.

You do not need Git or GitHub Desktop installed. If you later want VS Code on your desktop wired
directly to the repository, install Git for Windows and GitHub Desktop — but the two options above
cover almost everything.

---

## Step 9 — Finish the launch list

From `README.md`, still outstanding:

- **Form endpoint** (§4) — the sample-report form captures nothing until you paste in a Formspree
  address
- **Pricing** — replace `[$X]` on the Product page
- **Testimonials** — real names and roles on the Contact page
- **Share images** — five 1200×630 JPGs in `assets/`
- **Google Search Console** — verify the domain, submit `sitemap.xml`
- **Redirects** — 301 `lupinxbt.xyz` to the new address

---

## If something goes wrong

| What you see | Why | Fix |
|---|---|---|
| Every page 404s | You dragged the folder instead of its contents | `index.html` must be at the repository root. Delete the uploaded folder and re-upload the files |
| `/product` 404s but `/product.html` works | `vercel.json` did not get uploaded | Upload it to the repository root |
| A page loads as plain unstyled text | That file was truncated during upload | Re-upload just that file from the backup zip |
| Domain shows "Invalid Configuration" | The DNS record is wrong or has not propagated | Re-check the record against exactly what Vercel displays; wait longer |
| Your edit is not showing | The deployment may have failed | Vercel → **Deployments** — the newest must say **Ready**. Then hard-refresh with Ctrl+Shift+R |
| Vercel emails you about fair use | Hobby is non-commercial only | Upgrade to Pro, or move the repository to Cloudflare Pages |
| Formspree emails never arrive | Endpoint not pasted in, or the first submission needs confirming | Check `action="…"` in `contact.html`; confirm the form in your Formspree dashboard |
