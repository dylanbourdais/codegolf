var names = ["Hole-in-one!", "Eagle", "Birdie", "Par",
"Bogey", "Double Bogey", "Go Home!", "Oups probleme avec les valeurs"];
function golfScore(par, strokes){
//compléter la fonction
if (strokes === 1){  // si la variable strokes est diferent a 1
    return names[0]; // affiche Hole-in-one!
}
else if (strokes <= par -2){ // si la variable strokes infierieur est egal et la variable par inferieur moins 2
    return names[1]; //affiche Eagle
}
else if (strokes <= par -1){ // si la variable strokes infierieur est egal et la variable par inferieur moins 1
    return names[2]; //affiche Birdie
}
else if(strokes === par){ //si la variable par est diferent a stricte la variable par
    return names[3];// affiche Par
}
else if(strokes === par + 1){ //si la variable strokes est diferent a la variable par plus 1
    return names[4]; //affiche Bogey
}
else if (strokes === par + 2){ //si la variable strokes est diferent a la variable par plus 2
    return names[5]; //affiche Double Bogey
}
else if (strokes >= par + 3){ //si la variable strokes est superieur egalalé la variable par plus 3
    return names[6]; //affiche Go Home!
}else
{
  return[7];
}
}

//choissisez une valeurs
console.log(golfScore (5,4));
console.log(golfScore (4,1));
console.log(golfScore (4,2));
console.log(golfScore (5,2));
console.log(golfScore (4,3));
console.log(golfScore (4,4));
console.log(golfScore (1,1));
console.log(golfScore (5,5));
console.log(golfScore (4,5));
console.log(golfScore (4,6));
console.log(golfScore (4,7));
console.log(golfScore (5,9));
    
    
    
    
    
    
    
  
    
    
    
