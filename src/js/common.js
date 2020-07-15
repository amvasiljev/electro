$(function () {
  $('.lazy').Lazy();
});



// inputs

inputActive('.search', 'search__input_active');
inputActive('.order', 'order__input_active');
inputActive('.feedback', 'feedback__input_active');



function inputActive(elem, cl) {
  $(elem).on('focus', 'input[type="text"]', function () {
    $(this).addClass(cl);
    if ($(this).siblings('.search__button').length > 0) {
      $(this).siblings('.search__button').addClass('search__button_active')
    }
  })
  $(elem).on('blur', 'input[type="text"]', function () {
    $(this).removeClass(cl);
    if ($(this).siblings('.search__button').length > 0) {
      $(this).siblings('.search__button').removeClass('search__button_active')
    }
  })
}


$('.feedback__textarea').on('focus', function () {
  $(this).addClass('feedback__textarea_active');

})
$('.feedback__textarea').on('blur', function () {
  $(this).removeClass('feedback__textarea_active');

})


$('.order__input_phone').mask('+7 (000) 000-00-00', {
  placeholder: "+7 (000) 000-00-00"
});
$('.feedback__input_phone').mask('+7 (000) 000-00-00', {
  placeholder: "+7 (000) 000-00-00"
});

// inputs



$('.nav__item_group').hover(
  function () {
    $(this).find('.nav_level_2').dequeue().stop(true, true).fadeIn(300)
  },
  function () {
    $(this).find('.nav_level_2').dequeue().stop(true, true).fadeOut(300)
  }
)
$('.nav_level_2 .nav__item_group').hover(
  function () {
    $(this).find('.nav_level_3').dequeue().stop(true, true).fadeIn(300)
  },
  function () {
    $(this).find('.nav_level_3').dequeue().stop(true, true).fadeOut(300)
  }
)


// nav_side


$('.nav-side__link_group').on('click', function (e) {
  if ($(this).next('.nav-side_level_2').length > 0) {
    e.preventDefault()
    
    var menuLevel2 = $(this).next('.nav-side_level_2')

    $('.nav-side__link_group').removeClass('nav-side__link_group_active')
    $(this).addClass('nav-side__link_group_active')
    
    
    $('.nav-side_level_2').not(menuLevel2).slideUp(300);
    menuLevel2.slideDown(300);

  } else {
    return;
  }
})


// nav_side


var burgerFixed = $('.burger');
var fixedMenu = $('.nav').clone().html();
var closeMenuFixed = $('<div>').addClass('nav__close_fixed');



burgerFixed.on('click', function () {

  if ($('.nav_fixed').length > 0) {

    $(this).removeClass('burger_close')

    $('.nav_fixed').fadeOut(400);
    setTimeout(function () {
      $('.nav_fixed').remove()
    }, 400)
    console.log('close');
  } else {

    $(this).addClass('burger_close')

    $('<div>').addClass('nav_fixed').appendTo('.header_fixed').append(fixedMenu);
    $('<div>').addClass('nav__other').appendTo($('.nav_fixed'))
    $('<div>').addClass('nav__other_1').appendTo($('.nav__other'));
    $('<div>').addClass('nav__other_2').appendTo($('.nav__other'));
    $('.nav__other').before($('<div>').addClass('nav__title').text('Навигация'))

    $('.nav_fixed').fadeIn(400).css('display', 'flex')


    $('.nav_fixed > .nav__item').each(function (indx) {
      if (indx != 1) {
        $(this).appendTo($('.nav__other'))
      }
    })

    $('.nav__other > .nav__item').each(function (indx) {
      if ($(this).hasClass('nav__item_group')) {
        $(this).addClass('nav__item_simple').appendTo($('.nav__other_2'))
      } else {
        $(this).addClass('nav__item_simple').appendTo($('.nav__other_1'))
      }
    })


  }
  $('body').addClass('stop_scrolling ')

})


var windowHeight = $(document).height();
if (windowHeight > 1080) {
  $(document).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 100) {
      $('.header').addClass('header_fixed');
      $('.header__inner').addClass('header__inner_fixed');
      $('.logo_header').addClass('logo_fixed');
      $('.nav__wrapper').hide()
      $('.search').hide()
      $('.logo').addClass('logo_fixed')
      burgerFixed.addClass('burger_fixed')
      $('.header__box').addClass('header__box_fixed')

      $('section').eq(0).css('paddingTop', '211')
      $('.section__inner_main').css('top', '341')


    } else {
      $('.header').removeClass('header_fixed');
      $('.header__inner').removeClass('header__inner_fixed');
      $('.logo_header').removeClass('logo_fixed');
      $('.nav__wrapper').show()
      $('.search').show()
      $('.logo').removeClass('logo_fixed')
      burgerFixed.removeClass('burger_fixed burger_close')
      $('.header__box').removeClass('header__box_fixed')
      $('.nav_fixed').remove()

      $('section').eq(0).css('paddingTop', '0')
      $('.section__inner_main').css('top', '130')
    }

  })
}


// fixed menu



// closeMenu.on('click', function () {
//   $('.nav_mobile').fadeOut(300);
//   $('body').removeClass('stop_scrolling ')
// })


$(document).on('click', '.nav__item', function () {
  closeMenu.trigger('click');
})

// end fixed menu


//mobile menu

