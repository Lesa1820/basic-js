const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  if(date === undefined){
    return 'Unable to determine the time of year!';
  }else{
    let mounth = date.getMonth(),season;
    if(mounth == 11 || mounth == 0 || mounth == 1){
      season = "winter";
    }
    if(mounth == 2 || mounth == 3 || mounth == 4){
      season = "spring";
    }
    if(mounth == 5 || mounth == 6 || mounth == 7){
      season = "summer";
    }
    if(mounth == 8 || mounth == 9 || mounth == 10){
      season = "fall";
    }
    return season;
  }
};
