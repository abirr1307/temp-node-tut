const {readFileSync, writeFileSync} = require('fs')
/* Above statement is destructure approach. Can also be written as belo
const fs = require('fs')
fs.readFileSync
fs.writeFileSync */
console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
//console.log(first,second)
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag : 'a'}
    )
console.log('done with this task!')
console.log('starting the next one');
