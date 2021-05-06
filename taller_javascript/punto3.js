function capicua() {
    const num = document.getElementById("num").value;
    const reverso = revertir(num);
    console.log(num, reverso);
    if (parseInt(num) === reverso) {
        console.log("Es capicúa.");
    } else {
        console.log("No es capicúa");
    }
}

function revertir(num) {
    let array = num.toString().split('');
    let respuesta = 0;
    let c = 1;

    while (c <= array.length) {
        temp = array[array.length - c];
        respuesta = respuesta * 10 + parseInt(temp);
        c++;
    }

    return respuesta;
}
