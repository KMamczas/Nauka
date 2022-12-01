const tab = ["Marcin", "Ania", "Agnieszka"];

console.log( tab.length ); //3
console.log( tab[ tab.length-1 ] ); //Agnieszka

for (let i=0; i<tab.length; i++) {
    console.log(tab[i]);
}



const tab1 = ["ala", "bala"]
const ob = { name : "Piotr" }

console.log(Array.isArray(tab1)); //true
console.log(Array.isArray(ob)); //false

console.log(typeof tab); //"object";
console.log(typeof ob); //"object";



const ourTable = ["Marcin", "Ania", "Agnieszka"];

console.log(ourTable.join()); //Marcin,Ania,Agnieszka

console.log(ourTable.join(" - ")); //Marcin - Ania - Agnieszka

console.log(ourTable.join(" <--> ")); //Marcin <--> Ania <--> Agnieszka

const cars = ["Mercedes", "Audi", "BMW"];
console.log(cars.join("").length); //15

const txt = "kartofel";
const tab3 = [...txt];
console.log(tab3); //["k", "a", "r", "t", "o", "f", "e", "l"]

const txt4 = "Ala ma kota";
const tab2 = txt4.split(" ");
console.log(tab2); //["Ala", "ma", "kota"];

const txt5 = "Ala ma kota";
const tab4 = txt5.split("");
console.log(tab4); 