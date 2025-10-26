window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const main = document.getElementById('main');

  setTimeout(() => {
    intro.style.display = 'none';
    main.classList.remove('hidden');
    main.classList.add('show');
  }, 2500); // 2,5 detik intro
});
