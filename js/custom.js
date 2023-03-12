$(function(){

    
//===========Wow js part start===========
    new WOW().init();



//===========Counter part start===========
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



//===========Venobox part start===========
    $('.venobox').venobox(); 
 


//===========mixitup part start===========
     var containerEl = document.querySelector('.portfolio-main');
     var mixer = mixitup(containerEl, {
         animation: {
             duration: 1000
         }
     });



//============smooth scroll===============

// const scroll = new Scrooth({
//     element: window // target element
// });
// const scroll = new Scrooth({
//     strength: 20,
//     acceleration: 2,
//     deceleration: 1.5
// });







});