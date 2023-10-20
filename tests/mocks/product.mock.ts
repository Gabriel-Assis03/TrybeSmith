const correctProduct = {
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
};

const noName = {
  price: '30 peças de ouro',
  orderId: 4
};

const incorrectName = {
  name: 'Ma',
  price: '30 peças de ouro',
  orderId: 4
};

const noStringName = {
  name: [1,2],
  price: '30 peças de ouro',
  orderId: 4
};

const noPrice = {
  name: '30 peças de ouro',
  orderId: 4
};

const incorrectPrice = {
  name: '30 peças de ouro',
  price: 'Ma',
  orderId: 4
};

const noStringPrice = {
  name: '30 peças de ouro',
  price: [1,2],
  orderId: 4
};



export default {
  correctProduct,
  noName,
  noPrice,
  incorrectName,
  noStringName,
  incorrectPrice,
  noStringPrice,
};