// Accessibility: give each game-item link a clean aria-label from its game-name
document.querySelectorAll('a.game-item').forEach(function(link) {
  var name = link.querySelector('.game-name');
  if (name) link.setAttribute('aria-label', name.textContent.trim());
});

function toggleNav() {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('navToggle');
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Close mobile nav when resizing to desktop
window.addEventListener('resize', function() {
  if (window.innerWidth > 620) {
    const nav = document.getElementById('mainNav');
    const btn = document.getElementById('navToggle');
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});

// ── SEARCH ──
(function() {
  const input = document.getElementById('hubSearch');
  const clearBtn = document.getElementById('searchClear');
  const emptyMsg = document.getElementById('searchEmpty');
  const emptyTerm = document.getElementById('searchEmptyTerm');

  if (!input) return;

  function getText(el, selector) {
    const node = el.querySelector(selector);
    return node ? node.textContent.toLowerCase() : '';
  }

  function runSearch() {
    const q = input.value.trim().toLowerCase();
    clearBtn.hidden = q === '';

    if (q === '') {
      // Reset everything
      document.querySelectorAll('.search-hidden').forEach(function(el) {
        el.classList.remove('search-hidden');
      });
      emptyMsg.hidden = true;
      return;
    }

    let totalVisible = 0;

    // Filter game-items
    document.querySelectorAll('.game-item').forEach(function(item) {
      const text = [
        getText(item, '.game-name'),
        getText(item, '.game-meta'),
        getText(item, '.game-desc'),
        item.getAttribute('aria-label') || ''
      ].join(' ');
      if (text.includes(q)) {
        item.classList.remove('search-hidden');
      } else {
        item.classList.add('search-hidden');
      }
    });

    // Filter book-cards
    document.querySelectorAll('.book-card').forEach(function(card) {
      const text = [
        getText(card, '.book-title'),
        getText(card, '.book-author'),
        getText(card, '.book-desc')
      ].join(' ');
      if (text.includes(q)) {
        card.classList.remove('search-hidden');
        totalVisible++;
      } else {
        card.classList.add('search-hidden');
      }
    });

    // Collapse year-cards where all game-items are hidden
    document.querySelectorAll('.year-card').forEach(function(card) {
      const visible = card.querySelectorAll('.game-item:not(.search-hidden)').length;
      if (visible === 0) {
        card.classList.add('search-hidden');
      } else {
        card.classList.remove('search-hidden');
        totalVisible += visible;
      }
    });

    // Also check section-label and year-grid/book-grid siblings
    document.querySelectorAll('.year-grid, .book-grid').forEach(function(grid) {
      const visibleCards = grid.querySelectorAll('.year-card:not(.search-hidden), .book-card:not(.search-hidden)').length;
      if (visibleCards === 0) {
        grid.classList.add('search-hidden');
        // Hide the preceding section-label too
        const label = grid.previousElementSibling;
        if (label && label.classList.contains('section-label')) {
          label.classList.add('search-hidden');
        }
      } else {
        grid.classList.remove('search-hidden');
        const label = grid.previousElementSibling;
        if (label && label.classList.contains('section-label')) {
          label.classList.remove('search-hidden');
        }
      }
    });

    emptyMsg.hidden = totalVisible > 0;
    emptyTerm.textContent = input.value.trim();
  }

  input.addEventListener('input', runSearch);

  clearBtn.addEventListener('click', function() {
    input.value = '';
    input.focus();
    runSearch();
  });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      input.value = '';
      runSearch();
    }
  });
})();
