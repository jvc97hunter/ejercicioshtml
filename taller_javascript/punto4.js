function esta() {
    const num = document.getElementById("num").value;
    const digito = document.getElementById("digito").value;
    let array = num.toString().split('');
    let no = true;
    let c = 0;
    console.log(num, digito);

    while (c < array.length) {
        if (array[c] === digito){
            console.log("Está.");
            no = false;
            break;
        }
        c++;
    }
    if (no) {
        console.log("No está.");
    }
}