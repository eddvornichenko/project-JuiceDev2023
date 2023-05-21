document.querySelector('.menu-btn').addEventListener('click', function(e) {
  e.target.closest('.menu-btn').classList.toggle('menu-btn--toggle');
})
