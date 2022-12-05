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
const name = "Szama";
const speed = 1000;

//zamiast
const ob = {
    name: name,
    speed: speed
}
tab.push(ob);

//mogę
tab.push({
    name: name,
    speed: speed
});

//lub jeszcze lepiej
tab.push({name, speed});

