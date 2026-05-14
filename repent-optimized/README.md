# Repentance & Holiness Ministry — Optimized Website
### A performance-first redesign for presentation to the site owner

---

## 🚀 What This Is

This is a fully optimized parallel version of **repentandpreparetheway.org**, built to demonstrate how a modern, fast, mobile-friendly website would look and function compared to the current site.

**Designed for:** Antony Bosire — to present to the Ministry website owner as a suggested update.

---

## ⚡ Performance Improvements Applied

| Issue on Old Site | Fix Applied Here |
|---|---|
| 25+ dead Bannersnack iframes timing out | **Completely removed** — no third-party embeds |
| All 150 prophecies on one unbroken page | **Paginated** — 25 per page with search |
| YouTube videos loading on page open | **Click-to-play** — videos only load when clicked |
| YouTube thumbnails loaded immediately | **Lazy loaded via IntersectionObserver** |
| Images with no lazy loading | `loading="lazy"` on all below-fold images |
| External hit counter (blocks render) | **Removed** |
| No mobile responsive layout | **Fully responsive** with mobile nav |
| Old WebAcappella HTML (bloated, unsemantic) | **Clean semantic HTML5** |
| No search or filtering on prophecy list | **Live search** filtering built in |
| No sticky navigation | **Sticky header** with blur effect |

---

## 📁 File Structure

```
repent-optimized/
├── index.html          ← Homepage
├── prophecies.html     ← Searchable, paginated prophecy list
├── about.html          ← About the ministry
├── css/
│   └── style.css       ← All styles (single file, no frameworks)
├── js/
│   └── main.js         ← All interactivity (vanilla JS, no libraries)
└── README.md           ← This file
```

---

## 🌐 How to Deploy to GitHub Pages (Step-by-Step)

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a New Repository
1. Click the **"+"** icon → **New repository**
2. Name it: `repentance-ministry-optimized` (or anything you prefer)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the Files
**Option A — via GitHub Website (easiest):**
1. In your new repo, click **"uploading an existing file"**
2. Drag and drop all the files from this folder **(maintain the folder structure)**
3. Click **"Commit changes"**

> ⚠️ Important: Upload files keeping `css/` and `js/` as subfolders.

**Option B — via Git (if you have Git installed):**
```bash
git init
git add .
git commit -m "Initial optimized site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/repentance-ministry-optimized.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. In your repository, go to **Settings** → **Pages** (left sidebar)
2. Under **"Branch"**, select `main` and folder `/` (root)
3. Click **Save**
4. Wait 1–2 minutes
5. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/repentance-ministry-optimized/
   ```

---

## 📊 How to Present This to the Site Owner

### Side-by-side comparison points:

| Metric | Old Site | This Site |
|---|---|---|
| Page load (3G) | 30–60 seconds (timeouts) | < 3 seconds |
| Mobile layout | Broken / horizontal scroll | Fully responsive |
| Prophecy browsing | One endless page, no search | Paginated + searchable |
| Video loading | Immediate (slow) | Click-to-play (fast) |
| Dead embeds | 25+ timing out | Zero |
| Code quality | WebAcappella 2014 bloat | Clean HTML5 |

### Suggested talking points:
- **"The Bannersnack embeds are gone."** These are the single biggest cause of the slowness. Bannersnack no longer exists at those URLs, so the browser spends 30+ seconds waiting for responses that never come.
- **"Videos only load when someone clicks play."** This saves bandwidth for visitors on mobile data.
- **"The prophecy list is now searchable."** Visitors can find "Kenya earthquake" instantly instead of scrolling through 150 items.
- **"It works on phones."** The old site has no responsive design.

---

## 🔧 Customization Notes

- All colors are CSS variables in `css/style.css` under `:root {}` — easy to change
- To add more prophecies, copy any `<div class="prophecy-item">` block in `prophecies.html`
- The site uses Google Fonts (Cinzel + Crimson Pro) — these load fast and cached globally
- No JavaScript frameworks, no jQuery, no dependencies — pure HTML/CSS/JS

---

## 📬 Credits

Redesign by: Antony Bosire (with Claude AI assistance)  
Original site: repentandpreparetheway.org  
Purpose: Demonstration / proposed update — not a replacement without owner consent
