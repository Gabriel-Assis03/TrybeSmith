import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('post /products', async function () {
    const httpRequestBody = productMock.correctProduct;
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(201);
    // expect(httpResponse.body).to.be.deep.equal({
    //   "id": 7,
    //   "name": "Martelo de Thor",
    //   "price": "30 peças de ouro",
    //   "orderId": 4
    // });
  });
});
