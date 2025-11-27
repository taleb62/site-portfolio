/* script.js
 - bascule thème (persisté dans localStorage)
 - amélioration accessibilité et petits comportements
*/

// Helpers
const $ = (sel) => document.querySelector(sel);

// Theme management
const themeToggleBtn = $('#theme-toggle');
const root = document.documentElement;
const THEME_KEY = 'site-theme';

function applyTheme(theme){
  if(theme === 'dark') {
    document.documentElement.style.colorScheme = 'dark';
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.style.colorScheme = 'light';
    document.documentElement.classList.remove('dark');
  }
}

// Detect saved theme or OS preference
const saved = localStorage.getItem(THEME_KEY);
if(saved){
  applyTheme(saved);
} else {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

// Toggle on button click
themeToggleBtn && themeToggleBtn.addEventListener('click', () => {
  const current = localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});

// Small UX: keyboard focus for skip link
const skip = document.querySelector('.skip');
skip && skip.addEventListener('click', (e) => {
  const main = document.getElementById('main');
  main && main.setAttribute('tabindex', '-1');
  main && main.focus();
});

// Analytics lightweight (console) - optional
console.log("Portfolio chargé — bonne visite, Taleb !");
