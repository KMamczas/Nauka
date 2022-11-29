console.log("Hello Word!")

if (confirm("Czy jesteś pewien, że chcesz kontynuować?")) {
    alert("No to kontynuuj...");
} else {
    alert("Przykro mi, że nie chcesz kontynuować...");
}

const name = prompt("Podaj swoje imię:");

if (name) {
    alert("Witaj " + name);
} else {
    alert("Anulowałeś akcję, a okienko zwróciło " + name);
}

const animal = prompt("Wpisz jakiego masz zwierzaka");

switch (animal) {
    case "pies":
        console.log("Psy są najlepsze");
        break;
    case "kot":
        console.log("Koty są lepsze od psów");
        break;
    case "chomik":
        console.log("Każdy chomik jest super");
        break;
    default:
        console.log("Jakiś dziwny ten zwierzak");
}

const nr = 5;

switch (true) {
    case (nr <= 5):
        console.log("Mało");
    break;
    case (nr > 5 && nr < 10):
        console.log("Średnio");
    break;
    case (nr >= 10) :
        console.log("Dużo");
    break;
}