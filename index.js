const Block = require('./block');

// const block = new Block('ts123', 'LHabc0123', 'HASH123', 'some data');

// console.log(block.toString());
// console.log(Block.genesis().toString());

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());
const barBlock = Block.mineBlock(fooBlock, 'foo');
console.log(barBlock.toString());
