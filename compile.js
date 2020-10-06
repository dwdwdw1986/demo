const path = require ('path');
const fs = require('fs');
const solc = require('solc');
const  _dirname = 'C:\Users\Administrator\Desktop\eth_learn\project\demo'
// const inboxPath = path.resolve(_dirname, 'contracts',  'inbox.sol');

const source = fs.readFileSync('C:/Users/Administrator/Desktop/eth_learn/project/demo/contracts/inbox.sol', 'utf8');

console.log(solc.compile(source,1))
