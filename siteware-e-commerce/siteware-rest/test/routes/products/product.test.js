const request = require('supertest');
const app = require('../../testSetup');
const server = request.agent("http://localhost:8080");

describe('product.router', () => {
  var product;

  describe('GET /product ', () => {
    it('Deve retornar um array', () => {
      return server.get('/product').then((response) => {
        expect(response.statusCode).equal(200);
        expect(response.body).to.be.an('array');
      });
    });
  });

  describe('POST /product ', () => {

    it('Deve retornar uma nova instância de Product', () => {
      let payload = {
        name: "produto",
        price: 1000
      };
      return server.post('/product').send(payload).then((response) => {
        expect(response.statusCode).equal(201);
        expect(response.body).to.be.an('object');
        expect(response.body._id).to.not.be.undefined;
        expect(response.body.price).equal(payload.price);
      });
    });

    it('com Promoção deve retornar uma nova instância de Product', () => {
      let payload = {
        name: "produto",
        price: 1000,
        promotion: "5cc9e574c03e5f9fe6be58f2"
      };
      return server.post('/product').send(payload).then((response) => {
        expect(response.statusCode).equal(201);
        expect(response.body).to.be.an('object');
        expect(response.body._id).to.not.be.undefined;
        expect(response.body.promotion).equal(payload.promotion);
      });
    });

    it('com promoção inválida deve retornar error', () => {
      let payload = {
        name: "produto",
        price: 1000,
        promotion: "5cc9e574c03e5f9fe6be58f"
      };
      return server.post('/product').send(payload).then((response) => {
        expect(response.statusCode).equal(500);
      });
    });

    it('com nome inválida deve retornar error', () => {
      let payload = {
        price: 1000,
        promotion: "5cc9e574c03e5f9fe6be58f"
      };
      return server.post('/product').send(payload).then((response) => {
        expect(response.statusCode).equal(400);
        expect(response.body.message).to.have.string("\"name\" is required");
      });
    });

    it('com preço negativo deve retornar error', () => {
      let payload = {
        name: "produto",
        price: -1000,
        promotion: "5cc9e574c03e5f9fe6be58f"
      };
      return server.post('/product').send(payload).then((response) => {
        expect(response.statusCode).equal(400);
        expect(response.body.message).to.have.string("\"price\" must be a positive number");
      });
    });
  });

  describe('GET /product/:id', () => {
    before(() => {
      let payload = {
        name: "produto",
        price: 1000,
        promotion: "5cc9e574c03e5f9fe6be58f2"
      };
      return server.post('/product').send(payload).then((response) => {
        product = response.body;
      });
    });

    it('Deve retornar o produto com o objeto de promoção completo', () => {
      return server.get(`/product/${product._id}`).then((response) => {
        expect(response.statusCode).equal(200);
        expect(response.body.promotion).to.be.an("object");
        expect(response.body.promotion._id).equal("5cc9e574c03e5f9fe6be58f2");
      });
    });
  });

  describe('PUT /product/:id', () => {
    it('deve atualizar o produto cadastrado', () => {
      let oldName = product.name;
      product.name = "produtoNovo";
      return server.put(`/product/${product._id}`).send(product).then((response) => {
        expect(response.statusCode).equal(204);
        return server.get(`/product/${product._id}`).then((response) => {
          expect(response.statusCode).equal(200);
          expect(response.body.name).equal(product.name);
        });
      });
    });
  });

  describe('Delete /product/:id', () => {
    it('deve deletar o produto cadastrado', () => {
      return server.delete(`/product/${product._id}`).then((response) => {
        expect(response.statusCode).equal(204);
        return server.get(`/product/${product._id}`).then((response) => {
          expect(response.statusCode).equal(404);
        });
      });
    });
  });
});
