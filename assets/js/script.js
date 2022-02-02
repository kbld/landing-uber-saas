/* let seconds = seconds,
  minutes = seconds * 60,
  hours = minutes * 60,
  days = hours * 24;

var date_actuelle = Date.now();
var date_final = new Date("Mar 1 00:00:00 2022");

getDate(), getMonth(), getFullYear();

let h = math.floor(gap % jour(heure));

document.getElementById("demo").innerHTML = ms;


*/


function reveal() {
        var reveals = document.querySelectorAll(".reveal, .reveal-title, .reveal-p ");
      
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

/* $(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find(".article-title");
    links.on(
      "click",
      {
        el: this.el,
        multiple: this.multiple,
      },
      this.dropdown
    );
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el
        .find(".accordion-content")
        .not($next)
        .slideUp()
        .parent()
        .removeClass("open");
    }
  };
  var accordion = new Accordion($(".accordion-container"), false);
});


*/




const decompteDateFinale = new Date("march 1, 2022 00:00:00").getTime();

function decompte() {
  let now = new Date().getTime();
  let gap = decompteDateFinale - now;

  let seconde = 1000;
  let minute = seconde * 60;
  let heure = minute * 60;
  let jour = heure * 24;

  let j = Math.floor(gap / jour);
  let h = Math.floor((gap % jour) / heure);
  let m = Math.floor((gap % heure) / minute);
  let s = Math.floor((gap % minute) / seconde);

  document.getElementById("jour").innerText = j;
  document.getElementById("heure").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("seconde").innerText = s;
}

setInterval(function () {
decompte();
}, 1000);