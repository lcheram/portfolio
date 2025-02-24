const $starfly = document.querySelector('.star_fly')

document.addEventListener('scrollend'), e => {
  $starfly.classList.add("active")
}