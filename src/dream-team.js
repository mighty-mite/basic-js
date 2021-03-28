const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if(!Array.isArray(members)) return false
  if(members.length == 0) return false

  let strOnly = members.filter(i => typeof i === 'string');
  let res = strOnly.map(i => i.trim().toUpperCase().slice(0,1)).sort().join('');
  return res
};
