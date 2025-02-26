/*const $starfly = document.querySelector('.star_fly')

window.addEventListener('scrollend', e => {
  $starfly.classList.toggle("active")
});*/

const $hero = document.querySelectorAll('.hero')
const $section = document.querySelectorAll('.content_section')

onscroll = (event) => {
    for (let h of $hero) {
        console.log(h.classList)
        h.classList.add('apparition')
        console.log(h.classList)
    }
    for (let s of $section) {
        s.classList.add('apparition')
    }

};

// évidemment ça reste pas après le click, donc je dois trouver un autre moyen pour que ça reste, mais d'est le toggle que je dois utiliser : changer la nature de l'évent ? 
const $langagebtn = document.querySelector('.langue-btn')
const $defaultbtn = document.querySelector('.default-btn')

$langagebtn.addEventListener('click', e => {
  $langagebtn.classList.toggle('default-btn')
})
/*

$grid.addEventListener('click', e => {
  if($grid.contains('src')) {
    //test des images en click agrandissement pop-up style galerie 
  }
})*/
