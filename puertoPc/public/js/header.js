/* header */
let $categorias = document.querySelector('#categories')
let $navCategories = document.querySelector('.nav-cat')

$categorias.addEventListener('click', function(){
    $navCategories.classList.toggle = 'close'
})

$categorias.addEventListener('mouseover', function(){
    $navCategories.style.display = 'flex'
})

$categorias.addEventListener('mouseout', function(){
    $navCategories.style.display = 'none'
})


