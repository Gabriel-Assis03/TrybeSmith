import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import { Order } from '../types/Order';
import mapStatusHTTP from '../middlewares/mapStatusHTTP';

const getOrders = async (_req: Request, res: Response) => {
  const { status, data } = await ordersService.getOrders() as { 
    status: string, data: Order };
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  getOrders,
};