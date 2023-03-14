import shoes from './shoes.json';

function getProductById(productId) {
  return shoes.find((shoe) => shoe.id === productId);
}

function getProductsByCategory(category) {
  return shoes.filter((shoe) => shoe.categoria === category);
}

export {
  getProductById,
  getProductsByCategory
}