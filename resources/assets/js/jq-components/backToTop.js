import $ from 'jquery'

$(() => {
  $(window).on('scroll', () => {
    if ($(this).scrollTop() > 0) {
      $('#ToTop').fadeIn()
      return
    }

    $('#ToTop').fadeOut()
  })

  $('#ToTop').on('click', () => {
    $('body, html').animate({ scrollTop: 0 }, 800)
  })

  $('.header__logo').on('click', () => {
    const path = document.location.pathname

    if (path !== '/' && path !== '/en/') {
      if (path.includes('/en/')) document.location.href = '/en'
      else document.location.href = '/'
      return
    }

    $('body, html').animate({ scrollTop: 0, }, 800)
  })
})
