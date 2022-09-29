/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);

describe('Office API', () => {
  describe('Get /offices', () => {
    it('It should Get all offices', (done) => {
      chai.request(server)
        .get('/offices')
        .end((err, res) => {
          if (err) {
            return err.message;
          }
          res.should.have.status(201);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('Get /offices/:id', () => {
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

  describe('Post /offices', () => {
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

  describe('Patch /offices/:id', () => {
    it('It should make an update to an existing office.', (done) => {
      chai.request(server)
        .patch('/offices/:id')
        .send((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error updating office.',
            });
          }
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('id').eq('number');
          res.body.should.have.property('type').eq('string');
          res.body.should.have.property('name').eq('string');
          done();
        });
    });
  });

  describe('Delete /offices/:id', () => {
    it('It should delete an existing office.', (done) => {
      chai.request(server)
        .delete('/offices/:id')
        .end((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error in delete office test.',
            });
          }
          res.should.have.status(200);
          done();
        });
    });
  });
});
