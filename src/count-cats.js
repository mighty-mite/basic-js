const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let countEars = [];
  for(let el of matrix) {
    let ears = el.filter((item) => {
      return item == "^^";
    });
    countEars =  countEars.concat(ears)
  }
  return countEars.length
};
