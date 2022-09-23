import chai from "chai";
import chaiHttp from "chai-http";

const expect = chai.expect;

//Assertion
chai.should();
chai.use(chaiHttp);

// To do
describe('Office API', () => {
  //Testing Different Routes 
  // Get route
  describe("Get /api/src/routes", () => {
    it("It should Get all offices", (done) => {
      chai.request(server)
        .get("/api/src/routes")
        .end((err, res) => {
          if (err) {
            return err;
          };
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    })
  });

  // Get by id 
  describe("Get /api/src/routes/:id", () => {
    it("It should get office by id", (done) => {
      chai.request(server)
        .get("/api/src/routes")
        .end((err, response) => {
          if (err) {
            response.send({
              message: "There was an error"
            });
          }
          res.should.have.status(200);
          res.body.should.be.an('object');
          done();
        });
    })
  });

  // Post route
  describe("Post /api/src/routes", () => {
    it("It should make a post to parties", (done) => {
      chai.request(server)
        .get("/api/src/routes")
        .end((err, res) => {
          if (err) {
            res.send({
              message: "There was an error"
            });
          }
          res.should.have.status(200);
          res.body.should.be.an('object');
          done();
        })
    })
  });
  // Patch route

  // Delete route
});