var fruits = ["oranges", "bananas", "strawberry", "apple"];
console.log(fruits);
console.log(fruits[2]); //afficher nomVariable[positionNr]

//afficher
var message = "The second value contains this fruit : "+ fruits[1];
console.log(message);
//ajouter .push
fruits.push("tomatoes");
console.log(fruits);
//modifier//remplacer nomVariable[positionNr] = "nouveau nom";
fruits[1] = "kiwis";  
var message = "Now the second value changes and contains this fruit : " + fruits[1];
console.log(message);
console.log(fruits[1]);
//enlever .splice(positionNr, nombreDelementsàenlever)
console.log(fruits);
fruits.splice(2,1);
console.log(fruits);
fruits.splice(2,2);
console.log(fruits);
//trier .sort
fruits.sort();
console.log(fruits);
//inverser .revers
fruits.reverse();
console.log(fruits); 
//longueur (nombre d'entrées de data) .length
var fruitsCount = fruits.length;
console.log(fruitsCount);

