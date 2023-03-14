import shoes from './shoes.json';

function getProductById(productId) {
  return shoes.find((shoe) => shoe.id === productId);
}

export {
  getProductById
}