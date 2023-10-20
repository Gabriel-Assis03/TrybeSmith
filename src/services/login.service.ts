import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwtUtil from '../middlewares/jwt.util';

async function valid(
  foundUser: { dataValues: { password: string; }; }, 
  password: string,
): Promise<boolean> {
  const isPasswordValid = await bcrypt.compare(password, foundUser.dataValues.password);
  if (!isPasswordValid) {
    return true;
  }
  return false;
}

async function postLogin(body: { username: string; password: string; })
  : Promise<object> {
  const { username, password } = body;
  if (!username || !password) {
    return { status: 'INVALID_KEY', data: { message: '"username" and "password" are required' } };
  }

  const foundUser = await UserModel.findOne({ where: { username } });
  if (!foundUser) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const vali = await valid(foundUser, password);
  if (vali) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  
  const { id } = foundUser.dataValues;
  const token = jwtUtil.sign({ id, username: foundUser.dataValues.username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  postLogin,
};