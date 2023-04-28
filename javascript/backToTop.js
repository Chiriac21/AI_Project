var btn = document.getElementById("top");

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

window.addEventListener('scroll', function() {
  console.log(height);
  console.log(document.body.scrollTop)
  if (document.body.scrollTop > 400) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
  if(document.body.scrollTop > 1933)
  {
    btn.classList.add('stop');
  } else {
    btn.classList.remove('stop');
  }
}, {capture: true});


btn.addEventListener('click', function(e) {

  e.preventDefault(document.body.scrollTop);
  document.body.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});