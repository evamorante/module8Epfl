// exercice 20./part 1 module 8

for (var i = 1; i<4; i = i + 1){
    if (i == 1){
    console.log(i.toString() + " step");
    }
    else{
    console.log(i.toString() + " steps");
    }

}
console.log("Done !")

// also this way :

for (i = 1; i<4; i = i + 1){
    var step ="";
    if (i == 1){
      step = " step";
    }
    else{
      step = " steps";
    }
    console.log(i + step);

}
console.log("Done !")