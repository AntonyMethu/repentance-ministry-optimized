# Repentance & Holiness Ministry — Optimized Website
### A performance-first redesign for presentation to the site owner

---

## 🚀 What This Is

This is a fully optimized parallel version of **repentandpreparetheway.org**, built to demonstrate how a modern, fast, mobile-friendly website would look and function compared to the current site.

**Designed by:** Anthony Kamau — to present to the Ministry website owner as a suggested update.

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

### Side-by-side comparison points:

| Metric | Old Site | This Site |
|---|---|---|
| Page load (3G) | 30–60 seconds (timeouts) | < 3 seconds |
| Mobile layout | Broken / horizontal scroll | Fully responsive |
| Prophecy browsing | One endless page, no search | Paginated + searchable |
| Video loading | Immediate (slow) | Click-to-play (fast) |
| Dead embeds | 25+ timing out | Zero |
| Code quality | WebAcappella 2014 bloat | Clean HTML5 |

## 🔧 Customization Notes

- All colors are CSS variables in `css/style.css` under `:root {}` — easy to change
- To add more prophecies, copy any `<div class="prophecy-item">` block in `prophecies.html`
- The site uses Google Fonts (Cinzel + Crimson Pro) — these load fast and cached globally
- No JavaScript frameworks, no jQuery, no dependencies — pure HTML/CSS/JS

---

## 📬 Credits

Redesign by: Anthony Kamau 
Original site: repentandpreparetheway.org  
Purpose: Demonstration / proposed update
