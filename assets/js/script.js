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

const decompteDateFinale = new Date("march 15, 2022 00:00:00").getTime();

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
  divFade = $(".title-restaurant, .soustitle-restaurant"); // select the element

  var toggleHeader = function (noAnimate) {
    // function to toggle the header
    var threshold = 400, // Délai d'affichage en ms
      fadeLength = 300, // Longueur fondu animation
      opacity, // Opacité
      scrollTop = $(document).scrollTop(); // Position du scroll
    if (scrollTop < threshold) {
      // Si le scroll est inférieur au délai
      opacity = 0; // Opacité 0
    } else {
      // Sinon
      if (noAnimate) {
        // Si on ne veut pas animer
        opacity <= 1; // L'opacité Maximum est de 1
      } else {
        // Sinon
        opacity = (scrollTop - threshold) / fadeLength; // L'opacité s'adapte à la position du scroll pour atteindre 0 < 1
      }
    }

    divFade.css("opacity", opacity);
  };

  toggleHeader(true); // On affiche le header au départ
  $(window).scroll(function () {
    // On ajoute un écouteur scroll
    toggleHeader(); // On affiche le header
  });
});

// index.js
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let mockup_rotate = document.getElementById("reload");
  mockup_rotate.style.transform =
    "rotate(" + window.pageYOffset / -122 + "deg)";

  // Définir un degré maxium de rotation ou définir que dès que l'on ne voit plus le mockup il s'arrete de tourner
}

/*
  transform: matrix(1, 0, 0, 1, 0, 100); opacity: 0;
to
  transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;

  */

/* $(function () {
  divFade = $(".title-restaurant, .soustitle-restaurant"); // select the element

  var toggleHeader = function (noAnimate) { // function to toggle the header
    var threshold = 400, // Délai d'affichage en ms
      fadeLength = 300, // Longueur fondu animation
      opacity, // Opacité
      transform,
      scrollTop = $(document).scrollTop(); // Position du scroll
    if (scrollTop < threshold) { // Si le scroll est inférieur au délai
      opacity = 0; // Opacité 0
      transform = "translateY(0)"; // Translation 0
    }  else { // Sinon
      if (noAnimate) { // Si on ne veut pas animer
        opacity = 1; // L'opacité Maximum est de 1
        transform = "translateY(0)"; // Translation 0
      } else { // Sinon
        opacity = (scrollTop - threshold) / fadeLength; // L'opacité s'adapte à la position du scroll pour atteindre 0 < 1
        transform = "translateY(-" + (scrollTop - threshold) + "px)"; // Translation en fonction de la position du scroll
      }
    }

    divFade.css("opacity", opacity);
    divFade.css("transform", transform);  
  };

  toggleHeader(true); // On affiche le header au départ
  $(window).scroll(function () { // On ajoute un écouteur scroll
    toggleHeader(); // On affiche le header
  });
}); */
