import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../middlewares/mapStatusHTTP';
import { Product } from '../types/Product';

const postProducts = async (req: Request, res: Response) => {
  const { status, data } = await productsService.postProducts(req.body) as { 
    status: string, data: Product };
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  postProducts,
};