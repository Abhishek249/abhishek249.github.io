document.getElementById('year').textContent = new Date().getFullYear();

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const sections = document.querySelectorAll('.section, .statement, .contact');
  sections.forEach(section => section.classList.add('reveal'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(section => observer.observe(section));
}
