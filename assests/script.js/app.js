$(document).ready(function(){

  $(window).on("load",function(){
    $(".preloader").addClass(".complete");
  })



    $(window).on("scroll",function(){
var scroll= $ (window).scrollTop();
if(scroll>=50){
    $(".sticky").addClass("stickyadd");
}else{
    $(".sticky").removeClass("stickyadd");
}
    });


    var typed = new Typed('.element', {
        strings:['John doe', 'a developer', 'a designer'],
        smartBackspace: true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    
      });
    //   progress-bar
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute('style', 'width:95%; Transition: 1.7s all');
            p[1].setAttribute('style', 'width:76%; Transition: 1.5s all');
            p[2].setAttribute('style', 'width:87%; Transition: 1.7s all');
            p[3].setAttribute('style', 'width:56%; Transition: 1.4s all');
            p[4].setAttribute('style', 'width:45%; Transition: 2.2s all');
            p[4].setAttribute('style', 'width:95%; Transition: 2.2s all');
        
        },
        offset: '90%'
      });
      var filterizd = $('.filter-container').filterizr({
        animationDuration :.5,
      });

      $('.owl-carousel').owlCarousel({
        loop:true,
       autoplay:true,
       autoplayTimeout:4000,
       items:1,
        
      });
   
});