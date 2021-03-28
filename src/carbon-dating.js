const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity) return false                    
  if(typeof sampleActivity !== "string") return false   
  if(!isFinite(sampleActivity)) return false                       
  if(+sampleActivity <= 0) return false                 
  if(MODERN_ACTIVITY < +sampleActivity ) return false   

  let k = Math.LN2 / HALF_LIFE_PERIOD;  
  let a = MODERN_ACTIVITY / +sampleActivity;  
  let elapsedTime = Math.ceil(Math.log(a) / k);  
  return elapsedTime
};
