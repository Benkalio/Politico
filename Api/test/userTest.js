import chai from "chai";
import chaiHttp from "chai-http";
import {
  res
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
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eq(3);
          done();
        });
    })
  })

  // Post route

  // Patch route

  // Delete route
});