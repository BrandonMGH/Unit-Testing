const expect = require("chai").expect;
const ElementaryFuncOne = require("../MochaUnitTestingPractice");

console.log(ElementaryFuncOne)

describe("Multiply", function() {
  it("should add properly when passed numbers", function() {
    expect(ElementaryFuncOne.additionFunc()).to.equal(8);
  });
  it("should subtract properly when passed numbers", function() {
    expect(ElementaryFuncOne.subtractionFunc()).to.equal(2);
  });

});
