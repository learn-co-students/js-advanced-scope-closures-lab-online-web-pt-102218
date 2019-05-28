function produceDrivingRange(distance) {
    return function(streetOne, streetTwo) {
        let one = streetOne.split('th')[0]
        let two = streetTwo.split('th')[0]
        let num;
        
        if (one > two) {
            num = one - two
        } else {
            num = two - one
        }
        console.log(one, two, num)
        if (num > distance) {
            return `${num - distance} blocks out of range`
        } else {
            return `within range by ${num}`
        }
    }
}


function produceTipCalculator(tip) {
    return function(fare) {
        return fare * tip;
    }
}

function createDriver() {
    let driverId = 0
    return class {
        constructor(name) {
            this.id = ++driverId
            this.name = name
        }
    }
}