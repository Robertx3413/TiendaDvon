const colors = document.querySelectorAll('.color');
const watchs = document.querySelectorAll('.watch-img');
const gradients = document.querySelectorAll('.gradient');

function changeColor() {
  let primary = this.getAttribute('primary');
  let color = this.getAttribute('color');
  
  let watch = document.querySelector(`
  .watch-img[color="${color}"]`);

  let gradient = document.querySelector(`
  .gradient[color="${color}"]`);
  
  document.documentElement.style
  .setProperty('--primary', primary);

  colors.forEach (c => c.classList.remove('active'));
  this.classList.add('active');

  watchs.forEach (s => s.classList.remove('show'));
  watch.classList.add('show');

  gradients.forEach(g => g.classList.remove('first'));
  gradient.classList.add('first');
};

colors.forEach (c => c.addEventListener('click', changeColor));