/* ============================================================
   REPENTANCE & HOLINESS MINISTRY — Shared JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Nav Toggle ──
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    // close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }

  // ── Active nav link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  // ── Lazy Video (click-to-load YouTube embeds) ──
  document.querySelectorAll('.video-placeholder').forEach(placeholder => {
    const wrapper = placeholder.closest('.video-wrapper');
    const videoId = wrapper?.dataset.videoId;
    if (!videoId) return;

    // Load thumbnail lazily
    const thumb = placeholder.querySelector('img.thumb');
    if (thumb) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            thumb.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            io.disconnect();
          }
        });
      }, { rootMargin: '200px' });
      io.observe(placeholder);
    }

    placeholder.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      wrapper.innerHTML = '';
      wrapper.appendChild(iframe);
    });
  });

  // ── Scroll fade-in ──
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
  }

  // ── Prophecy search + pagination ──
  initProphecyList();
});


function initProphecyList() {
  const searchInput = document.getElementById('prophecy-search');
  const listEl = document.getElementById('prophecy-list');
  const countEl = document.getElementById('prophecy-count');
  const paginationEl = document.getElementById('pagination');
  if (!searchInput || !listEl) return;

  const allItems = Array.from(listEl.querySelectorAll('.prophecy-item'));
  const PER_PAGE = 25;
  let currentPage = 1;
  let filtered = allItems;

  function filter(query) {
    const q = query.toLowerCase().trim();
    filtered = allItems.filter(item => {
      if (!q) return true;
      return item.textContent.toLowerCase().includes(q);
    });
    currentPage = 1;
    render();
  }

  function render() {
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / PER_PAGE));
    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;

    // Show/hide items
    allItems.forEach(item => item.style.display = 'none');
    filtered.slice(start, end).forEach(item => item.style.display = '');

    // Count
    if (countEl) {
      countEl.innerHTML = `Showing <strong>${Math.min(PER_PAGE, total - start)}</strong> of <strong>${total}</strong> prophecies`;
    }

    // Pagination
    if (paginationEl) {
      paginationEl.innerHTML = '';
      if (pages <= 1) return;

      const prev = btn('← Prev', currentPage === 1);
      prev.addEventListener('click', () => { if (currentPage > 1) { currentPage--; render(); scrollToList(); } });
      paginationEl.appendChild(prev);

      // page numbers (show max 7)
      const range = pageRange(currentPage, pages);
      range.forEach(p => {
        if (p === '…') {
          const dot = document.createElement('span');
          dot.textContent = '…';
          dot.style.cssText = 'color:var(--muted);padding:0 4px;font-family:var(--font-ui);font-size:0.8rem';
          paginationEl.appendChild(dot);
        } else {
          const b = btn(p, false);
          if (p === currentPage) b.classList.add('active');
          b.addEventListener('click', () => { currentPage = p; render(); scrollToList(); });
          paginationEl.appendChild(b);
        }
      });

      const next = btn('Next →', currentPage === pages);
      next.addEventListener('click', () => { if (currentPage < pages) { currentPage++; render(); scrollToList(); } });
      paginationEl.appendChild(next);
    }
  }

  function btn(label, disabled) {
    const b = document.createElement('button');
    b.textContent = label;
    b.className = 'page-btn';
    b.disabled = disabled;
    return b;
  }

  function pageRange(cur, total) {
    if (total <= 7) return Array.from({length: total}, (_, i) => i + 1);
    const r = [1];
    if (cur > 3) r.push('…');
    for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) r.push(i);
    if (cur < total - 2) r.push('…');
    r.push(total);
    return r;
  }

  function scrollToList() {
    document.querySelector('.prophecy-toolbar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  searchInput.addEventListener('input', e => filter(e.target.value));
  render(); // initial render
}
