//hamburger
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".nav_items").toggleClass("open");
  });
});
//FIm hamburger

//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//Fim Slideshow

//Dot clicks
$(".a").click(function(){
  currentSlide(1);
});

$(".b").click(function(){
  currentSlide(2);
});

$(".c").click(function(){
  currentSlide(3);
});

$(".d").click(function(){
  currentSlide(4);
});
//Fim Dot clicks

//Setas
$(".prev").click(function(){
  plusSlides(-1);
});

$(".next").click(function(){
  plusSlides(1);
});
//Setas

//Pages ao clicar
  $(".botaomore").click(function(){
      $(".pageone").removeClass("page_active");
    $(".pagetwo").addClass("page_active");
  });
//Fim Pages ao clicar
