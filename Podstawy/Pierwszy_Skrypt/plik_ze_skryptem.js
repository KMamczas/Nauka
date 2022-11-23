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