import ProductModel from '../database/models/product.model';

async function getProducts(): Promise<object> {
  const allProduct = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: allProduct };
}

async function postProducts(body: { name: string; price: string; orderId: number; })
  : Promise<object> {
  const { name, price, orderId } = body;
  if (!name || !price || !orderId) {
    return { status: 'INVALID_KEY', data: { message: 'item nao informado' } };
  }
  const newProduct = await ProductModel.create({
    name,
    price,
    orderId,
  });
  return { status: 'CREATED', data: newProduct };
}

export default {
  postProducts,
  getProducts,
};