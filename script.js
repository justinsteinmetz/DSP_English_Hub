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
</script>
