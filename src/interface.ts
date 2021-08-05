interface SquareConfig {
    color?: String;
    width?: number;
}

function createSquare(config:SquareConfig): {color: string; area: number} {
    let newSquare = {coler: "white", area: 10000}

    if (config.color){
        newSquare.color = config.color
    }

    if(config.width) {
        newSquare.area = config.width * config.width
        
    }
    return newSquare
}
let mySquare = createSquare({color:"black",width:100})

console.log(`mySquare`,mySquare)