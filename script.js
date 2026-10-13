// Progressive enhancement: charts, counts and native disclosures are readable without JavaScript.
const controls = document.querySelectorAll('[data-category]');
const rows = document.querySelectorAll('#a3 [data-row]');
const result = document.querySelector('.selection-summary');
controls.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.category;
  controls.forEach(control => {
    const active = control === button;
    control.classList.toggle('active', active);
    control.setAttribute('aria-pressed', String(active));
  });
  rows.forEach(row => row.querySelector('.satisfaction-fill').classList.toggle('selected', category === row.dataset.row));
  const selected = [...rows].find(row => row.dataset.row === category);
  result.textContent = selected
    ? `${button.textContent}: ${selected.dataset.count} responses · ${selected.dataset.percent}% · Female ${selected.dataset.female}, Male ${selected.dataset.male}`
    : '500 responses · 100.0%';
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
