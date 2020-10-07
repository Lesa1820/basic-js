const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  // throw new CustomError('Not implemented');
   
   function x(arr){
      //return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {}, 0) : -1);
      return Array.isArray(arr) ? 1 + arr.reduce(function(a, b) {
        return Math.max(a, x(b));
      }, 0) : 0;
    }
    return x(arr);
  }
};