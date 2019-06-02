

function produceDrivingRange (blockRange) {
    return function (block1, block2){
        b1 = parseInt(block1.slice(0,-2)) 
        b2 = parseInt(block2.slice(0,-2)) 
        
        if ((b2 - b1) > blockRange) {
            return `${b2 - b1 - blockRange} blocks out of range`
        }
        else {
            return `within range by ${b2 - b1}`
        }
    };
};

function produceTipCalculator(tipPercent) {
    return function (bill) {
        return bill * tipPercent
    };
}





function createDriver(){
    let driverId = 0;

    return class {
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }

    };
}