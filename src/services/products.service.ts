import ProductModel from '../database/models/product.model';
import validate from './validations/validations';

async function getProducts(): Promise<object> {
  const allProduct = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: allProduct };
}

async function postProducts(body: { name: string; price: string; orderId: number; })
  : Promise<object> {
  const { name, price, orderId } = body;
  // if (!name || !price || !orderId) {
  //   return { status: 'INVALID_KEY', data: { message: 'item nao informado' } };
  // }
  const error1 = await validate.validateName(body);
  if (error1) return { status: error1.status, data: { message: error1.message } };
  const error2 = await validate.validatePrice(body);
  if (error2) return { status: error2.status, data: { message: error2.message } };
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