//asynchronously non-blocking vs synchronously blocking 
//differents way we can access the methods 
const {readFileSync,writeFileSync }= require('fs')
console.log('start')
const first=readFileSync('./content/subfolder/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

// console.log( first,second)

writeFileSync(
'./content/subfolder/result-sync.txt',`Here is the result :${first},${second}`,{flag:'a'}

)
console.log('Done with the task')
console.log('start with next task')