// var burger = $('.burger');
// var mobileMenu = $('.nav').clone().html();
// var closeMenu = $('<div>').addClass('nav__close');
// var auth = $('.auth').clone().addClass('auth_mobile').removeClass('auth').append(closeMenu);
// var contacts = $('.header__contacts').clone().addClass('header__contacts_mobile').removeClass('header__contacts')

// auth.find('.auth__reg').addClass('auth__reg_mobile')
// auth.find('.auth__log').addClass('auth__log_mobile')

// contacts.find('.email').addClass('email_mobile')
// contacts.find('.email__text').addClass('email__text_mobile')
// contacts.find('.email__link').addClass('email__link_mobile')
// contacts.find('.phone__text').addClass('phone__text_mobile')
// contacts.find('.phone__link').addClass('phone__link_mobile')

// burger.on('click', function () {
//   if ($('.nav_mobile').length) {
//     $('.nav_mobile').fadeIn(300);
//   } else {
//     $('<div>').addClass('nav_mobile').prependTo('body').append(mobileMenu);
//     $('.nav_mobile').prepend(auth).append(contacts).find('.nav__item').addClass('nav__item_mobile')
//   }
//   $('body').addClass('stop_scrolling ')
// })

// closeMenu.on('click', function () {
//   $('.nav_mobile').fadeOut(300);
//   $('body').removeClass('stop_scrolling ')
// })


// $(document).on('click', '.nav__item', function () {
//   closeMenu.trigger('click');
// })


//mobile menu


// slider 


$('.slider_main').slick({
  lazyload: 'ondemand',
  // infinite: false,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  dots: true,
  // nextArrow: '<div class="slider__arrow slider__arrow_next">',
  // prevArrow: '<div class="slider__arrow slider__arrow_prev">',
  // appendDots: $('.section_main .section__dots'),
})


$('.slider__box_sert').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next.png" alt="">',
  prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev.svg" alt="">',
  appendArrows: $('.slider__arrows_sert'),
});


$('.slider__box_lic').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next.png" alt="">',
  prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev.svg" alt="">',
  appendArrows: $('.slider__arrows_lic'),
});


$('.slider__box_rev').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next.png" alt="">',
  prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev.svg" alt="">',
  appendArrows: $('.slider__arrows_rev'),
});

$('.slider__box_team').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next.png" alt="">',
  prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev.svg" alt="">',
  appendArrows: $('.slider__arrows_team'),
});

$('.slider__box_work').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next.png" alt="">',
  prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev.svg" alt="">',
  appendArrows: $('.slider__arrows_work'),
});


// tabs

$('.section__tab').each(function () {
  if (($(this).hasClass('section__tab_active')) == false) {
    $(this).fadeOut()
  }
})


$('.tabs').on('click', 'a', function (e) {
  e.preventDefault()

  $('.tabs__item').removeClass('tabs__item_active')
  $(this).addClass('tabs__item_active')

  var id = $(this).attr('href')

  var tabSlider = $(id)
  $('.section__tab').not(tabSlider).fadeOut().removeClass('section__tab_active')
  tabSlider.fadeIn().addClass('section__tab_active')

})

// tabs



// worker

$('.worker').hover(
  function () {
    $(this).find('.worker__background').addClass('worker__background_active')
    $(this).find('.worker__profile').addClass('worker__profile_active')
  },
  function () {
    $(this).find('.worker__background').removeClass('worker__background_active')
    $(this).find('.worker__profile').removeClass('worker__profile_active')
  }
)


// end worker


// products
// if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//   var product = $('.product');
//   product.each(function (indx) {
//     if (indx >= 3) $(this).hide()
//   })
// }


// table_mobile

windowWidth = $(window).width();
if (windowWidth <= 550){
  

  var cellFirst = $('.table th')
  
  cellFirst.each(function(indx){
    
  
    var elem = $(this).html();
    
    var index = indx;
  
    $('.table tr').each(function(){
      
      var cell = $(this).find('td');
      
      cell.each(function(indx){
        
         if(indx == index && indx != 0){
          var fake =  $('<div>').addClass('table__cell_fake')
          fake.prependTo($(this))
          fake.append(elem)
          
         }
      })
    })
    
  })


  $('.table__row').eq(0).hide()
  $('.table tr').eq(0).hide()
}







// table_mobile


// questions

$('.questions__item').on('click', function(){
  $(this).next('.questions__answer').slideToggle()
  $(this).toggleClass('questions__item_active')
})

// questions


// map 


$(function () {



  var spinner = $('.ymap-container').children('.loader');
  var check_if_load = false;
  var myMapTemp, myPlacemarkTemp;

  function init() {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.811614, 37.456738],
      zoom: 15,
      controls: ['zoomControl', 'fullscreenControl'],
    });
    myMapTemp.behaviors.disable("scrollZoom");
    var myPlacemarkTemp = new ymaps.Placemark([55.811614, 37.456738], {
      balloonContent: "Здесь может быть ваш адрес",
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: '/assets/img/location.svg',
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp);
    var layer = myMapTemp.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function () {
      spinner.removeClass('is-active');
    });
  }

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer),
        readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
          layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) { // IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" ||
          script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }


  var ymap = function () {
    $('.ymap-container').mouseenter(function () {
      if (!check_if_load) {
        check_if_load = true;
        spinner.addClass('is-active');
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
          ymaps.load(init);
        });
      }
    });
  }

  $(function () {
    ymap();
  });
})