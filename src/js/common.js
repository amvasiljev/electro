$(function () {
  $('.lazy').Lazy();
});


var userAgent = navigator.userAgent.toLowerCase();
is_ie = (/trident/gi).test(userAgent) || (/msie/gi).test(userAgent);
var windowWidth = $(window).width()

if (!/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  $(window).resize(function () {

    window.location.reload();
    $('html, body').animate({
      scrollTop: 0
    }, 10)
  
  
  })
}





// inputs

inputActive('.search', 'search__input_active');

inputActive('.order', 'order__input_active');
inputActive('.feedback', 'feedback__input_active');
inputActive('.popup', 'popup__input_active')
inputActive('.calc-input', 'calc-input__value_active')
inputActive('.offer__inputs', 'offer__input_active')




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
$('.popup__input_phone').mask('+7 (000) 000-00-00', {
  placeholder: "+7 (000) 000-00-00"
});

// end inputs




// main-menu

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

// end main-menu




// nav_side




var navSideLink = $('.nav-side__link_group')
var navSideLinkActive = $('.nav-side_level_1 > li > .nav-side__link_group_active').addClass('nav-side__link_group_invert')
var menuParent = $('.nav-side_level_1')
var menuLevel2

if (windowWidth < 1000) {

  firstActive()
  menuParent.find('> li').not(navSideLinkActive.parent()).hide()

  navSideLinkActive.on('click', function (e) {
    e.preventDefault()
    $(this).next('ul').slideToggle()
    $(this).toggleClass('nav-side__link_group_invert')
    menuParent.find('> li').not($(this).parent()).slideToggle()

  })

  navSideLink.not(navSideLinkActive).on('click', function (e) {
    if ($(this).next('.nav-side_level_2').length > 0) {
      e.preventDefault()

      menuLevel2 = $(this).next('.nav-side_level_2')
      $(this).toggleClass('nav-side__link_group_active')
      navSideLink.not($(this)).not(navSideLinkActive).removeClass('nav-side__link_group_active')


      $('.nav-side_level_2').not(menuLevel2).not(navSideLinkActive.next('ul')).slideUp(300);
      menuLevel2.slideToggle(300);

    } else {
      return;
    }
  })

  // функция поднятия наверх пункта меню с активной ссылкой, для актуальности в мобильной версии

  function firstActive() {
    navSideLinkActive.parent().prependTo(menuParent)
  }

  $('.action-list').prependTo($('.feedback').parent())

} else {
  $('.nav-side__link_group_active').next('ul').addClass('nav-side_active')

  navSideLink.on('click', function (e) {
    if ($(this).next('.nav-side_level_2').length > 0) {
      e.preventDefault()

      menuLevel2 = $(this).next('.nav-side_level_2')

      navSideLink.removeClass('nav-side__link_group_active')
      $(this).addClass('nav-side__link_group_active')


      $('.nav-side_level_2').not(menuLevel2).slideUp(300);
      menuLevel2.slideDown(300);

    } else {
      return;
    }
  })
}




// end nav_side


