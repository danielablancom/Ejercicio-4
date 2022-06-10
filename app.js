//***** Números del 1 al 100 ******//

function conteoNumeros(numero) {

    if (numero === 101) {
        return;
    }
    console.log(numero);
    return conteoNumeros(numero + 1);
};
conteoNumeros(1);


//***** Números del 1000 al 500  ******//

function conteoNumerosAtras(numb) {

    if (numb === 498) {
        return;
    }
    console.log(numb);
    return conteoNumerosAtras(numb - 2);
};
conteoNumerosAtras(1000);


//***** Promedio de notas ******//

function suma(notas) {
    let count = 0;
    for (let i = 0; i < notas.length; i++) {
        count += notas[i];
    }
    return count
}

const notas = [6, 8, 9, 2, 5, 10];
let sumaTotalNotas = suma(notas);
suma(notas);

function promedio(sumaNotas) {
    let promedioTotalNotas = sumaNotas / notas.length;

    return promedioTotalNotas;

}
console.log("Promedio de notas", promedio(sumaTotalNotas));
// console.log("promedio", promedio(suma(notas)))
