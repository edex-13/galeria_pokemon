const observer = new IntersectionObserver((entries) => {
   const intersectingImages = entries.filter(isIntersecting);
   intersectingImages.forEach(loadImage);
});

const isIntersecting  = (image) => image.isIntersecting;
const loadImage = (entry) => {
   const image = entry.target;
   const routeImage = image.dataset.src;
   image.src = routeImage;
   image.classList.add('load')
   //Dejar de observar dicha imagen luego de que ya fue creada
   observer.unobserve(image);
};

export const registerImage = (image) => {
   observer.observe(image);
};
