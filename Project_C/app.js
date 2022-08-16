const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hello')) {
    circle.classList.add('hello');
  }
});

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hello')) {
    circle.classList.remove('hello');
  }
});
