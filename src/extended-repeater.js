const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, 
  {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  }) {
  str = String(str);
  addition = String(addition);
  let emptyStr = '';
  let result = '';
  for(let i = 1; i <= additionRepeatTimes; i++) {
    i <  additionRepeatTimes ? emptyStr += addition + additionSeparator : emptyStr += addition
  }
  for(let i = 1; i <= repeatTimes; i++) {
    i < repeatTimes ? result += str + emptyStr + separator : result += str + emptyStr 
  }
  return result
};
  