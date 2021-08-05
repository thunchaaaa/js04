"use strict";
function createSquare(config) {
    var newSquare = { coler: "white", area: 10000 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black", width: 100 });
console.log("mySquare", mySquare);
