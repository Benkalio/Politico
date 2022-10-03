/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);

describe('User API', () => {
  describe('Get /users', () => {
    it('It should Get all users', (done) => {
      chai.request(server)
        .get('/users')
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

  describe('Get /users/:id', () => {
    it('It should get user by id', (done) => {
      chai.request(server)
        .get('/users/:id')
        .end((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error getting user.',
            });
          }

          res.should.have.status(201);
          res.should.be.a('object');
          done();
        });
    });
  });

  describe('Post /users', () => {
    it('It should make a post to users', (done) => {
      chai.request(server)
        .post('/users/:id')
        .send((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error posting user.',
            });
          }

          const userProperties = res.body.should.have.property;

          res.should.have.status(201);
          res.body.should.be.a('object');
          userProperties('id').eq('number');
          userProperties('firstName').eq('string');
          userProperties('lastName').eq('string');
          userProperties('otherName').eq('string');
          userProperties('email').eq('string');
          userProperties('phoneNumber').eq('number');
          userProperties('passportUrl').eq('string');
          userProperties('isAdmin').eq(Boolean);
          done();
        });
    });
  });

  describe('Patch /users/:id', () => {
    it('It should update an existing user.', (done) => {
      chai.request(server)
        .patch('/users/:id')
        .send((err, res) => {
          if (err) {
            res.send({
              message: 'There was an error updating user.',
            });
          }
          const userProperties = res.body.should.have.property;

          res.should.have.status(200);
          res.body.should.be.a('object');
          userProperties('id').eq('number');
          userProperties('firstName').eq('string');
          userProperties('lastName').eq('string');
          userProperties('otherName').eq('string');
          userProperties('email').eq('string');
          userProperties('phoneNumber').eq('number');
          userProperties('passportUrl').eq('string');
          userProperties('isAdmin').eq(Boolean);
          done();
        });
    });
  });

  describe('Delete /users/:id', () => {
    it('It should delete an existing user.', (done) => {
      chai.request(server)
        .delete('/users/:id')
        .end((err, res) => {
          if (err) {
            return err.message;
          }

          res.should.have.status(200);
          done();
        });
    });
  });
});
