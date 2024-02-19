//npm-global command
//npm --version

//local dependency -use it only in this particular object 
//npm i <packagename>

//global dependency-use it in any project

//npm install -g <packagename>
//sudo npm install -g <packagename> (mac)


//package.json--manifest file(stores  important info about project/package)
//manual approach (create package.json in the root,create properties etc...)
//npm init (step by step,pressm enter to skip)
//npm int -y (everything default)


const _ = require('lodash');

// Your existing code
const items = [[1, 2, [3, 4]], [5, 6], [7, 8, [9, 10]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
