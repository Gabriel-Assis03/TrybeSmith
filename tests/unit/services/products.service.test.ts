import { expect } from 'chai';
import sinon from 'sinon';
import productMock from '../../mocks/product.mock';
import app from '../../../src/app';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  // it('post /products', async function () {
  //   const httpRequestBody = productMock.correctProduct
  //   const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

  //   // expect(httpResponse.status).to.equal(201);
  //   // expect(httpResponse.body).to.be.deep.equal({
  //   //   "id": 10,
  //   //   "name": "Martelo de Thor",
  //   //   "price": "30 peças de ouro",
  //   //   "orderId": 4
  //   // });
  // });
});
