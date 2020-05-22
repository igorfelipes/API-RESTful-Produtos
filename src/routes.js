import {Router} from 'express'

import CategoriaController from './app/controllers/CategoriaController'
import ProdutoController from './app/controllers/ProdutoController'
import Produto from './app/models/Produto'



var routes = new Router()

//Rotas para Categorias
routes.get('/listar-categorias', CategoriaController.index)
routes.post('/criar-categoria', CategoriaController.store)


//Rotas para Produtos
routes.get('/listar-produtos', ProdutoController.index)
routes.get('/listar-produto/:id', ProdutoController.show)
routes.post('/cadastrar-produto', ProdutoController.store )
routes.put('/atualizar-produto/:id', ProdutoController.update)
routes.delete('/deletar-produto/:id', ProdutoController.delete)



// routes.get('/listar-produtos/id', (req, res) =>{
//     res.send('Produto Id')
// })

// routes.put('/atualizar-produto/:id', ProdutoController.atualizarProduto)

// routes.delete('/deletar-produto', (req, res) =>{
//     res.send('Deletar - alterar para method delete dps')
// })

export default routes;

