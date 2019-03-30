// This function allows for the hidding and showing of the feeds
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  var nextFrame = slideIndex + n;
  var y = document.getElementsByTagName("iframe");
  var i;
  for (var i = 0, f; f = y[i]; i++) {
  y[i].src = y[i].src;
      }
    //I was having trouble with displaying content on an iframe and I found that reloading them fixes it, so I did this
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
    var x = document.getElementsByClassName("slideshow-container");
    var y = document.getElementsByTagName("iframe");
    var i;
    for (var i = 0, f; f = y[i]; i++) {
    y[i].src = y[i].src;
    }
    // I was having trouble with displaying content on an iframe and I found that reloading them fixes it, so I did this
  }

  function showSlides(n) {
    var slides = document.getElementsByClassName("hubSlides");
    var dots = document.getElementsByClassName("dot");
    var x = document.getElementsByClassName("slideshow-container");
    var y = document.getElementsByTagName("iframe");
    var i;
    if(n > slides.length) {
      slideIndex = 1
    }
    if(n < 1) {
      slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
