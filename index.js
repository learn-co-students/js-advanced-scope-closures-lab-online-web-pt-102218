function produceDrivingRange(range){
    return function (string1, string2){
        result = Math.abs(parseInt(string1, 10) - parseInt(string2, 10))
        return result <= range ? `within range by ${range - result}` : `${result - range} blocks out of range`
    }
}

function produceTipCalculator(percent){
    return function (fare){
        return fare * percent
    }
}

function createDriver(){
    let driverId = 0
    return class Driver{
        constructor(name){
            driverId++
            this.id = driverId
            this.name = name
        }
    }
}