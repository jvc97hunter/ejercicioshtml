function revertir() {
    const num = document.getElementById("num").value;
    let array = num.toString().split('');
    let respuesta = 0;
    let c = 1;

    while (c <= array.length) {
        temp = array[array.length - c];
        respuesta = respuesta * 10 + parseInt(temp);
        c++;
    }

    console.log(respuesta);
}
