const box = document.getElementById('box');
const btn = document.getElementById('animateBtn');
const themeSelect = document.getElementById('themeSelect');

window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.toggle('dark', savedTheme === 'dark');
    themeSelect.value = savedTheme;
  }
};

themeSelect.addEventListener('change', () => {
  const selected = themeSelect.value;
  localStorage.setItem('theme', selected);
  document.body.classList.toggle('dark', selected === 'dark');
});

btn.addEventListener('click', () => {
  box.classList.add('animate');
  setTimeout(() => box.classList.remove('animate'), 1000);
});
