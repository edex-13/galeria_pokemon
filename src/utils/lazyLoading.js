const observer = new IntersectionObserver((entries) => {
   const intersectingImages = entries.filter(isIntersecting);
   intersectingImages.forEach(loadImage);
});

const isIntersecting  = (image) => image.isIntersecting;
const loadImage = (entry) => {
   const nodo = entry.target;
   console.log('Imagen lista para cargar');
   //Dejar de observar dicha imagen luego de que ya fue creada
   observer.unobserve(nodo);
};

export const registerImage = (image) => {
   observer.observe(image);
};
