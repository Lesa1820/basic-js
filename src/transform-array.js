const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  //throw new CustomError('Not implemented');
  if(arr === undefined ) {return false;}
  else if(arr.length == 0){ return [];}
  else if (Array.isArray(arr)) {
    return arr;
  }
  else{ return 0;}
};
