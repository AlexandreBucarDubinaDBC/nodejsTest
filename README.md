# nodejsTest
Teste em nodejs DBCcompany

É necessário node >8.0, pode usar qualquer ide ou editor de preferência 
Baixar e executar a instalação do projeto
comando npm i

1 PROMISES  File: Promise-TST/index.js

    Criar 3 metodos que retornem um promise e executam simutaneamente processamento 
    de dados paralelos utilizando com delay de 1 segundo cada execuçao 
    criar o metodo sum que soma os numeros do array de inteiros ex: [1, 2, 3, 4] = 10
    criar o metodo substration que subtrai os numeros do array de inteiros onde caso 
    resultado for menor que zero retorne zero ex: [5, 2, 1, 1] = 1 ou [5, 2, 2, 2] = 0,
    Criar o metodo multiplication que multiplica os numeros do array de inteiros ex: [1, 2, 3, 4] = 24
    Resultados deve ser capturado no metodo result e retornado o valor inteiro de cada metodo ao 
    final somar os resultados e retornar.
    Implementar metodos de calculo de forma asincrona, que retorna resultado final no metodo result;

2 Express / HTTP Request File: Express-TST/index.js

    Criar um servidor usando express na porta 3000
    Criar 2 rotas, criar metodo de consumo 
    1 - Rota 1 /category deve retornar um json das categorias listadas abaixo (categories), a mesma 
    deve retornar no seguinte formato
    
    Category = {
        id:Int, 
        name:String, 
        childrens:ArrayCategories
    };
    ArrayCategories = Category[];
    
    o atributo childrens deve ser as categorias que o parent id é igual ao id da
    categorio, as mesmas não devem se repetir.
    
    2 - Rota 2 /category/find/:id deve filtrar pela categoria com o id correspondente.
    o id deve ser validade como um inteiro valido por uma função ou rota Middleware, 
    caso falhe na validação retornar msg 'parâmetro inválido'.
    Na busca pela categoria caso não encontre retornar a msg 'registro não encontrado'. 

    3 - criar metodos de consumo onde um realiza uma requisicao para a rota 2 passando 
    por parametro um id e retornando o objeto categoria e o outro nao passa parametro e 
    retorna todas categorias.   

Ao final do desenvolvimento rodar da pasta raiz node unit-test.js para validar os resultados.    