$(function () {
  $('.lazy').Lazy();
});



// inputs

inputActive('.search', 'search__input_active');

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




var burgerFixed = $('.burger');
var fixedMenu = $('.nav').clone().html();
var closeMenuFixed = $('<div>').addClass('nav__close_fixed');


burgerFixed.on('click', function () {
  if ($('.nav_fixed').length > 0) {
    
    $('.nav_fixed').fadeOut(400);
    setTimeout(function(){
      $('.nav_fixed').remove()
    },400)
    console.log('close');
  } else {
    $('<div>').addClass('nav_fixed').appendTo('.header_fixed').append(fixedMenu);
    $('<div>').addClass('nav__other').appendTo($('.nav_fixed'))
    $('<div>').addClass('nav__other_1').appendTo($('.nav__other'));
    $('<div>').addClass('nav__other_2').appendTo($('.nav__other'));
    $('.nav__other').before($('<div>').addClass('nav__title').text('Навигация'))

    $('.nav_fixed').fadeIn(400).css('display','flex')


    $('.nav_fixed > .nav__item').each(function(indx){
        if(indx != 1){
          $(this).appendTo($('.nav__other'))
        }
    })

    $('.nav__other > .nav__item').each(function(indx){
      if($(this).hasClass('nav__item_group')){
        $(this).addClass('nav__item_simple').appendTo($('.nav__other_2'))
      }else{
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





    } else {
      $('.header').removeClass('header_fixed');
      $('.header__inner').removeClass('header__inner_fixed');
      $('.logo_header').removeClass('logo_fixed');
      $('.nav__wrapper').show()
      $('.search').show()
      $('.logo').removeClass('logo_fixed')
      burgerFixed.removeClass('burger_fixed')
      $('.header__box').removeClass('header__box_fixed')
      $('.nav_fixed').remove()
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


// $('.slider__box').slick({
//   lazyload: 'ondemand',
//   // infinite: false,
//   fade: true,
//   cssEase: 'linear',
//   nextArrow: '<div class="slider__arrow slider__arrow_next">',
//   prevArrow: '<div class="slider__arrow slider__arrow_prev">',
//   // appendArrows: $('.slider__arrows'),
// })


// slider 

// news
// $('.news').last().addClass('news_final');
// news


// products
// if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//   var product = $('.product');
//   product.each(function (indx) {
//     if (indx >= 3) $(this).hide()
//   })
// }

//products