// Animated Page Scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// bigtext.js
$(function() {
    WebFont.load({
        custom: {
            families: ['acta-display'], // font-family name
            urls : ['css/main.css'] // URL to css
        },
        active: function() {
            $('#attraction-headline').bigtext();
            $('#banner-headline').bigtext();
            $('#restaurant-headline').bigtext();
        }
    });
});

 $(document).ready(function(){
    $(".fitvids").fitVids(); // target your .container, .wrapper, .post, etc.
}); 


/* $(document).ready(function(){
    $(".toggle-button").next("ul").hide();
    $(".toggle-button").click(function(){
        $(".toggle-button").next("ul").slideToggle();
    });
}); */


 $(function () {
    $(".slider").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks"
    });
}); 

$('#scene').parallax({
  calibrateX: false,
  calibrateY: true,
  invertX: false,
  invertY: true,
  limitX: false,
  limitY: 10,
  scalarX: 2,
  scalarY: 8,
  frictionX: 0.2,
  frictionY: 0.8,
  originX: 0.0,
  originY: 1.0
});