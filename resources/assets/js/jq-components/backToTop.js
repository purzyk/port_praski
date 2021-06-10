import $ from 'jquery'


window.addEventListener("load", () => {
  const toTop = document.querySelectorAll(".backToTop");

  [...toTop].forEach(item => {
    item.addEventListener("click", () => {
      $('body, html').animate({ scrollTop: 0 }, 800)
    })
  })
  document.addEventListener('scroll', ()=> {
    let YOffset = window.pageYOffset
    if(YOffset > window.innerHeight / 2) {
      [...toTop].forEach(item => {
        item.classList.add("--show")
      })
    } else {
      [...toTop].forEach(item => {
        item.classList.remove("--show")
      })
    }
  })
})

$(() => {
  


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
