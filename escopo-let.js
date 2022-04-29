 //declaracao de variavel com let - nao pode ser redeclarada no mesmo escopo
 let numero = 10;

 console.log(numero);

 console.log(typeof(numero))

 function imprimedez(){

    //varivel declarada dentro do escopo de uma funcao - esta varivel existte apenas dentro deste bloco
     let numero = "dez"

     console.log(numero);

     // imprimi o tipo da variavel numero
     console.log(typeof(numero))
 }

 // chamada da funçao imprimedez()
 imprimedez()