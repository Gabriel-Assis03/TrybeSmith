import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import app from '../../../src/app';
chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('post /products', async function () {
    const httpRequestBody = {
      "username": "Hagar",
      "password": "asd"
    };
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({
      message: 'Username or password invalid'
    });
  });

});
