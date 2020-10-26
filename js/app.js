(function ($) {
    "use strict";

    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // nice select scroll
    $('.nice-select').each(function() {

        var select = $(this),
           name = select.attr('name');

        select.hide();

        select.wrap('<div class="nice-select-wrap"></div>');

        var parent = select.parent('.nice-select-wrap');

        parent.append('<ul id=' + name + ' style="display:none"></ul>');

        select.find('option').each(function() {

          var option = $(this),
              value = option.attr('value'),
              label = option.text();

          if (option.is(":first-child")) {

            $('<a href="#" class="drop">' + label + '</a>').insertBefore(parent.find('ul'));

          } else {

            parent.find('ul').append('<li><a href="#" id="' + value + '">' + label + '</a></li>');

          }

        });

        parent.find('a').on('click', function(e) {

          parent.toggleClass('down').find('ul').slideToggle(300);

          e.preventDefault();

        });

        parent.find('ul a').on('click', function(e) {

          var niceOption = $(this),
                  value = niceOption.attr('id'),
              text = niceOption.text();

          select.val(value);

          parent.find('.drop').text(text);

          e.preventDefault();

        });

    });


    // Slick slider basic slider-active
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true,
            fade: false,
            prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            arrows: false,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    // problem-slider
    $('.problem-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '0px',
        dots: false,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
        slidesToShow: 3,
        responsive: [

        {
            breakpoint: 992,
            settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 1
            }
        }
        ]
    });

    // brand-active
    $('.brand-active').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: false,
        centerPadding: '60px',
        dots: false,
        prevArrow:false,
        nextArrow:false,
        slidesToShow: 5,
        responsive: [

        {
            breakpoint: 992,
            settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow:1
            }
        }
        ]
    });

    // review-active
    $('.review-active').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: false,
        centerPadding: '60px',
        dots: false,
        prevArrow:false,
        nextArrow:false,
        prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
        slidesToShow: 3,
        arrows: true,
        responsive: [
        {
            breakpoint: 992,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow:1
            }
        }
        ]
    });


    // sticky header
    $(window).on('scroll',function() {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".sticky").removeClass("scroll-header");
        }else{
            $(".sticky").addClass("scroll-header");
        }
    });


    // burger menu responsive
    var nav = document.getElementById('xxx');
    var menu = document.getElementById('burger');
    burger.addEventListener('click', function(){
        nav.classList.toggle('cross');
    });


    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // WOW active
    new WOW().init();


})(jQuery);