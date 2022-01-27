$(document).ready(function() {

  $('.scrollTo, .header-nav__link, .header-subnav__link, .main-nav__item').on('click', function () {
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
    return false;
  });


  const themeToggler = $('.switch__input');
  themeToggler.on('change', function () {
    if($(this).is(':checked')) {
      themeToggler.prop('checked', true);
      $('body').attr('data-theme', 'light');
    } else {
      themeToggler.prop('checked', false);
      $('body').attr('data-theme', 'dark');
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


  // $('.js_features-slider').owlCarousel({
  //   loop:true,
  //   items: 3,
  //   center: true,
  //   nav:true,
  //   navSpeed: 600,
  // });


  // var ARROW_PREV = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122" height="104" viewBox="0 0 122 104"><defs><linearGradient id="pr" x1="0.102" y1="0.123" x2="0.899" y2="0.878" gradientUnits="objectBoundingBox" spreadMethod="pad"><stop offset="0" stop-color="#3c3c3c"/><stop offset="1" stop-color="#191919"/></linearGradient><filter id="b" x="0" y="0" width="122" height="104" filterUnits="userSpaceOnUse"><feOffset dx="2" dy="2" input="SourceAlpha"/><feGaussianBlur stdDeviation="1" result="c"/><feFlood flood-opacity="0.502"/><feComposite operator="in" in2="c"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-1279.002 -61.918)"><g transform="matrix(1, 0, 0, 1, 1279, 61.92)" filter="url(#b)"><path d="M1367,62.918l29,49-29,49h-58l-29-49,29-49Z" transform="translate(-1279 -61.92)" fill="url(#pr)"/></g><path d="M1344.527,98.366l-13.05,13.052,13.051,13.052" fill="none" stroke="#fff" stroke-width="10"/></g></svg>';
  // var ARROW_NEXT = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122" height="104" viewBox="0 0 122 104"><defs><linearGradient id="ne" x1="0.102" y1="0.123" x2="0.899" y2="0.878" gradientUnits="objectBoundingBox" spreadMethod="pad"><stop offset="0" stop-color="#3c3c3c"/><stop offset="1" stop-color="#191919"/></linearGradient><filter id="c" x="0" y="0" width="122" height="104" filterUnits="userSpaceOnUse"><feOffset dx="2" dy="2" input="SourceAlpha"/><feGaussianBlur stdDeviation="1" result="c"/><feFlood flood-opacity="0.502"/><feComposite operator="in" in2="c"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-1503.683 -61.918)"><g transform="matrix(1, 0, 0, 1, 1503.68, 61.92)" filter="url(#c)"><path d="M1591.683,62.918l29,49-29,49h-58l-29-49,29-49Z" transform="translate(-1503.68 -61.92)" fill="url(#ne)"/></g><path d="M1556.158,124.47l13.05-13.052-13.049-13.052" fill="none" stroke="#fff" stroke-width="10"/></g></svg>';

  var ARROW_PREV = '<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 179.57 149.14" style="enable-background:new 0 0 179.57 149.14;" xml:space="preserve"><style type="text/css"> .st0{fill:url(#SVGID_1_);} .st1{fill:none;stroke:#FFFFFF;stroke-width:10;}</style><g> <g id="Многоугольник_10-3_00000121251686013477577450000016047690577950805153_"><image style="overflow:visible;opacity:0.5;" width="129" height="111" xlink:href="data:image/png;base64,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" transform="matrix(1 0 0 1 26.7872 21.0427)"></image><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="43.6294" y1="37.6" x2="136.0549" y2="111.6425"><stop  offset="0" style="stop-color:#3C3C3C"/><stop  offset="1" style="stop-color:#191919"/></linearGradient><polygon class="st0" points="118.78,25.57 147.78,74.57 118.78,123.57 60.78,123.57 31.78,74.57 60.78,25.57"/></g></g><path id="Стрелочка-2" class="st1" d="M96.3,61.02L83.25,74.07L96.3,87.12"/></g></svg>';
  var ARROW_NEXT = '<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 179.57 149.14" style="enable-background:new 0 0 179.57 149.14;" xml:space="preserve"><style type="text/css">.st0{fill:url(#SVGID_1_);}.st1{fill:none;stroke:#FFFFFF;stroke-width:10;}</style><g><g id="Многоугольник_10-3_00000018917483928402454600000012071536240444887442_"><image style="overflow:visible;opacity:0.5;" width="129" height="111" xlink:href="data:image/png;base64,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" transform="matrix(1 0 0 1 27.7872 21.5691)"></image><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="44.512" y1="37.7304" x2="136.9375" y2="111.773"><stop  offset="0" style="stop-color:#3C3C3C"/><stop  offset="1" style="stop-color:#191919"/></linearGradient><polygon class="st0" points="119.66,25.7 148.66,74.7 119.66,123.7 61.66,123.7 32.66,74.7 61.66,25.7 			"/></g></g><path id="Стрелочка-2_00000024001919537312077090000008084642506766550185_" class="st1" d="M84.13,87.25L97.18,74.2L84.14,61.15"/></g></svg>';


  $('.js_features-slider').slick({
    infinite: true,
    prevArrow: `<button type="button" class="slick-prev">${ARROW_PREV}</button>`,
    nextArrow: `<button type="button" class="slick-next">${ARROW_NEXT}</button>`,
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
      // {
      //   breakpoint: 768,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     // centerPadding: '0px',
      //     slidesToShow: 3,
      //   }
      // },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.js_products-slider').slick({
    infinite: true,
    prevArrow: `<button type="button" class="slick-prev">${ARROW_PREV}</button>`,
    nextArrow: `<button type="button" class="slick-next">${ARROW_NEXT}</button>`,
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
        breakpoint: 768,
        settings: {
          // arrows: false,
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
          // centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  });

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
    disable: 'mobile',
    offset: 200,
    duration: 800,
    once: true,
    anchorPlacement: 'top-center',
  });

});