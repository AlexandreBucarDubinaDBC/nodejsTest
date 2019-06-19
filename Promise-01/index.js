/*  
    Criar 3 metodos que retornem um promise e executam simutaneamente processamento de dados paralelos utilizando com delay de 
    1 segundo cada execuçao 
    IMPORTANTE: não usar await 
    criar o metodo sum que soma os numeros do array de inteiros ex: [1, 2, 3, 4] = 10
    criar o metodo substration que subtrai os numeros do array de inteiros onde caso resultado for menor que zero retorne zero ex: [5, 2, 1, 1] = 1 ou [5, 2, 2, 2] = 0,
    Criar o metodo multiplication que multiplica os numeros do array de inteiros ex: [1, 2, 3, 4] = 24
    Resultados deve ser capturado no metodo result e retornado o valor inteiro de cada metodo ao final somar os resultados e retornar
    Implementar metodos de calculo de forma asincrona, que retorna resultado final no metodo result;
*/
let result = (array1 = [], array2 = [], array3 =[]) =>{
    return Promise.all([]);
}

module.exports = {
    result: result
}