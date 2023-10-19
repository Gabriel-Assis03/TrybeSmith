import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('post /products', async function () {
    const httpRequestBody = productMock.noName;
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({
      message: "item nao informado"
    });
  });

  // it('post /products', async function () {
  //   const httpRequestBody = productMock.correctProduct;
  //   const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

  //   expect(httpResponse.status).to.equal(201);
  //   // expect(httpResponse.body).to.be.deep.equal({
  //   //   "id": 7,
  //   //   "name": "Martelo de Thor",
  //   //   "price": "30 peças de ouro",
  //   //   "orderId": 4
  //   // });
  // });
});
