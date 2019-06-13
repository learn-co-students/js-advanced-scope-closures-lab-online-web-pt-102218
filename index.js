function produceDrivingRange(blockRange){
    return function(a,b){
        block = Math.abs(parseInt(a)- parseInt(b))
        traveled = Math.abs(block - blockRange)
        if(block > blockRange){
            return `${traveled} blocks out of range`;
    } else {
      return `within range by ${traveled}`;
    }
    }
}

function produceTipCalculator(percent){
    return function(fare){
        return fare * percent
    }
} 

function createDriver(){
    let DriverId = 0 
    return class Driver {
        constructor(name) {
            this.name = name 
            this.id = DriverId++
        }
    }
}