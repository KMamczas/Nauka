const tab = ["Ala", "Ola", "Ela"];

//pobieram wartości klasycznie
const name1 = tab[0];
const name2 = tab[1];

//za pomocą destrukturyzacji
const [name12, name22] = tab;


const ob = {
    name : "Rudzik",
    pet : "kot"
}

//klasycznie
const name3 = ob.name;
const pet = ob["pet"];

//za pomocą destrukturyzacji
const {name4, pet1} = ob;


//Wartość bazowa przy braku danych


{
    const tab = ["Ala", "Ola"];

const [ name1 = "brak", name2 = "brak", name3 = "brak" ] = tab;

console.log(name1, name2, name3); //"Ala", "Ola", "brak"
}


//destrukturyzacja obiektów!
{
    const obj = {
        first_name : "Karol",
        last_name : "Kowalski"
    }
    
    const {
        first_name = "brak",
        last_name = "brak",
        favoritePet = "kot"
    } = obj;
    
    console.log(first_name); //Karol
    console.log(last_name); //Kowalski
    console.log(favoritePet); //"kot"
}

//Destrukturyzacja obiektów z przypisaniem nowych nazw zmiennych!
{
    const obj = {
        first_name : "Karol",
        last_name : "Kowalski",
    }
    
    const {
        first_name : name = "brak",
        last_name : surname = "brak",
        favoritePet : pet  = "brak"
    } = obj;
    
    console.log(name); //Karol
    console.log(surname); //Kowalski
    console.log(pet); //"brak"
}



//Przekazwyanie danych do funkcji - bardziej uniwersalne
{
function showUser({name, surname}) {
    console.log(name);
    console.log(surname)
}

const user = {
    name : "Marcin",
    surname : "Nowak"
}
showUser(user);
}

{
    const buttons = document.querySelectorAll("button");

buttons.forEach(({innerText : text, id}) => {
    console.log(`Tekst elementu to ${text} a jego id to ${id}`);
});
}


{
    //do poniższej funkcji ktoś mi przekaże obiekt, a ja go od razu rozbiję na odpowiednie zmienne
function print({name, speed, color, food}) {
    console.log(`
        Nazwa : ${name}
        Szybkość : ${speed}
        Kolor : ${color}
        Ulubione jedzenie : ${food}
    `);
}

print({
    name : "Szamson",
    speed : 10000,
    food : "Mięso",
    color : "brown",
})

//lub jeżeli mam już wcześniej zmienne
//mogę stworzyć obiekt z takimi kluczami:

const name = "Szamson";
const speed = 10000;
const color = "brown";
const food = "mięso";
const type = "dog";

//kolejność nie ma znaczenia
print({name, food, speed, type, color}); //dodatkowy klucz type nie ma znaczenia

//bo to jest to samo co:
print({
    name : name,
    food : food,
    speed : speed,
    type : type,
    color : color
});
}


//REST - te magiczne trzy kropki
{
    const tab = [1, 2, 3, 4, 5];

const [first, ...other] = tab;

console.log(first, other); //1, [2, 3, 4, 5]
}

{
    const carData = {
        brand : "BMW",
        color: "red",
        maxSpeed : 260,
        owner: "Jan Nowak",
        ownerAge : 30
    }
    
    const {owner, ownerAge, ...car} = carData;
    
    console.log(car); //car bez właściwości owner i ownerAge
}

{
    const pet = {
        name : "Szamson",
        speed : 1000,
    }
    
    const pet2 = {...pet}
    pet2.height = 40;
    
    console.log(pet); //{name : "Szamson", speed : 1000}
    console.log(pet2); //{name : "Szamson", speed : 1000, height: 40}
}



//Złożona destrukturyzacja

{
    const myObj = {
        first_name : "Karol",
        last_name : "Nowak",
        role : "driver",
    
        pets: ["pies", "kot"],
    
        car : {
            name : "Honda",
            year: 2002,
            type : "hatchback"
        }
    }
    
    const {
        first_name: name,
        last_name : surname,
        role,
    
        pets : [
            pet1,
            pet2
        ],
    
        car : {
            name : carName,
            year : carYear,
            type : carType
        }
    } = myObj || {}
}

