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

const txt1A = "Ala";
const txt1B = "Ala";
console.log(txt1A === txt1B); //true

const txt2A = new String("Ala");
const txt2B = new String("Ala");
console.log(txt2A === txt2B); //false

//number to string

const nr2 = 102;

console.log("" + nr2); //"102"
console.log(nr2.toString()); //"102"
console.log(String(nr2)); //"102"

//string to number

console.log( Number("100")); //100
console.log( Number("50.5")); //50.5
console.log( Number("50px")); //NaN

console.log( parseInt("24px", 10)); //24
console.log( parseInt("26.5", 10)); //26
console.log( parseInt("100kot", 10)); //100
console.log( parseInt("Ala102", 10)); //NaN - zaczyna się od liter
console.log( parseInt("Hello", 10)); //NaN

console.log( "20px" + "20px"); //20px20px
console.log( parseInt("20px", 10) + parseInt("20px", 10) + "px"); //40px

Boolean(102); //true
Boolean("kot"); //true

Boolean(false); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(0); //false
Boolean(NaN); //false
Boolean(""); //false
Boolean(document.all); //false

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

console.log( randomColor() );
console.log( randomColor() );
console.log( randomColor() );