const cardHover1 = document.querySelector('#card1');
const cardHover2 = document.querySelector('#card2');
const cardHover3 = document.querySelector('#card3');



cardHover1.addEventListener('mouseover', () => {
 
    cardHover1.classList.add('card-hover')

})

cardHover1.addEventListener('mouseout', () => {
    cardHover1.classList.remove('card-hover')
})


cardHover2.addEventListener('mouseover', () => {
 
    cardHover2.classList.add('card-hover')

})

cardHover2.addEventListener('mouseout', () => {
    cardHover2.classList.remove('card-hover')
})

cardHover3.addEventListener('mouseover', () => {
 
    cardHover3.classList.add('card-hover')

})

cardHover3.addEventListener('mouseout', () => {
    cardHover3.classList.remove('card-hover')
})

//  Animação texto fixo

const cardFixed = doccument.querySelector("#cardFixed")

cardFixed.addEventListener("mouseover", () => {
    cardFixed.classList.add('card-hover-fixed')
})