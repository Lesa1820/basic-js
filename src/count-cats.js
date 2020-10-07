const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  if(matrix === undefined){
    return false;
  }
  let arr = [].concat(...matrix);
  let x = 0;
  for(let i = 0;i < arr.length; i++){
    if(arr[i] === "^^"){
      x = x + 1;
    }
  }
  return x;
}
