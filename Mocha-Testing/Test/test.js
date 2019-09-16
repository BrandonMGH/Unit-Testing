const expect = require("chai").expect;
const additionFunc = require("../MochaUnitTestingPractice");


describe("Multiply", function() {
  it("should add properly when passed numbers", function() {
    expect(additionFunc(2, 4)).to.equal(6);
  });

});
