window.addEventListener('scroll', function() {
  var footer = document.getElementById('FooterBar');

  if (window.scrollY > 0) {
      footer.classList.add('disappear');
      footer.classList.remove('appear');
  } else {
      footer.classList.remove('disappear');
      footer.classList.add('appear');
  }
});