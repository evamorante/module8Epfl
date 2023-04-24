// exercice 10. module 8
/** 
    Create a JavaScript array to store your 3 favorite dish.
    List each of them in the console on their own separate line.
    Display the count of your favorite dishes.
    Add a 4th dish to the array.
    Display the count once more within a sentence such as "I have x favorite dishes."
    Remove the 2nd one!
    Sort them in alphabetical order.
    Display them once more but this time as an array in the console.
    Display the count again!
*/

var dishes = ["fondue", "raclette", "couscous"];
console.log(dishes);

//var fruits = ["oranges", "apples", "bananas"];
//console.log(fruits);

console.log(dishes[0]);
console.log(dishes[1]);
console.log(dishes[2]);

//var dishesLength = dishes.length
//console.log(dishesLength);
//console.log("I have "+dishesLength+" favorite dishes");

console.log(dishes.length);
console.log("I have "+dishes.length+" favorite amazing dishes")

dishes.splice(1,1);
console.log(dishes);

dishes.sort();
console.log(dishes);

console.log(dishes);

console.log(dishes.length);

