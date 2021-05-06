function primo() {
    const num = parseInt(document.getElementById("num").value);
    console.log(num);
    c = 2;
    es = true;

    while (c < num) {
        if (num%c === 0) {
            console.log("No es primo");
            es = false;
            break;
        }
        c++;
    }
    if (es) {
        console.log("Es primo");
    }
}