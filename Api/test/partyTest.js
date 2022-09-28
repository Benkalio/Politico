/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);

describe('Party API', () => {
  describe('Get /api/src/routes', () => {
    it('It should Get all parties', (done) => {
      chai.request(server)
        .get('/parties')
        .end((err, res) => {
          if (err) {
            return ({
              message: 'There was an error getting Parties.',
            });
          }
          res.should.have.status(201);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('Get /api/src/routes', () => {
    it('It should get party by id', (done) => {
      chai.request(server)
        .get('/parties/:id')
        .end((err, res) => {
          if (err) {
            return ({
              message: 'There was an error getting Party.',
            });
          }
          res.should.have.status(201);
          res.body.should.be.an('object');
          done();
        });
    });
  });

  // Post route
  describe('Post /api/src/routes', () => {
    it('It should make a post to parties', (done) => {
      chai.request(server)
        .post('/parties')
        .send((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error creating party.',
            });
          }

          partyProperties = res.body.should.have.property;

          res.should.have.status(201);
          res.body.should.be.an('object');
          partyProperties('id').eq(Number);
          partyProperties('name').eq(String);
          partyProperties('hqAddress').eq(String);
          partyProperties('logoUrl').eq(String);

          done();
        });
    });
  });

  describe('Patch /api/src/routes', () => {
    it('It should update a party', (done) => {
      chai.request(server)
        .post('/parties/:id')
        .send((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error updating party.',
            });
          }

          const partyProperties = res.body.should.have.property;

          res.should.have.status(200);
          res.body.should.be.an('object');
          partyProperties('id').eq(Number);
          partyProperties('name').eq(String);
          partyProperties('hqAddress').eq(String);
          partyProperties('logoUrl').eq(String);

          done();
        });
    });
  });

  describe('Delete /api/src/routes', () => {
    it('It should delete a party.', (done) => {
      chai.request(server)
        .delete('/parties/:id')
        .end((err, res) => {
          if (err) {
            return ({
              message: 'There was an error deleting party.',
            });
          }

          res.should.have.status(200);
          done();
        });
    });
  });
});
