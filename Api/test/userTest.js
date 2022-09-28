/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);

describe('User API', () => {
  // Testing Different Routes
  // Get route
  describe('Get /api/src/routes', () => {
    it('It should Get all users', (done) => {
      chai.request(server)
        .get('/api/src/routes')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  // Get by id
  describe('Get /api/src/routes/:id', () => {
    it('It should get user by id', (done) => {
      chai.request(server)
        .get('/api/src/routes')
        .end((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error',
            });
          }
        });
      done();
    });
  });

  // Post route
  describe('Post /api/src/routes', () => {
    it('It should make a post to users', (done) => {
      chai.request(server)
        .post('/api/src/routes')
        .send((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error',
            });
          }
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('a');
          done();
        });
    });
  });

  // To do
  // Patch route

  // Delete route
});
