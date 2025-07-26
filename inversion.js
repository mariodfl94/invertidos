const lista=[1,2,3,4,5,6,7]

//forma tradicional
const invertir = (lista) => {
    let listaInvertida = [];
    for (let i = lista.length - 1; i >= 0; i--) {
    listaInvertida.push(lista[i]);
    }
    return listaInvertida;
}
console.log(invertir(lista));

//con array.reverse()
const listainver=lista.reverse();
console.log(listainver);