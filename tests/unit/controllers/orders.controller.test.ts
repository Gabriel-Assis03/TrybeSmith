import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import app from '../../../src/app';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('get /orders', async function () {
    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse.status).to.equal(200);
  });

});
