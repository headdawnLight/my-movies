//required packages
const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Send request to search movie in api", () => {
  it("Search existent movie, should return response true!", (done) => {
    //assertion
    chai
      .request("http://localhost:5000")
      .get("/api/search?q=titanic")
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.results.Response.should.equal("True");
        done();
      });
  });

  it("Search non-existent movie, should return response false!", (done) => {
    //assertion
    chai
      .request("http://localhost:5000")
      .get("/api/search?q=asdf123")
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.results.Response.should.equal("False");
        res.body.results.Error.should.equal("Movie not found!");
        done();
      });
  });
});
