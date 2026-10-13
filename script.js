// Progressive enhancement: all findings and native disclosures work without JavaScript.
const controls = document.querySelectorAll('[data-category]');
const rows = document.querySelectorAll('[data-row]');
const note = document.querySelector('.selection-note');
controls.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.category;
  controls.forEach(control => {
    const active = control === button;
    control.classList.toggle('active', active);
    control.setAttribute('aria-pressed', String(active));
  });
  rows.forEach(row => row.classList.toggle('dimmed', selected !== 'all' && row.dataset.row !== selected));
  note.textContent = selected === 'all' ? 'Showing all original satisfaction categories.' : `Highlighting ${button.textContent}. Original bar lengths are unchanged; units are not supplied in the source.`;
}));
if ('IntersectionObserver' in window) {
  const links = document.querySelectorAll('.research-nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          const sectionHash = entry.target.closest('.research-grid') ? '#research-findings' : `#${entry.target.id}`;
          const active = link.hash === sectionHash;
          link.classList.toggle('current', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, {rootMargin: '-15% 0px -55% 0px'});
  document.querySelectorAll('.analysis article, #rec').forEach(section => observer.observe(section));
}
