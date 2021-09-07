// AOS.init();

// $(window).on("load", function () {
//   $(".loader").fadeOut(1500);
// });
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Navigationimg").style.visibility = "hidden";
  } else {
    document.getElementById("Navigationimg").style.visibility = "initial";
  }
}

// $(window).on("load", function () {
//     $(".loader").fadeOut(1500);
//   });
  
//   $(document).ready(function () {
//     $("#menubar").click(function () {
//       $(".nav-links").slideToggle("slow");
//     });
//   });
  
//   var mq = window.matchMedia("(max-width: 576px)");
//   if (mq.matches) {
//     $(".nav-links ul li").click(function () {
//       $(".nav-links").slideToggle("slow");
//     });
//   }
  
//   $({ Counter: 0 }).animate(
//     {
//       Counter: $(".Projects").text(),
//     },
//     {
//       duration: 6000,
//       easing: "swing",
//       step: function () {
//         $(".Projects").text(Math.ceil(this.Counter));
//       },
//     }
//   );