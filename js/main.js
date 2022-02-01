$(document).ready(function() {

  $('.header-nav__link, .header-subnav__link, .main-nav__item').on('click', function () {
    let href = $(this).attr('href');
    var targetSelector = this.hash;
    var blockTarget = $(href);
    $('html, body').animate(
      {
        scrollTop: $(href).offset().top - 70
      }, 700
    //   {
    //   // Set the duration long enough to allow time
    //   // to lazy load the elements.
    //   duration: 2000,

    //   // At each animation step, check whether the target has moved.
    //   step: function( now, fx ) {

    //       // Where is the target now located on the page?
    //       // i.e. its location will change as images etc. are lazy loaded
    //       var newOffset = blockTarget.offset().top;

    //       // If where we were originally planning to scroll to is not
    //       // the same as the new offset (newOffset) then change where
    //       // the animation is scrolling to (fx.end).
    //       if(fx.end !== newOffset) {
    //         fx.end = newOffset;
    //       }
    //   }
    // }
    )
    // return false;
  });


  let header_slider_d = $('.js_header-slider-d');
  let header_slider_l = $('.js_header-slider-l');
  let headerSliderLight;

  const themeToggler = $('.switch__input');
  themeToggler.on('change', function () {
    if($(this).is(':checked')) {
      themeToggler.prop('checked', true);
      $('body').attr('data-theme', 'light');
      header_slider_d.slick('unslick');
      headerSliderLight();
    } else {
      themeToggler.prop('checked', false);
      $('body').attr('data-theme', 'dark');
      header_slider_l.slick('unslick');
      headerSliderDark();
    }
  });

  $('input[type=tel]').mask('+7 (999) 999-99-99');
  
  const burger = $('.burger-menu');
  burger.on('click', function () {
    burger.toggleClass('open');
    $('.main-nav').toggleClass('main-nav--open');
    $('.nav-overlay').toggleClass('nav-overlay--open');
    $('body').toggleClass('modal-open');
  });

  $('.main-nav__close, .nav-overlay, .main-nav__item').on('click', function (evt) {
    evt.preventDefault();
    burger.removeClass('open');
    $('.main-nav').removeClass('main-nav--open');
    $('.nav-overlay').removeClass('nav-overlay--open');
    $('body').removeClass('modal-open');
  });

  // Get media - with autoplay disabled (audio or video)
  var media = $('video').not("[autoplay='autoplay']");
  var tolerancePixel = 50;

  function checkMedia(){
      // Get current browser top and bottom
      var scrollTop = $(window).scrollTop() + tolerancePixel;
      var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

      media.each(function(index, el) {
          var yTopMedia = $(this).offset().top;
          var yBottomMedia = $(this).height() + yTopMedia;

          if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
              $(this).get(0).play();
          } else {
              $(this).get(0).pause();
          }
      });

      //}
  }
  $(document).on('scroll', checkMedia);

  var toTopBtn = $('#to-top');
  toTopBtn.on('click', function () {
    $('body,html').animate({ scrollTop: 0 }, 200);
    return false;
  });

  $(window).scroll(function () {
    if ( $(this).scrollTop() > 900 ) {
      toTopBtn.addClass('to-top--visible');
      } else {
        toTopBtn.removeClass('to-top--visible');
    }

  });
  

  $('.js_features-slider').slick({
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 576,
          settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.js_products-slider').slick({
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    asNavFor: '.js_products-info-slider',

    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '170px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.js_products-info-slider').slick({
    fade: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  });

  
  headerSliderDark = function () {
    header_slider_d.slick({
      lazyLoad: 'ondemand',
      infinite: true,
      fade: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: false,
    });  
  };
  headerSliderDark();

  headerSliderLight = function () {
    header_slider_l.slick({
      lazyLoad: 'ondemand',
      infinite: true,
      fade: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: false,
    });  
  };
  

  var modalTimer;
  var myModal = document.getElementById('callbackModal');
  var myInput1 = document.getElementById('inputName1');
  var myAnnoyingModal = document.getElementById('annoyingCallbackModal');
  annoyingModal = new bootstrap.Modal(document.getElementById('annoyingCallbackModal'));
  var myInput3 = document.getElementById('inputName3');

  myModal.addEventListener('shown.bs.modal', function () {
    clearTimeout(modalTimer);
    annoyingModal.hide();
    myInput1.focus();
  });
  myAnnoyingModal.addEventListener('shown.bs.modal', function () {
    myInput3.focus();
  });



    modalTimer = setTimeout(() => {
      annoyingModal.show();
    }, 20000);


  var headerInner = $('.header__top');

  if ( $(window).scrollTop() > headerInner.height() ) {
    headerInner.addClass('header__top--fixed');
  }

  $(window).scroll(function () {
    if ( $(this).scrollTop() > headerInner.height() ) {
      headerInner.addClass('header__top--fixed');
      } else {
        if ( $(this).scrollTop() <= headerInner.height()) {
          headerInner.removeClass('header__top--fixed');
      }
    }

  });


  var callbackModal = new bootstrap.Modal(document.getElementById('callbackModal'));
  var successModal = new bootstrap.Modal(document.getElementById('successModal'));


  AOS.init({
    // disable: 'mobile',
    offset: 200,
    duration: 800,
    once: true,
    anchorPlacement: 'top-center',
  });

});