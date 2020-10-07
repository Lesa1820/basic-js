const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
//2^n-1
let all = {
  turns: 0,
  seconds: 0
}
let turns = Math.pow(2,disksNumber) - 1;
let second =  Math.floor(turns / (turnsSpeed / 3600));
all.turns = turns;
all.seconds = second;
return all;
};
