function produceDrivingRange(range) {
  return function(streetA, streetB) {
    diff = range - Math.abs(parseInt(streetA) - parseInt(streetB));
    if(diff >= 0) {
      return `within range by ${diff}`;
    } else {
      return `${-diff} blocks out of range`;
    }
  }
};

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}