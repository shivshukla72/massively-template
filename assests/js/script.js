$(document).ready(function () {
  $("#arrow-down").on('click', function () {
    console.log('hello');
    // $(window).scroll(500);
    $('.msv-intro__wrap').addClass('msv-intro__wrap--hidden');
    $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').addClass('msv-intro__button--visible');
  });
  if ($(window).width() > 768) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        console.log('150');
        $('.msv-intro__wrap').addClass('msv-intro__wrap--hidden');
        $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').addClass('msv-intro__button--visible');
      } else if ($(this).scrollTop() < 150) {
        $('.msv-intro__wrap').removeClass('msv-intro__wrap--hidden');
        $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').removeClass('msv-intro__button--visible');

      }
    })
  } else if ($(window).width() <= 768) {
    console.log("yes");
    $(window).scroll(function () {
      if ($(this).scrollTop() < 20) {
        console.log('150');
        $('.msv-intro__wrap').addClass('msv-intro__wrap--hidden');
        $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').addClass('msv-intro__button--visible');
      } else if ($(this).scrollTop() < 300) {
        $('.msv-intro__wrap').removeClass('msv-intro__wrap--hidden');
        $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').removeClass('msv-intro__button--visible');

      }
    })
  }


  $(document).ready(function () {
    $('.msv-navbar__toggler').on('click', function () {
      $('.msv-navbar').addClass('msv-show');
      $('body').addClass('msv-overlay');
      setTimeout(function () {
        $('.msv-navbar__container').addClass('msv-slide');
      }, 100);
      $()
    });
    $('.msv-cross__icon').on('click', function () {
      $('.msv-navbar__container').removeClass('msv-slide');
      $('body').removeClass('msv-overlay');
      setTimeout(function () {
        $('.msv-navbar').removeClass('msv-show');
      }, 500);
      $()
    });

    $(window).resize(function () {
      if ($(window).width() > 992) {
        $('body').removeClass('msv-overlay');
      }
    })
  })
})
