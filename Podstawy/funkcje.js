function nazwaFunkcji(nr) {
    const result = nr * nr; //możemy też po prostu zwrócić nr * nr
    return result;
}

//Po stworzeniu funkcji wystarczy ją wywołać poprzez podanie jej nazwę:
nazwaFunkcji(2); //4
nazwaFunkcji(3); //9
nazwaFunkcji(5); //25


function sum(a, b) {
    return a + b;
}

console.log( sum(2, 3) ); //5
console.log( sum(4, 3) ); //7


function lineText(name, pet) {
    console.log(name + " ma " + pet);
}

lineText("Ola", "kota"); //Ola ma kota
lineText("Ala", "psa"); //Ala ma psa


//undefined dla braku argumentów

function writeText(name, age) {
    console.log(`${name} ma kota, który ma ${age} lat`);
}

writeText("Ala", 5); //"Ala ma kota, który ma 5 lat"
writeText("Marysia"); //"Marysia ma kota, który ma undefined lat"
writeText(); //"undefined ma kota, który ma undefined lat"



function print(name = "Michał", status = "najlepszy") {
    console.log(name + " jest " + status);
}

print(); //"Michał jest najlepszy"
print("Karol"); //"Karol jest najlepszy"
print("Paweł", "wysoki"); //"Paweł jest wysoki"
print(undefined, "wysoki"); //"Michał jest wysoki" - undefined jest traktowane jak niepodanie wartości



function superSum(...r) {//znowu te zajebiste kropki które robią rzeczy
    console.log(r); //[1, 2, 3, 4]
}

superSum(1, 2, 3, 4);


//Używanie funkcji gdzie popadnie


function randomBetween(min = 0, max = 10) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


//wstawiam wynik do body
document.body.innerText = randomBetween(1, 100);

//wykorzystuję funkcję do powtarzania tekstu
console.log( "kot".repeat(randomBetween(1, 6)) );

//dodaję 2 losowe liczby
console.log( randomBetween(1, 6) + randomBetween(1, 10) );

//generuję tablicę z liczbami 1-100
const tab = [];
for (let i=0; i<10; i++) {
    tab.push(randomBetween(1, 100));
}

if (randomBetween(1, 10)) { //w miejscu gdzie używamy funkcji pojawia się wynik
    console.log("kupa")
}

//Funkcja strzałkowa

const myFn = function() {
}

[3,1,2].sort(function(a, b) {
    return a-b
})

//to samo co powyżej mogę zapisać za pomocą skróconego zapisu:

const myFyn = () => {
}

[3,1,2].sort((a, b) => {
    return a-b
})

const getObj = function(name) {
    return { team : name, score : 0 }
}

// const getObj1 = name => { team : name, score : 0 } //błąd

const getObj2 = name => ({ team : name, score : 0 }) //ok