if (is_ie == false) {     
  headerScroll($('.burger'))

  // choice fixed or mobile menu 



  if (windowWidth > 1200) {

    // fixed menu


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
          }else{
            var level_2 = $(this).find('.nav_level_2 > li')
            level_2.each(function(){
          
              if($(this).hasClass('nav__item_group') == false){
                $(this).addClass('nav__item_group')
                $(this).find('a').addClass('nav__link_group')
                console.log($(this));
              }
            })
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


    })



    // end fixed menu


  } else {



    //mobile menu

    var mobileNav = $('<div>').addClass('nav_mobile');
    var mobileItems = $('.nav').html();
    var mobileWrapper = $('<div>').addClass('nav_outer').prependTo('body');
    var burger = $('.burger');
    var closeButton = $('<div>').addClass('nav_close');
    var mobileFake = $('<div>').addClass('nav__fake').prependTo('body');


    var search = $('.search').clone().addClass('search_mobile').appendTo(mobileWrapper)
    inputActive('.search_mobile', 'search__input_active');

    mobileWrapper.append(mobileNav);
    mobileNav.append(closeButton);
    mobileNav.append(mobileItems);
    mobileNav.find('.nav__item').addClass('nav__item_mobile');
    mobileNav.find('.nav__link').addClass('nav__link_mobile');




    burger.on('click', function () {
      mobileWrapper.animate({
        right: 0
      }, 300).addClass('nav_active');
      $('body').addClass('stop_scrolling');
      $(this).attr('data-key', '');
      mobileFake.show();
    })

    closeButton.on('click', function () {
      mobileWrapper.animate({
        right: '-287px'
      }, 500).removeClass('nav_active');
      $('body').removeClass('stop_scrolling');
      $(this).attr('data-key', 'key');
      mobileFake.hide();
    })


    mobileFake.on('click', function () {
      closeButton.trigger('click')
    })


    $('.nav_mobile .nav__link_group').on('click', function (e) {
      e.preventDefault()
      var $this = $(this).next('ul');
      $(this).parent().parent().find('ul').not($this).slideUp()
      $this.slideToggle()

      $(this).toggleClass('nav__link_open')
      $('.nav__link_group').not($(this)).removeClass('nav__link_open')
    })



    // end mobile menu
  }

  // end choice fixed or mobile menu 

}








// function header-scroll


function headerScroll(burgerFixed) {



  var windowHeight = $(document).height();
  if (windowHeight > 1080) {
    $(document).scroll(function () {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > 500) {
        $('.header').addClass('header_fixed');
        $('.header__inner').addClass('header__inner_fixed');
        $('.logo_header').addClass('logo_fixed');
        $('.nav__wrapper').hide()
        $('.search:not(.search_mobile').hide()
        $('.logo').addClass('logo_fixed')
        burgerFixed.addClass('burger_fixed')
        $('.header__box').addClass('header__box_fixed')



        if (windowWidth < 769) {
          $('section').eq(0).css('paddingTop', '151')
          $('.section__inner_main').css('top', '281')
        } else if (windowWidth < 550) {
          $('section').eq(0).css('paddingTop', '190')
          $('.section__inner_main').css('bottom', '0')
        } else {

          if (is_ie) {
            $('section').eq(0).css('paddingTop', '211')
            $('.section__inner_main').addClass('section__inner_main_ie').css('top', '641')
          } else {
            $('section').eq(0).css('paddingTop', '211')
            $('.section__inner_main').css('top', '341')
          }

        }

      } else {
        $('.header').removeClass('header_fixed');
        $('.header__inner').removeClass('header__inner_fixed');
        $('.logo_header').removeClass('logo_fixed');

        if (windowWidth > 1200) {
          $('.nav__wrapper').show()
          $('.search').show()
        }

        $('.logo').removeClass('logo_fixed')
        burgerFixed.removeClass('burger_fixed burger_close')
        $('.header__box').removeClass('header__box_fixed')
        $('.nav_fixed').remove()

        $('section').eq(0).css('paddingTop', '0')
        $('.section__inner_main').css('top', '130')

        if (is_ie) {
          $('.section__inner_main').removeClass('section__inner_main_ie')
        }

      }

    })
  }
}


// end function header-scroll


// tabs

$('.section__tab').each(function () {
  if (($(this).hasClass('section__tab_active')) == false) {
    $(this).removeClass('section__tab_active')
  }
})




$('.tabs').on('click', 'a', function (e) {
  e.preventDefault()

  $('.tabs__item').removeClass('tabs__item_active')
  $(this).addClass('tabs__item_active')

  var id = $(this).attr('href')

  var tabSlider = $(id)
  $('.section__tab').not(tabSlider).removeClass('section__tab_active')
  tabSlider.addClass('section__tab_active')


})

// end  tabs


// sliders


$('.slider_main').slick({
  lazyload: 'ondemand',
  // infinite: false,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  dots: true,

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
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
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
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
});


