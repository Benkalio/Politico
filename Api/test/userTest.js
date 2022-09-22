import chai from "chai";
import chaiHttp from "chai-http";
// import {
//   res
// } from "express";
const expect = chai.expect;

//Assertion
chai.should();
chai.use(chaiHttp);

describe('User API', () => {
  //Testing Different Routes 
  // Get route
  describe("Get /api/src/routes", () => {
    it("It should Get all users", (done) => {
      chai.request(server)
        .get("/api/src/routes")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    })
  });

  // Get by id 
  describe("Get /api/src/routes/:id", () => {
    it("It should get user by id", (done) => {
      chai.request(server)
        .get("/api/src/routes")
        .end((err, response) => {
          if (err) response.send({
            message: "There was an error"
          });
        })
    })
  })

  // Post route
  describe("Post /api/src/routes", () => {
    it("It should make a post to users", (done) => {
      chai.request(server)
        .get("/api/src/routes")
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
  });

  // To do
  // Patch route

  // Delete route
});