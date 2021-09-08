AOS.init();

$(window).on("load", function () {
  $(".loader").fadeOut(2500);
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Navigationimg").style.visibility = "hidden";
  } else {
    document.getElementById("Navigationimg").style.visibility = "initial";
  }
}

  
  $(document).ready(function () {
    $(".bars").click(function () {
      $(".Navigationbar").slideToggle("slow");
    document.getElementById("Navigationimg").style.visibility = "initial";

    });
   
  });
  