$('.slider__box_rev').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next.png" alt="">',
  prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev.png" alt="">',
  appendArrows: $('.slider__arrows_rev'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
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
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
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
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
});




$('.slider__box_office').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next.png" alt="">',
  prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev.svg" alt="">',
  appendArrows: $('.slider__arrows_office'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
});


$('.slider__box_docs').slick({
  lazyLoad: 'ondemand',
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next.png" alt="">',
  prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev.svg" alt="">',
  appendArrows: $('.slider__arrows_docs'),
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        nextArrow: '<img class="slider__arrow slider__arrow_next" src="/assets/img/arrow_next_mobile.png" alt="">',
        prevArrow: '<img class="slider__arrow slider__arrow_prev" src="/assets/img/arrow_prev_mobile.png" alt="">',
      }
    }
  ]
});


// end sliders







// tabs offer


$('.offer__type').on('click', function () {
  $('.offer__type').not($(this)).removeClass('offer__type_active')
  $(this).addClass('offer__type_active')
  var type = $(this).attr('data-attr')

  $('.offer__inner').removeClass('offer__inner_active')
  $(type).addClass('offer__inner_active')
})





// end  tabs offer



// worker 

var worker = $('.worker')

worker.each(function (indx) {

  if ($(this).hasClass('worker_page') || $(this).hasClass('worker_single')) {
    var workerProfile = $(this).find('.worker__profile').addClass('worker__profile_show')
    $(this).append(workerProfile)
  } else {
    $(this).hover(
      function () {
        $(this).find('.worker__background').addClass('worker__background_active')
        $(this).find('.worker__profile').addClass('worker__profile_active')
      },
      function () {
        $(this).find('.worker__background').removeClass('worker__background_active')
        $(this).find('.worker__profile').removeClass('worker__profile_active')
      }
    )
  }

})




// end worker





// table_mobile

windowWidth = $(window).width();
if (windowWidth <= 1000) {
  $('.table').each(function () {

    var table = $(this);

    var cellFirst = table.find('th')

    cellFirst.each(function (indx) {
      var elem = $(this).html();
      var index = indx;
      table.find('tr').each(function () {

        var cell = $(this).find('td');

        cell.each(function (indx) {

          if (indx == index && indx != 0) {
            var fake = $('<div>').addClass('table__cell_fake')

            if(table.hasClass('table_calc')){
              if (indx > 1) {
                var temp = $('<div>').addClass('table__cell_temp').text($(this).text())
                $(this).text('')
                temp.appendTo($(this))
              }
            }else{
              var temp = $('<div>').addClass('table__cell_temp').text($(this).text())
              $(this).text('')
              temp.appendTo($(this))
            }

            

            fake.prependTo($(this))
            fake.append(elem)

          }
        })
      })

    })


    table.find('.table__row').eq(0).hide()
    table.find('tr').eq(0).hide()

  })




}



// windowWidth = $(window).width();
// if (windowWidth <= 550) {


//   var cellFirst = $('.table .table__head')

//   cellFirst.each(function (indx) {


//     var elem = $(this).html();

//     var index = indx;

//     $('.table .table__row').each(function () {

//       var cell = $(this).find('.table__item');

//       cell.each(function (indx) {

//         if (indx == index && indx != 0) {
//           var fake = $('<div>').addClass('table__cell_fake')
//           fake.prependTo($(this))
//           fake.append(elem)

//         }
//       })
//     })

//   })


//   $('.table__row').eq(0).hide()
//   $('.table tr').eq(0).hide()
// }




// end table_mobile




// questions

$('.questions__item').on('click', function () {
  $(this).next('.questions__answer').slideToggle()
  $(this).toggleClass('questions__item_active')
})


// end  questions





// calculator

var input_1 = $('[name = percent_1]')
var input_2 = $('[name = percent_2]')

