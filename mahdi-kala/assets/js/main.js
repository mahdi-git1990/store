//set the date we're counting down to
var countDownDate = new Date("March 26, 2024 12:44:00").getTime();

//update the count down every 1 second
var x = setInterval(function () {
  //get today's date and time
  var now = new Date().getTime();

  //find the distance between now and the count down date
  var distance = countDownDate - now;

  //time calculations for days , hours , minutes and second
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML =
  //   '<span id="day">' +
  //   days +
  //   "</span>" +
  //   '<span id="hours">' +
  //   hours +
  //   "</span>" +
  //   '<span id="minutes">' +
  //   minutes +
  //   "</span>" +
  //   '<span id="seconds">' +
  //   seconds +
  //   "</span>";
  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="day">' +
      days +
      "</span>" +
      '<span id="hours">' +
      hours +
      "</span>" +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }

  //If the count down is over , write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "";
    y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }

    // document.getElementById("after-expire").setAttribute("id", "offer-expire-text");
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < z.length; i++) {
      g[i].classList.add("offer-expire-text");
    }

    // document.getElementById("offer-expire-text-inner").innerHTML ="پیشنهاد ویژه این محصول به پایان رسیده!";
    var d = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
    }

    // document.getElementById("offer-blur").style.filter = "blur(2px)";
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    // items: 6,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        center: false,
      },
      1200: {
        items: 4,
        nav: true,
        slideBy: 3,
      },
    },
  });
});

$(".tt").tooltip("show");
$(".popovers").popover({
  trigger: "hover"
})

$(".popovers").popover("show");

$(".tot").toast("show");

// var countDownDate = new Date("March 05, 2024 11:23:00").getTime();

// var myfunc = setInterval(function () {

//   var currentDate = new Date().getTime();
//   var timeDifference = countDownDate - currentDate;

// // Convert milliseconds to days, hours, minutes, and seconds
// var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

// // Display the calculated values to users through HTML
// document.getElementById("days").innerHTML = days ;
// document.getElementById("hours").innerHTML = hours;
// document.getElementById("mins").innerHTML = minutes;
// document.getElementById("secs").innerHTML = seconds;

// // Display a message when the timer is over
// if (timeleft < 0) {
//     clearInterval(myfunc); // Stop the timer
//     document.getElementById("countdown").innerHTML = "<h2>Countdown Over!</h2>";
// }

// },1000);
