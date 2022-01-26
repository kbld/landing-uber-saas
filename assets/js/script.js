$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 90) {
        $(".navbar").css("position", "fixed");
        $(".navbar").css("padding", "37px 50px");
        var styleElem = document.head.appendChild(
          document.createElement("style")
        );
        styleElem.innerHTML = ".navbar {background: #000;}";
      } else {
        $(".navbar").css("position", "absolute");
        $(".navbar").css("padding", "57px 50px");
        var styleElem = document.head.appendChild(
          document.createElement("style")
        );
        styleElem.innerHTML = ".navbar {background :linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7497313753581663) 31%, rgba(0,0,0,1) 98%);;}";
      }
    });
  });