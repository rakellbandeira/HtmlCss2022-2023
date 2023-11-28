const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
burger.addEventListener('click', function() {
  this.classList.toggle('active')
  if(this.classList.contains('active')) {
    menu.classList.add('active')
  } else {
    menu.classList.remove('active')
  }
})