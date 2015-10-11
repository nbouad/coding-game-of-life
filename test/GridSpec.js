var grid = require("../public/javascript/grid");
var ALIVE = require("../public/javascript/cellState").ALIVE;
var DEAD = require("../public/javascript/cellState").DEAD;

describe("createGeneration", function() {
    it("returns an array", function() {
        var result = grid.createGeneration();
        expect(Array.isArray(result)).toBe(true);
    });

    it("creates an 2D array", function() {
        var result = grid.createGeneration(3, 5);
        expect(result.length).toBe(5);
        expect(result[0].length).toBe(3);
    });

    it("fills each room with 1 or 0", function() {
        var generation = grid.createGeneration(2, 3);
        for(var y = 0; y < 3; y++) {
            for(var x = 0; x < 2; x++) {
                var cell = generation[y][x];
                var result = cell === DEAD || cell === ALIVE;
                expect(result).toBe(true);
            }
        }
    });

    it("should have DEAD alive neighbours", function(){
        var emptyGrid = [[DEAD,DEAD,DEAD],[DEAD,ALIVE,DEAD],[DEAD,DEAD,DEAD]];

        var count = grid.countAliveNeighbors(emptyGrid, 1, 1);
        expect(count).toBe(0);

    });

    it("should have 2 alive neighbors with only horizontal neighbours", function(){
        var horizontalGrid = [[DEAD,DEAD,DEAD],[ALIVE, ALIVE, ALIVE],[DEAD,DEAD,DEAD]];

        var count = grid.countAliveNeighbors(horizontalGrid, 1, 1);
        expect(count).toBe(2);
    });

    it("should have 2 alive neighbors with only vertical neighbours", function(){
        var verticalGrid = [[DEAD,ALIVE,DEAD],[DEAD,ALIVE,DEAD],[DEAD,ALIVE,DEAD]];

        var count = grid.countAliveNeighbors(verticalGrid, 1, 1);
        expect(count).toBe(2);
    });

    it("should have 8 alive neighbors in a full grid", function(){
        var fullGrid = [[ALIVE,ALIVE,ALIVE],[ALIVE,ALIVE,ALIVE],[ALIVE,ALIVE,ALIVE]];

        var count = grid.countAliveNeighbors(fullGrid, 1, 1);
        expect(count).toBe(8);
    });
});

 describe("createNextGeneration", function() {
     it ("return the same grid if all the cells are dead", function () {

         var grid1 = [[DEAD,DEAD,DEAD],[DEAD,DEAD,DEAD],[DEAD,DEAD,DEAD]];
         var result = grid.createNextGeneration(grid1);
         expect(result).toBe(grid1);
     });

     it ("#flemme", function () {
         var grid1 = [[DEAD,DEAD,ALIVE],[DEAD,DEAD,ALIVE],[ALIVE,DEAD,DEAD]];
         var result = grid.createNextGeneration(grid1);
         var expectedResult = [[DEAD,DEAD,DEAD], [DEAD,ALIVE,DEAD], [DEAD,DEAD,DEAD]];
         expect(result).toBe(expectedResult);
     });
});
