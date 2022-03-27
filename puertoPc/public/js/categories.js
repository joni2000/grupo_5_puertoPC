window.onload = () =>{

const categoriesCard = document.querySelectorAll('.categoryCardList')//class categories general
const spanCategoriesJs = document.querySelector('.categoryCardListSpan')
const boxProductJs = document.querySelectorAll('.box-products-all')//box general

categoriesCard.forEach(e =>{
  e.addEventListener('click', function(event){
    event.preventDefault()
    console.log(e)
  }
  )

})
/* spanCategoriesJs.forEach(e =>{
  e.addEventListener('click', function(event){
    event.preventDefault()
    console.log(e)
    spanCategoriesJs.classList.add('categoryCardListOk')
    spanCategoriesJs.classList.remove('categoryCardListSpan')
  }
  )

}) */
 /*  let validationsErrorsLogin = false; */
    
}