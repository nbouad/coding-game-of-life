var state = require("./cellState");
exports.nexState = function (cellState, nbLiveNeighbours) {
    if(nbLiveNeighbours == 4){
        return cellState;
    }
    if(nbLiveNeighbours == 3){
        return state.ALIVE;
    }
return state.DEAD;
};