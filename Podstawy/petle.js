let str = "";

for (let i=0; i<4; i++) {
    for (let j=0; j<6; j++) {
        if (i===0 || i===3 || j===0 || j===5) {
            str += "*";
        } else {
            str += "-";
        }
    }
    str += "\n";
}

console.log(str);

