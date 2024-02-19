//required packages
const chai = require("chai");
const nock = require("nock");
const expect = require("chai").expect;
var request = require("supertest")("http://localhost:5000");

describe("Send request to search movie in api", () => {
  it("Search existent movie, should return response true!", (done) => {
    //setup mocked backend for a specific end point
    nock("http://localhost:5000").get("/api/search?q=titanic").reply(200, {
      Response: "True",
    });

    //perform the request to the api which will now be intercepted by nock
    request.get("/api/search?q=titanic").end(function (err, res) {
      expect(res.body.Response).to.equal("True");
      done();
    });
  });

  it("Search non-existent movie, should return response false!", (done) => {
    //setup mocked backend for a specific end point
    nock("http://localhost:5000").get("/api/search?q=asdf123").reply(200, {
      Response: "False",
      Error: "Movie not found!",
    });

    //perform the request to the api which will now be intercepted by nock
    request.get("/api/search?q=asdf123").end(function (err, res) {
      expect(res.body.Response).to.equal("False");
      expect(res.body.Error).to.equal("Movie not found!");
      done();
    });
  });
});
