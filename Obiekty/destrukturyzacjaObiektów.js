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