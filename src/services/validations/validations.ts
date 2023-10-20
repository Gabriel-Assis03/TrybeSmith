import schemas from './schemas';

type Body = {
  name: string;
  price: string;
};

type Erro = {
  status: string;
  message: string | object;
};

async function validateName(body: Body): Promise<Erro | undefined> {
  const { name } = body;
  const error1 = schemas.nameSchemaRequired.validate(name);
  if (error1.error) return { status: 'INVALID_KEY', message: '"name" is required' };
  const error2 = schemas.nameSchemaString.validate(name);
  if (error2.error) return { status: 'INVALID_VALUE', message: '"name" must be a string' };
  const error3 = schemas.nameSchemaStringMin.validate(name);
  if (error3.error) return { status: 'INVALID_VALUE', message: error3.error.message };
}

async function validatePrice(body: Body): Promise<Erro | undefined> {
  const { price } = body;
  const error1 = schemas.priceSchemaRequired.validate(price);
  if (error1.error) return { status: 'INVALID_KEY', message: '"price" is required' };
  const error2 = schemas.priceSchemaString.validate(price);
  if (error2.error) return { status: 'INVALID_VALUE', message: '"price" must be a string' };
  const error3 = schemas.priceSchemaStringMin.validate(price);
  if (error3.error) return { status: 'INVALID_VALUE', message: error3.error.message };
}

export default {
  validateName,
  validatePrice,
};