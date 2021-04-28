import {registerImage} from '../utils/lazyLoading.js'

const cardPokemon = (route) => {
   let container = document.createElement('div');
   container.classList.add('Crad__imagePokemon');
   let elementImage = document.createElement('img');
   elementImage.dataset.src = `${route}`;
   elementImage.classList.add('imagePokemon');
   container.append(elementImage);
   registerImage(elementImage)
   return container;
};

export default cardPokemon;
