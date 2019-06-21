/*
    Criar um servidor usando express na porta 3000
    Criar 2 rotas, criar metodo de consumo 
    1 - Rota 1 /category deve retornar um json das categorias listadas abaixo (categories), a mesma deve retornar no seguinte formato
    
    Category = {
        id:Int, 
        name:String, 
        childrens:ArrayCategories
    };
    ArrayCategories = Category[];
    
    o atributo childrens deve ser as categorias que o parent id é igual ao id da categorio,
    as mesmas não devem se repetir.
    
    2 - Rota 2 /category/find/:id deve filtrar pela categoria com o id correspondente.
    o id deve ser validade como um inteiro valido por uma função ou rota Middleware, caso falhe na validação retornar msg 'parâmetro inválido'.
    Na busca pela categoria caso não encontre retornar a msg 'registro não encontrado'. 

    3 - criar metodos de consumo onde um realiza uma requisicao para a rota 2 passando por parametro um id e retornando o objeto categoria
    e o outro nao passa parametro e retorna todas categorias.
*/

const categories = [ 
    {id:1, name:'Móveis', parent:null},
    {id:2, name:'Sofas', parent:1},
    {id:3, name:'Limpeza', parent:null},
    {id:4, name:'Mesa', parent:1},
    {id:5, name:'Cama', parent:1},
    {id:6, name:'Detergente', parent:3},
    {id:7, name:'Escovão', parent:3},
    {id:8, name:'Video Games', parent:null},
    {id:9, name:'Console', parent:8},
    {id:10, name:'Jogos', parent:8},
    {id:11, name:'Ação', parent:10}
];
let resultAll = () => new Promise((resolve, reject) => {  resolve(null); })
let result = (id) => new Promise((resolve, reject) => {  resolve(null); })
module.exports = {
    result: result,
    resultAll: resultAll
}