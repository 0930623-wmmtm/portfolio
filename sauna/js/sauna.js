
const targets = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  targets.forEach(target => {
    const rect = target.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      target.classList.add('show');
    }
  });
});

window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');

  setTimeout(() => {
    loading.classList.add('hide');
  }, 1200);
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});