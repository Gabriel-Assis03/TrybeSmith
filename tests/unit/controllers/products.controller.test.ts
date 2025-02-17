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
      message: "\"name\" is required"
    });
  });

  it('post /products', async function () {
    const httpRequestBody = productMock.noStringName;
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({
      message: "\"name\" must be a string"
    });
  });

  it('post /products', async function () {
    const httpRequestBody = productMock.incorrectName;
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({
      message: "\"name\" length must be at least 3 characters long"
    });
  });

  it('post /products', async function () {
    const httpRequestBody = productMock.noPrice;
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({
      message: "\"price\" is required"
    });
  });

  it('post /products', async function () {
    const httpRequestBody = productMock.noStringPrice;
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({
      message: "\"price\" must be a string"
    });
  });

  it('post /products', async function () {
    const httpRequestBody = productMock.incorrectPrice;
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({
      message: "\"price\" length must be at least 3 characters long"
    });
  });

  it('post /products', async function () {
    const httpRequestBody = productMock.incorrectPrice;
    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);
  });

});
