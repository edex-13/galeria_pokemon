import cardPokemon from './template/cardPokemon.js'
const container = document.querySelector('.images__container')
const btn__addImage = document.querySelector('.btn__addIMG')
const routeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
btn__addImage.addEventListener('click',()=>{
    let r = randomIMG()
    console.log(r)
    let card = cardPokemon(`${routeImg}${r}.svg`)
    container.append(card)
})

const randomIMG = ()=>  Math.round(Math.random()*(649-1))+1