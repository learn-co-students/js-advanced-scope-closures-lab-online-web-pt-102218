function produceDrivingRange(range) {
  return function(startStreet, endStreet) {
    let total = Math.abs(parseInt(startStreet) - parseInt(endStreet))
    if  (total > range) {
      return (total - range) + ' blocks out of range'
    } else {
      return 'within range by ' + (range - total)
    }
  }
}

function produceTipCalculator(percentTip) {
  return function(fare) {
    return fare * percentTip
  }
}

function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
