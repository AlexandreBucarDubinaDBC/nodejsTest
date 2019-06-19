/*  
    Criar 3 metodos que retornem um promise e executam simutaneamente processamento de dados paralelos utilizando com delay de 
    1 segundo cada execuçao 
    IMPORTANTE: não usar await 
    a soma do dados do primeiro array de inteiros ex: [1, 2, 3, 4] = 10
    a subtração do terceiro array onde caso for menor que zero retorne zero ex: [5, 2, 1, 1] = 1 ou [5, 2, 2, 2] = 0,
    a multiplicação do segundo array de inteiros ex: [1, 2, 3, 4] = 24
    Criar um metodo que multiplica os resultados por um numero inteiro comum.
    Resultado deve ser capturado no metodo result e retornado o valor inteiro e ser somado o valor final
    Implementar metodos de calculo de forma asincrona, que retorna resultado final no metodo result;
*/
let result = (array1 = [], array2 = [], array3 =[]) =>{
    return Promise.all([]);
}

module.exports = {
    result: result
}