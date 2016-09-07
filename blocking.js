// link to node's filesystem library
var fs = require('fs');

// open & read food list
var food = fs.readFileSync('food.txt','utf8');

// print food list
console.log('FOOD:')
console.log(food);

var drinks = fs.readFileSync('drinks.txt','utf8');

console.log('DRINKS:');
console.log(drinks);
