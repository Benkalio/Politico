/* eslint-disable consistent-return */
/* eslint-disable no-undef */

import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);

describe('Office API', () => {
  // Testing Different Routes
  // Get route
  describe('Get /api/src/routes', () => {
    it('It should Get all offices', (done) => {
      chai.request(server)
        .get('/offices')
        .end((err, res) => {
          if (err) {
            return err;
          }
          res.should.have.status(201);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  // Get by id
  describe('Get /api/src/routes/:id', () => {
    it('It should get office by id', (done) => {
      chai.request(server)
        .get('/offices/:id')
        .end((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error in testing get by id in userTest',
            });
          }
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  // Post route
  describe('Post /api/src/routes', () => {
    it('It should make a post to parties', (done) => {
      chai.request(server)
        .post('/offices')
        .send((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error',
            });
          }
          res.should.have.status(201);
          res.body.should.be.an('object');
          res.body.should.have.property('id').eq('number');
          res.body.should.have.property('type').eq('string');
          res.body.should.have.property('name').eq('string');
          done();
        });
    });
  });
  // Patch route
  describe('Patch /api/src/routes', () => {
    it('It should make an update to an existing office.', () => {
      chai.request(server)
        .patch('/offices/:id')

        .send((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error in testing get by id in userTest',
            });
          }

          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('id').eq('number');
          res.body.should.have.property('type').eq('string');
          res.body.should.have.property('name').eq('string');
        });
    });
  });

  // Delete route
  describe('Delete /api/src/routes', () => {
    it('It should delete an existing office.', () => {
      chai.request(server)
        .delete('/offices/:id')

        .send((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error in testing get by id in userTest',
            });
          }

          res.should.have.status(200);
        });
    });
  });
});
