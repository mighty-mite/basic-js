const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if(String(value)) {
      this.chain.push(`( ${value} )`);
      return this;
    }
    this.chain.push(`( )`);
    return this;
  },

  removeLink(position) {
    if(this.chain[position - 1]) {
      this.chain.splice(position - 1, 1);
      return this;
    } 
    this.chain = [];
    throw Error('Error!');
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finishedChain = this.chain.join('~~');
    this.chain = [];
    return finishedChain;
  }
};

module.exports = chainMaker;
