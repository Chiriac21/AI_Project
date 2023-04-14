var btn = document.getElementById("top");

btn.classList.add('show');
window.addEventListener('scroll', function() {
  if (btn.offsetTop > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
    console.log(btn.offsetTop)
  e.preventDefault(btn.offsetTop);
  document.documentElement.animate({scrollTop:0}, '300');
  document.body.animate({scrollTop:0}, '300');
});