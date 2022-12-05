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