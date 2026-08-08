// Мобильное меню
const burger = document.getElementById('burger');
const navTabs = document.getElementById('navTabs');

burger.addEventListener('click', () => {
  const isOpen = navTabs.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});

navTabs.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navTabs.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Эффект печати в hero
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typeTarget = document.getElementById('typeTarget');
const terminalOutput = document.getElementById('terminalOutput');
const command = 'whoami';

function typeCommand() {
  if (prefersReducedMotion) {
    typeTarget.textContent = command;
    terminalOutput.classList.add('shown');
    return;
  }
  let i = 0;
  const interval = setInterval(() => {
    typeTarget.textContent = command.slice(0, i + 1);
    i++;
    if (i === command.length) {
      clearInterval(interval);
      setTimeout(() => terminalOutput.classList.add('shown'), 200);
    }
  }, 90);
}
window.addEventListener('DOMContentLoaded', typeCommand);

// Анимация появления скилл-баров при скролле
const skillbars = document.querySelectorAll('.skillbar');
if ('IntersectionObserver' in window && skillbars.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  skillbars.forEach(bar => observer.observe(bar));
} else {
  skillbars.forEach(bar => bar.classList.add('in-view'));
}

// Подсветка активного таба в навигации
const sections = document.querySelectorAll('main .section, .hero');
const tabs = document.querySelectorAll('.tab');

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tabs.forEach(tab => {
          tab.classList.toggle('is-active', tab.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(section => navObserver.observe(section));
}