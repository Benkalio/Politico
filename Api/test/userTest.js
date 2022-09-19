import chai from "chai";
import chaiHttp from "chai-http";
import {
  response,
} from "express";
const expect = chai.expect;

//Assertion
chai.should();
chai.use(chaiHttp);

// To do
describe('User API', () => {
  //Testing Different Routes 
  // Get route
  describe("Get /api/src/routes/userRoute", () => {
    it("It should Get all users", (done) => {
      chai.request(server)
        .get("/api/src/routes/userRoute")
        .end((err, response) => {
          if (err) response.send({
            message: "There was an error"
          });
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        });
    });
  });

  // Get by ID
  describe("Get /api/src/routes/userRoute/:id", () => {
    it("It should get user by id", (done) => {
      chai.request(server)
        .get("/api/src/routes/userRoute")
        .end((err, response) => {
          if (err) response.send({
            message: "There was an error"
          });
        })
    })
  })

  // Post route
  describe("Post /api/src/routes/userRoute", () => {
    it("It should make a post to users", (done) => {
      chai.request(server)
        .get("/api/src/routes/userRoute")
        .end((err, res) => {
          if (err) res.send({
            message: "There was an error"
          });
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.age.should.be.a('number');
          done();
        })
    })
  })

  // Patch route

  // Delete route
});