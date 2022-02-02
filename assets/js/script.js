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