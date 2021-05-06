function mayor() {
    const num = document.getElementById("num").value;
    let array = num.toString().split('');
    c = 0;
    may = 0;

    while (c < array.length) {
        n = parseInt(array[c]);
        if (n > may) {
            may = n;
        }
        c++;
    }
    console.log(may);
}