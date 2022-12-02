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




const tab7 = ["Marcin", "Ania", "Agnieszka"];

for (const el of tab7) { //el to nazwa zmiennej wymyślona przez nas
    console.log(el); //"Marcin", "Ania"...
}

for (const xxx of tab7) { //xxx to nazwa zmiennej wymyślona przez nas
    console.log(xxx.toUpperCase()); //"MARCIN"...
}

for (let lorem of tab7) { //niektórzy używają tutaj let zamiast const
    console.log(lorem);
}





const tabw = [
    ["a1", "a2", "a3", "a4", "a5", "a6"],
    ["b1", "b2", "b3", "b4", "b5", "b6"],
    ["c1", "c2", "c3", "c4", "c5", "c6"],
]

console.log(tabw[0]); //["a1", "a2", "a3", "a4", "a5", "a6"]
console.log(tabw[0].length); //6
console.log(tabw[0][1]); //"a2"
console.log(tabw[2][3]); //"c4"


const level = [
    [1, 1, 0, 0, 2, 2, 0, 0, 1, 1],
    [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
    [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
    [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
    [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
    [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
    [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
    [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
    [1, 1, 0, 0, 2, 2, 0, 0, 1, 1]
];


let str = "";

for (const subTab of level) {
    //pod subTab mamy każdą kolejną podtablicę

    for (const el of subTab) {
        switch (el) {
            case 0 : str += "🟩"; break;
            case 1 : str += "🟫"; break;
            case 2 : str += "⬛"; break;
        }
    }

    str += "\n";
}

console.log(str);