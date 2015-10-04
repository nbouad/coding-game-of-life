exports.createGeneration = function (width, height) {
    var generation = new Array(height);

    for(var y = 0; y < height; y++) {
        generation[y] = [];
        for(var x = 0; x < width; x++) {
            // Return a number between 0 and 1
            generation[y][x] = Math.floor(Math.random() * 2);
        }
    }
    return generation;
}