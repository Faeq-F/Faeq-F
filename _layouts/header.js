function HeaderScroll() { 
  // Detect scroll position
  let scrollPosition = Math.round(window.scrollY);
  //If it is past the top + a little extra space, then make it sticky
  if (scrollPosition > parseFloat(getComputedStyle(document.getElementsByTagName("header")[0]).fontSize)+40){
    document.querySelector('header').classList.add('sticky');
  } else { //If not, make it flat
      document.querySelector('header').classList.remove('sticky');
  }
}

// function throttle (callback, limit) {
//     var waiting = false;                      // Initially, we're not waiting
//     return function () {                      // We return a throttled function
//         if (!waiting) {                       // If we're not waiting
//             callback.apply(this, arguments);  // Execute users function
//             waiting = true;                   // Prevent future invocations
//             setTimeout(function () {          // After a period of time
//                 waiting = false;              // And allow future invocations
//             }, limit);
//         }
//     }
// }
// var checkHeader = throttle(HeaderScroll, 300)


window.addEventListener('scroll', HeaderScroll);

