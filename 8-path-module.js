//Path Module
const path=require('path')
console.log(path.sep)
//path  returns  a   platform   specific   separator 

const filepath=path.join('/content','subfolder','test.txt')
console.log(filepath)

//to find the basename 

const base=path.basename(filepath)
console.log(base)

//path.resolve accepts the sequence of path and resolve it into an absolute path

const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)//it is logically different for different local machines
