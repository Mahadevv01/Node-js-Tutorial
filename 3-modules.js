// const amount = 12
// if(amount<10){
//   console.log('small number')
// }
// else{
//   console.log('large number')
// }
// console.log(`Hey it is my first node app!!!`)

//GLOBALS--NO WINDOW !!!

//__dirname - path of current directory
//__fiename- return file name
// require -  function to use module(Commonjs)
//module-info about current module(file)
//process-info about env where program is being executed


// console.log(__dirname)
// setInterval(() =>{
// console.log("Hello world")
// },1000)
//Module 
//Modules-encapsulated code(only share minimum)
//common js -every file is module(by default)





const names = require('./4-names')
const sayhi =  require('./5-utlis')
const data=require('./5-alternative flavor')
require('./6-mind grenade')
//console.log(data)
// console.log(names)
// //console.log(sayhi)
// sayhi(names.john)
// sayhi(names.peter)
// sayhi('susan')
//when node export a module it wrap up it in a function and then import it
 