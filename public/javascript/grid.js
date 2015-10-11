'use strict';
var _=require('lodash');
var rules=require('./rules');
exports.createGeneration = function (width, height) {
    var generation = new Array(height);

    for(var y = 0; y < height; y++) {
        generation[y] = [];
        for(var x = 0; x < width; x++) {
            // Return a number between 0 and 1
            generation[y][x] = Math.floor(Math.random() * 2) == 1;
        }
    }
    return generation;
};

exports.countAliveNeighbors = function(grid, row, column){
    let count=0;
    _.forEach(grid,(innerGrid, rowIndex)=> {
     _.forEach(innerGrid, (cell, columnIndex)=>{
         if (cell && !  (rowIndex == row && columnIndex == column)) count++;
     }) ;
    });
    return count;
};

exports.createNextGeneration = function (grid, w, h) {
    var newGrid = grid;
    _.forEach(grid,(innerGrid, rowIndex)=> {
        _.forEach(innerGrid, (cell, columnIndex)=>{
            newGrid[rowIndex][columnIndex] = rules.nexState(grid[rowIndex][columnIndex],
                exports.countAliveNeighbors(grid, rowIndex, columnIndex));
        }) ;
    });
    return newGrid;
};