var percent_1 = input_1.parent().parent().siblings('.calc__row')
var percent_2 = input_2.parent().parent().siblings('.calc__row')

input_1.on('change', function () {
  $(this).toggleClass('calc__input_off')
  allFunction()
})
input_2.on('change', function () {
  $(this).toggleClass('calc__input_off')
  allFunction()
})


inputCalc()

$('.button_reset_calc').on('click', function () {
  resetCalc()
})




function inputCalc() {
  $('.calc-input').on('click', '.calc-input__btn', function () {
    var $this = $(this);
    var inputCalc = $this.parent('.calc-input').find('.calc-input__value');
    var val = parseInt(inputCalc.val());


    if ($this.hasClass('calc-input__btn_plus')) {
      val++;
      inputCalc.val(val);
      allFunction();

    } else {
      val--;
      if (val <= 0) {
        val = 0;
      }
      inputCalc.val(val);
      allFunction();

    }

  })

  $('.calc-input').on('keypress keyup blur', '.calc-input__value', function (event) {
    keyCode = (event.which) ? event.which : event.keyCode;

    var $this = $(this);
    var inputCalc = $this.parent('.calc-input').find('.calc-input__value');
    var val = parseInt(inputCalc.val());

    if (val >= 0) {
      inputCalc.val(val);
      allFunction();
    }
    return !(keyCode > 31 && (keyCode < 48 || keyCode > 57));
  });




}




function calcRow() {
  $('.table_calc tr').each(function (indx) {

    if(windowWidth < 1000){
      var price = parseFloat($(this).find('.calc__price .table__cell_temp').text());
    }else{
      var price = parseFloat($(this).find('.calc__price').text());
    }
    

  

    var quantity = $(this).find('.calc-input__value').val()
    var total = price * quantity
    $(this).find('.calc__row').text(total.toFixed(2))
  })

}

function resetCalc() {
  $('.table_calc tr').each(function (indx) {
    $(this).find('.calc-input__value').val('0')
    allFunction()
  })
}


function calcActive() {
  $('.calc-input__value').each(function () {
    if ($(this).val() > 0) {
      $(this).addClass('calc-input__value_active')
    } else {
      $(this).removeClass('calc-input__value_active')
    }
  })
}



function calcPercent() {


  var total = 0;

  $('.table_calc_first tr:not(.calc__input)').each(function (indx) {

    var price = parseInt($(this).find('.calc__row').text());

    if (price > 0) {
      total += price
    }

    if (input_1.hasClass('calc__input_off')) {
      percent_1.text('0')
    } else {
      percent_1.text((total * 0.06).toFixed(2))
    }
    if (input_2.hasClass('calc__input_off')) {
      percent_2.text('0')
    } else {
      percent_2.text((total * 0.04).toFixed(2))
    }

  })

}

function calcTotal() {
  var total = 0;
  $('.table_calc tr').each(function (indx) {
    var price = parseFloat($(this).find('.calc__row').text());

    if (price > 0) {
      total += price
    }

  })
  var format = new Intl.NumberFormat('ru-RU').format(total)
  $('.calc__total span').text(format)
}




function allFunction() {
  calcRow()
  calcActive()
  calcPercent()

  calcTotal()


}


// end calculator




// move copyright
if (windowWidth < 1201) {
  $('.footer__copyright').appendTo($('.footer__inner'))
}


// end move copyrigh




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

// end map 



// function input active

function inputActive(elem, cl) {
  $(elem).on('focus', 'input[type="text"], input[type="tel"], input[type="email"]', function () {
    $(this).addClass(cl);
    if ($(this).siblings('.search__button').length > 0) {
      $(this).siblings('.search__button').addClass('search__button_active')
    }
  })
  $(elem).on('blur', 'input[type="text"], input[type="tel"], input[type="email"]', function () {
    $(this).removeClass(cl);
    if ($(this).siblings('.search__button').length > 0) {
      $(this).siblings('.search__button').removeClass('search__button_active')
    }
  })
  
}

// end function input active





