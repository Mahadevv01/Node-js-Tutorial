//asynchronously non-blocking vs synchronously blocking 
//differents way we can access the methods 
// when the functionality we aredoing is done then we callback ,there is the use of callback function in Js..
const {readFile,writeFile }= require('fs')
console.log('start')
readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    //we first check if error is present or not in the given method
    if(err){
    console.log(err)
    return;
    }
    const first=result
  readFile('./content/second.txt','utf8',(err,result)=> {
    if(err){
      console.log(err)
      return
    }
    const second=result
 
      console.log(result)
      writeFile('./content/subfolder/result-sync.txt',`Here is the result: ${first} ,  ${second}`,(err,result)=> {
        if(err){
          console.log(err)
          return
        }
        console.log('done with this task')
      }
      )
  })
})
console.log('starting with next file')
