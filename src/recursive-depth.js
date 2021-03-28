const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count1 = 1;
    let count2 = 0;
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        count2 = this.calculateDepth(arr[i]) + 1;
        if(count2 > count1) {
          count1 = count2;
        }
      }
    }
    return count1
  }
};

