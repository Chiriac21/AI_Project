// reveal animation on scroll
function reveal() {
    console.log("scroll")
    var reveals = document.querySelectorAll(".reveal");
    console.log("reveals:", reveals)

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


// old logic
var btn = document.getElementById("top");

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

console.log(new Date().getHours() + " " + new Date().getMinutes());

function topBtn() {
  console.log(height-1000);
  console.log(document.body.scrollTop)
  if (document.body.scrollTop > 400) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
  if(document.body.scrollTop > height - 1000)
  {
    btn.classList.add('stop');
  } else {
    btn.classList.remove('stop');
  }
}
window.addEventListener('scroll', ()=>{
  topBtn();
  reveal();
}, {capture: true});


btn.addEventListener('click', function(e) {

  e.preventDefault(document.body.scrollTop);
  document.body.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});