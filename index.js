function produceDrivingRange(blockRange) {
  return function(distance1, distance2) {
    let sum = parseInt(distance2) -  parseInt(distance1)

    if(sum < blockRange) {
      return `within range by ${blockRange - sum}`;
    }
    if(sum > blockRange) {
      return `${sum - blockRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip; 
  };
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  }
}
