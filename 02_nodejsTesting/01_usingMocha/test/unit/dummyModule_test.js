var should      = require("should");
var dummyModule = require("../../lib/dummyModule.js");

describe("dummyModule.js", function() {
    describe("returnMinusFive()", function() {
        it("should be number", function(){
          var minusFive = dummyModule.returnMinusFive();
          (minusFive).should.be.Number();
        });
        it("should be negative number", function(){
          var minusFive = dummyModule.returnMinusFive();
          (minusFive).should.be.below(0);
        });
    });
});