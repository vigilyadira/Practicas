function calcular() {
    let potencia = document.getElementById("potencia").value;
    let resultadoSuma = 0;
    let resultadoFraccion = 0;

    for (let i = 1; i <= potencia; i++) {
        resultadoSuma += i;
        resultadoFraccion += i / Math.pow(2, i);
    }

    document.getElementById("resultadoSuma").innerHTML = resultadoSuma;
    document.getElementById("resultadoFraccion").innerHTML = resultadoFraccion;
}