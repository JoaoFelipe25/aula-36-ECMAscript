let garagem = [
    
    //0 posicao
    {
    //propriedades e valores
            cor:"azul",
            modelo:"fusca",
            ano: 1965,
    },
    //1 posicao
    {
            cor:"prata",
            modelo:"corcel",
            ano: 1985,
    },
    //2 posicao
    {
            cor:"marrom",
            modelo:"chevette",
            ano: 1986,
    }
    
];

//laço for-of para varrer o vetor buscando todos os seus objetos
for(let carro of garagem){
    console.log(carro.ano)
}

//buscando um objeto no vetor indicando o indice/posicao
//console.log(garagem[0].cor)