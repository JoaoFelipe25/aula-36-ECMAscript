let soma = somatorio(1,2)

//declaracao de funcao convencional
function somatorio(n1,n2){
    return n1 + n2;
}

console.log(soma)

//declaracao de funcao com arrow functions omitindo a palavra function e a palavra return
let soma2 = (n1,n2) => n1 + n2;

console.log(soma2(1,2))