/*  
    Criar 3 metodos que retornem um promise e executam simutaneamente processamento de dados paralelos utilizando com delay de 
    1 segundo cada execuçao 
    IMPORTANTE: não usar await 
    criar o metodo sum que soma os numeros do array de inteiros ex: [1, 2, 3, 4] = 10
    criar o metodo substraction que subtrai os numeros do array de inteiros onde caso resultado for menor que zero retorne zero ex: [5, 2, 1, 1] = 1 ou [5, 2, 2, 2] = 0,
    Criar o metodo multiplication que multiplica os numeros do array de inteiros ex: [1, 2, 3, 4] = 24
    Resultados deve ser capturado no metodo result e retornado o valor inteiro de cada metodo ao final somar os resultados e retornar
    Implementar metodos de calculo de forma asincrona, que retorna resultado final no metodo result;
*/
let sum = (array) => new Promise((resolve, rejects) => { setTimeout(() => {
        resolve(array.reduce((a, b) => a + b, 0));
    }, 1000);
}); 
let subtraction = (array) => new Promise((resolve, rejects) => { setTimeout(() => {
        let s = array.reduce((a, b) => a - b);
        var r = (0 <= s) ? s : 0;
        resolve(r);
    }, 1000);
}); 
let multiplication = (array) => new Promise((resolve, rejects) => { setTimeout(() => {
        resolve(array.reduce((a, b) => a * b));
    }, 1000);
}); 
let result = (array1 = [], array2 = [], array3 =[]) =>{
    //Implemente seu de código resultado aqui
    var soma = sum(array1);
    var sub = subtraction(array2);
    var mult = multiplication(array3);
    return Promise.all([soma, sub, mult]).then((r, err) => {
        let resultFinal = 0;
        if(!err)
        r.forEach(element => {
            resultFinal = resultFinal + element;
        });
        return resultFinal;
    });
}

module.exports = {
    result: result
}