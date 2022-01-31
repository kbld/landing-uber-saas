/* $(document).ready(function () {
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
        styleElem.innerHTML = ".navbar {background :  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);}";
      }
    });
  }); */

  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "04/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());



  var isAlreadyRun = false;

$(window).scroll( function(){

    $('.counter-show').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();


            if( bottom_of_window > ( bottom_of_object + 20 )  ){
				if (!isAlreadyRun) {
					$('.count-number').each(function () {
	            	
	                $(this).prop('Counter', 0).animate({
	                    Counter: $(this).text()
	                }, {
	                        duration: 3500,
	                        easing: 'swing',
	                        step: function (now) {
	                            $(this).text(Math.ceil(now));
	                        }
	                    });
	            	});
				}
                isAlreadyRun = true;
            }
    }); 

});




