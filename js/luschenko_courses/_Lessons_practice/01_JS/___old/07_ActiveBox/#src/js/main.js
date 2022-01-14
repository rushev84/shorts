//const { off } = require('gulp')

$(function () {
  //---fixed header

  let header = $('#header')
  let intro = $('#intro')
  //---height() - высота элемента без пэддингов, innerHeight() - высота элемента с пэддингами
  let introH = intro.innerHeight()

  //---в переменную scrollPos кладётся сколько проскроллили от верха страницы с помощью метода scrollTop()
  let scrollPos = $(window).scrollTop()

  let nav = $('#nav')
  let navToggle = $('#navToggle')

  checkScroll(scrollPos, introH)

  //---следим за скроллом на странице (событие scroll)
  $(window).on('scroll resize', function () {
    //---перезаписываем значение переменной introH

    //---при каждом скролле, перезагрузке и ресайзе обновляем значение переменной
    scrollPos = $(this).scrollTop()

    checkScroll(scrollPos, introH)
  })

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }

  //---smooth scroll
  //---выборка элемента с атрибутом data-scroll

  $('[data-scroll]').on('click', function (event) {
    //---отмена стандартного поведения ссылки при клике
    event.preventDefault()
    //---в переменной хранится id блока, к кот. мы хотим скроллить
    let elementId = $(this).data('scroll')
    //---получаем отступ сверху элемента
    let elementOffset = $(elementId).offset().top

    nav.removeClass('show')

    $('html, body').animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    )
  })

  //---nav toggle

  navToggle.on('click', function (event) {
    event.preventDefault()
    nav.toggleClass('show')
  })

  //---reviews (slick)
  let slider = $('#reviewsSlider')

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  })
})
