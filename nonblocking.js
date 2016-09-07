// link to the filesystem library
var fs = require('fs');

var food = fs.readFile('food.txt', 'utf8', function(err, food) {
    console.log(food);
    console.log('DRINKS');
});
console.log('FOOD:');

var drinks = fs.readFile('drinks.txt','utf8', function(err, drinks){
  console.log(drinks);
});
