const nr = 10;
const txt = "przykładowy tekst";
const arr = [1, 2, 3];
const ob = {};
const n = null;
//zmiennej zzz specjalnie nie zadeklarowałem

console.log( typeof nr ); //"number"
console.log( typeof txt ); //"string"
console.log( typeof arr ); //"object" hmm?
console.log( typeof ob ); //"object"
console.log( typeof n ); //"object" hmm?
console.log( typeof zzz ); //"undefined"

//sprawdzamy typy zmiennych
if (typeof nr === "number") {console.log("kupa")}
if (typeof txt === "string") {console.log("kupa")}
if (Array.isArray(arr)) {console.log("kupa")}
if (typeof ob === "object") {console.log("kupa")}
if (n === null) {console.log("kupa")}
if (typeof zzz === "undefined") {console.log("kupa")}