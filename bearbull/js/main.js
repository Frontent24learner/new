let pageItems = document.querySelectorAll('.pages>.item')
let menuItems = document.querySelectorAll('ul.menu>li>a')

menuItems.forEach((item, id) => {
  item.addEventListener('click', () => {
    pageItems.forEach(page => {
      page.classList.remove('active')
    })
    pageItems[id].classList.add('active')
  })
})

if (localStorage.stdclicks >= 0) {
  clicks = Number(localStorage.stdclicks)
}
else {
  clicks = 0
}

document.getElementById('_count').innerHTML = clicks

function clicked() {
  clicks = clicks + 1
  document.getElementById('_count').innerHTML = clicks
  localStorage.stdclicks = clicks
}