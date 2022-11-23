const nr = Math.random() * 10;

if (nr < 3) {
    console.log("Liczba jest mniejsza od 3");
} else if (nr <= 6) {
    console.log("Liczba jest mniejsza lub równa 6");
} else {
    console.log("Liczba jest większa od 6");
}