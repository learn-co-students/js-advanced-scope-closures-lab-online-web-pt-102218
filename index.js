function produceDrivingRange(blockRange) {
    return function(start, end) {
        let starting = parseInt(start, 10) 
        let ending = parseInt(end, 10)
        let distance = Math.abs(ending - starting)
        let distanceTravel = blockRange - distance

        if ( distanceTravel > 0 ) {
            return `within range by ${distanceTravel}`
          } else {
            return `${Math.abs(distanceTravel)} blocks out of range`
          }

    }
}

function produceTipCalculator(percentage) {
    return function(number) {
        return percentage * number
    }
}

function createDriver(name) {
    let driverId = 0
    return class {
        constructor(name) {
            this.name = name 
            this.id = ++driverId
        }
    }
}