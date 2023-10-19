import ProductModel from '../database/models/product.model';
import OrdersModel from '../database/models/order.model';

async function getOrders(): Promise<object> {
  const allOrders = await OrdersModel.findAll();
  const ordersArray = allOrders.map((product) => product.dataValues);
  
  const ordersWithProductIds = await Promise.all(
    ordersArray.map(async (order) => {
      const products = await ProductModel.findAll({ where: { orderId: order.id } });
      const productsArray = products.map((product) => product.dataValues);
      return {
        id: order.id,
        userId: order.userId,
        productIds: productsArray.map((product) => product.id),
      };
    }),
  );

  return { status: 'SUCCESSFUL', data: ordersWithProductIds };
}

export default {
  getOrders,
};