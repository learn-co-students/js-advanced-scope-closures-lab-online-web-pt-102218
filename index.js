function produceDrivingRange(blockRange) {
  return function(start, end) {
    let startN = parseInt(start, 10);
    let endN = parseInt(end, 10);
    if ((endN - startN) <= blockRange) {
      return `within range by ${endN - startN}`
    } else {
      return `${(endN - startN - blockRange)} blocks out of range`
    }
  }
}
function produceTipCalculator(percentage) { 
    return function (total) {
      return percentage * total 
    }
  }
function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ driverId;
    }
  }

}