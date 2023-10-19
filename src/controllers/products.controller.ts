import { Request, Response } from 'express';
import productsService from '../services/products.service';
import { Product } from '../types/Product';
import mapStatusHTTP from '../middlewares/mapStatusHTTP';

const getProducts = async (_req: Request, res: Response) => {
  const { status, data } = await productsService.getProducts() as { 
    status: string, data: Product };
  return res.status(mapStatusHTTP(status)).json(data);
};

const postProducts = async (req: Request, res: Response) => {
  const { status, data } = await productsService.postProducts(req.body) as { 
    status: string, data: Product };
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  postProducts,
  getProducts,
};