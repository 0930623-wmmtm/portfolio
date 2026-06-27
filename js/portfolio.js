 const fadeItems = document.querySelectorAll('.fade-up');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  fadeItems.forEach(item => {
    fadeObserver.observe(item);
  });

  window.addEventListener('load', () => {
  const loading = document.getElementById('loading');

  setTimeout(() => {
    loading.classList.add('hide');
  }, 900);
});

const categoryBtns = document.querySelectorAll('.category-btn');
const workCards = document.querySelectorAll('.work-card');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    categoryBtns.forEach(item => {
      item.classList.remove('active');
    });

    btn.classList.add('active');

    workCards.forEach(card => {
      const category = card.dataset.category;

      if (filter === 'all' || filter === category) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
  });
});

const countItems = document.querySelectorAll('.count-up');

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const item = entry.target;
      const target = Number(item.dataset.count);
      let count = 0;

      const speed = 40;

      const counter = setInterval(() => {
        count++;

        item.textContent = count + '+';

        if (count >= target) {
          clearInterval(counter);
        }
      }, speed);

      countObserver.unobserve(item);
    }
  });
}, {
  threshold: 0.5
});

countItems.forEach(item => {
  countObserver.observe(item);
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const hoverItems = document.querySelectorAll('a, button');

hoverItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
  });

  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });
});

window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

const pageLinks = document.querySelectorAll('a');

pageLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    ) {
      return;
    }

    e.preventDefault();

    document.body.classList.add('page-out');

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});

const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / documentHeight) * 100;

  scrollProgress.style.width = scrollPercent + '%';
});

window.addEventListener('load', () => {
  const loading = document.getElementById('loading');

  setTimeout(() => {
    loading.classList.add('hide');
  }, 900);
});