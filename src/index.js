import cardPokemon from './template/cardPokemon.js';

const container = document.querySelector('.images__container');
const details = document.querySelector('.details__container');
const btn__addImage = document.querySelector('.btn__addIMG');
let count = 0;
const routeImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
btn__addImage.addEventListener('click', () => {
   count++;
   if (count == 1) {
      const btn__clean = document.createElement('button');
      btn__clean.classList.add('btn__clean');
      btn__clean.textContent = "clean"
      details.appendChild(btn__clean);
      btn__clean.addEventListener('click',()=>{
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
      })
   }
   let card = cardPokemon(`${routeImg}${randomIMG()}.svg`);
   container.append(card);
});

const randomIMG = () => Math.round(Math.random() * (649 - 1)) + 1;
