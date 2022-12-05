//zamiast
const dog = {
    name: "Szama",
    speed: 1000,
    showText: function() {
        return "Lubię walczyć ze złem";
    }
}

//możemy
const dog1 = {
    name: "Szama",
    speed: 1000,
    showText() {
        return "Lubię walczyć ze złem";
    }
}


const tab = [];
const name1 = "Szama";
const speed = 1000;

//zamiast
const ob = {
    name1: name1,
    speed: speed
}
tab.push(ob);

//mogę
tab.push({
    name1: name1,
    speed: speed
});

//lub jeszcze lepiej
tab.push({name1, speed});



const dog2 = {
    name: "Szama",
    speed: 1000,
    showText() {
        return "Lubię walczyć ze złem";
    }
}

//poprzez kropkę po której podajemy nazwę klucza
dog2.name; //"Szama"
dog2.speed; //1000
dog2.showText(); //"Lubię walczyć ze złem"

//lub używając kwadratowych nawiasów
dog2["name"]; //"Szama"
dog2["speed"]; //1000
dog2["showText"](); //"Lubię walczyć ze złem"





const person = {
    name: "Marcin",

    pet: {
        name: "Szama",
        color: "brown",
        speed: 1000,

        collar: {
            color: "red",
            length: "25cm"
        },

        favoriteFood: ["mięso", "mięso", "mięso"]
    }
}

person.name //"Marcin"
person.pet.name //"Szama"
person.pet.collar.color //"red"
person.pet.favoriteFood[1] //"mięso"


//Dodawanie własciwości obiektu

const cat = {
    name: "Szama",
    speed: 1000,
    showText() {
        return "Lubię walczyć ze złem";
    }
}

cat.type = "kot";
cat.legs = 4;
cat.eat = function() {
    return "Jem dobre rzeczy";
}

console.log(cat.eat());
console.log(cat.showText());

//usuwanie właściwości obiektu

const car = {
    brand: "Mercedes",
    color: "czerwony",
    showText() {
        console.log(`${this.brand} koloru ${this.color}`);
    }
}

console.log(car.color); //czerwony
delete car.color;
console.log(car.color); //undefined

const car1 = {
    brand: "Mercedes",
    color: "czerwony",
    showText() { console.log("kupa") }
}

for (const key in car1) {
    console.log(key); //brand, color, showText
}

//this...

const car2 = {
    name: "Mercedes",
    color: "czerwony",

    drive() {
        console.log(this); //car
        console.log(`${this.name} sobie jedzie`);
    },

    showText() {
        console.log(`${this.name} koloru ${this.color}`);
    }
}

car2.drive(); //"Mercedes sobie jedzie"
car2.showText(); //"Mercedes koloru czerwony"



