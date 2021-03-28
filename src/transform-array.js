const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if ( !Array.isArray(arr) ) throw new Error('Not array');
  if (arr.length === 0) return [];
  if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev')) {
    return arr;
  }
  let res = [];

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] != '--double-next' && arr[i] != '--double-prev' && arr[i] != '--discard-prev' && arr[i] != '--discard-next') {
      res.push(arr[i])
    }

    if(arr[i] === '--double-next') {
      res.push(arr[i + 1])
    }

    if(arr[i] === '--double-prev') {
      res.push(arr[i - 1])
    }

    if(arr[i] === '--discard-prev') {
      res.pop(arr[i - 1])
    }

    if(arr[i] === '--discard-next') {
      if(arr[i + 2] === '--double-prev') {
        i = i + 2
      } else {
        res.push('wtf?');
        i++
      }
    }
  }
  return res.filter(i =>  {
    return i !== undefined && i !== 'wtf?'})
};

