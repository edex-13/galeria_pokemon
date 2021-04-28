const cardPokemon = (route) => {
   let container = document.createElement('div');
   container.classList.add('Crad__imagePokemon');
   let elementImage = document.createElement('img');
   elementImage.src = `${route}`;
   elementImage.classList.add('imagePokemon');
   container.append(elementImage);
   return container;
};

export default cardPokemon;
