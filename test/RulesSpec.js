var rules = require("../public/javascript/rules");
var state = require("../public/javascript/cellState");
describe("createGeneration", function() {

    it("return ALIVE cell if 3 neighbours on 8", function() {
        expect(rules.nexState(true, 3)).toBe(true);
    });


it("return currentState cell if 4 neighbours on 8", function(){
    expect(rules.nexState(true,4)).toBe(true);
    expect(rules.nexState(false,4)).toBe(false);
});


    it("return DEAD cell if not 3 and 4 neighbours on 8", function(){
        expect(rules.nexState(true,1)).toBe(false);
        expect(rules.nexState(true,2)).toBe(false);
        expect(rules.nexState(true,5)).toBe(false);
        expect(rules.nexState(true,6)).toBe(false);
        expect(rules.nexState(true,7)).toBe(false);
        expect(rules.nexState(true,8)).toBe(false);
    });
});