import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwtUtil from '../middlewares/jwt.util';

async function valid(foundUser: { dataValues: { password: string; }; }, password: string)
  : Promise<object> {
  if (!foundUser || foundUser.dataValues.password !== password) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const isPasswordValid = await bcrypt.compare(password, foundUser.dataValues.password);
  if (!isPasswordValid) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
}

async function postLogin(body: { username: string; password: string; })
  : Promise<object> {
  const { username, password } = body;
  if (!username || !password) {
    return { status: 'INVALID_KEY', data: { message: '"username" and "password" are required' } };
  }
  const foundUser = await UserModel.findOne({ where: { username } });
  const vali = valid(foundUser, password);
  // if (!foundUser || foundUser.dataValues.password !== password) {
  //   return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  // }

  // const isPasswordValid = await bcrypt.compare(password, foundUser.dataValues.password);
  // if (!isPasswordValid) {
  //   return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  // }

  const { id } = foundUser.dataValues;
  const token = jwtUtil.sign({ id, username: foundUser.dataValues.username });

  return { status: 'CREATED', data: { token } };
}

export default {
  postLogin,
};