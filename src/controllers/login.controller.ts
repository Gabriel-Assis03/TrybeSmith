import { Request, Response } from 'express';
import loginService from '../services/login.service';
import { User } from '../types/User';
import mapStatusHTTP from '../middlewares/mapStatusHTTP';

const postLogin = async (req: Request, res: Response) => {
  const { status, data } = await loginService.postLogin(req.body) as { 
    status: string, data: User };
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  postLogin,
};