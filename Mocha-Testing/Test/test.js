const expect = require("chai").expect;
const ElementaryFuncOne = require("../MochaUnitTestingPractice");

console.log(ElementaryFuncOne)

describe("Multiply", function() {
  it("should add properly when passed numbers", function() {
    expect(ElementaryFuncOne.additionFunc()).to.equal(9);
  });
  it("should subtract properly when passed numbers", function() {
    expect(ElementaryFuncOne.subtractionFunc()).to.equal(3);
  });
  it("should multiple properly when passed numbers", function() {
    expect(ElementaryFuncOne.multipleFunc()).to.equal(18);
  });
  it("should divide properly when passed numbers", function() {
    expect(ElementaryFuncOne.divideFunc()).to.equal(2);
  });

});
