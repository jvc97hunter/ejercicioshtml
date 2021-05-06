function suma() {
    const num = document.getElementById("num").value;
    let array = num.toString().split('');
    let respuesta = 0;
    let c = 0;

    while (c < array.length) {
        temp = array[c];
        respuesta = respuesta + parseInt(temp);
        c++;
    }

    console.log(respuesta);
}