const request = require('supertest');
const app = require('../../testSetup');
const server = request.agent("http://localhost:8080");


describe('promotion.router', () => {
  describe('GET /promotion ', () => {
    it('Deve retornar um array', () => {
      return server.get('/product').then((response) => {
        expect(response.statusCode).equal(200);
        expect(response.body).to.be.an('array');
      });
    });
  });

});
