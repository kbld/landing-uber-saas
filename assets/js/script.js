// FAQ FUNCTION

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

// COUNTDOWN FUNCTION

window.addEventListener("scroll", reveal);

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

// ANIMATION OPACITY ON SCROLL

$(function () {
  divFade = $(".title-restaurant, .soustitle-restaurant");

  var toggleHeader = function (noAnimate) {
    var threshold = 400,
      fadeLength = 300,
      opacity,
      scrollTop = $(document).scrollTop();

    if (scrollTop < threshold) {
      opacity = 0;
    } else if (scrollTop > threshold + fadeLength) {
      opacity = 1;
    } else {
      if (noAnimate) {
        opacity = 1;
      } else {
        opacity = (scrollTop - threshold) / fadeLength;
      }
    }

    divFade.css("opacity", opacity);
  };

  toggleHeader(true);
  $(window).scroll(function () {
    toggleHeader();
  });
});

/*
  transform: matrix(1, 0, 0, 1, 0, 100); opacity: 0;
to
  transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;

  */
