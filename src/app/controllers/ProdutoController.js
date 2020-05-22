import Categoria from '../models/Categoria'
import Produto from '../models/Produto'

class ProdutoController{

    async index(req, res){
        const produtos = await Produto.findAll({include:{ association: 'categoria'}})

        return res.json(produtos)
     }

    async show(req, res){
        const produto = await Produto.findByPk(req.params.id, {include:{ association: 'categoria'}})

        if(!produto){
            return res.status(400).json({ error: 'Produto não cadastrado'})
        }

        return res.json(produto)
    }

    async store(req, res){
        const {idCategoria, descricao} = req.body

        const categoria = await Categoria.findByPk(idCategoria)

        if(!categoria){
             return res.status(400).json({ error: 'A categoria inserida não está cadastrada!'})
         }

        const produto = await Produto.create({idCategoria, descricao})


        return res.json(produto)
    }
     
     async update(req, res){
        const idProduto = req.params.id
        const {idCategoria, descricao} = req.body
        
        const produto = await Produto.findByPk(idProduto)
        const categoria = await Categoria.findByPk(idCategoria)

        
        if(!produto){
             return res.status(400).json({ error: 'Produto não encontrado'})
        }
        if(!categoria){
            return res.status(400).json({ error: 'A categoria inserida não está cadastrada'})
        }

        produto.idCategoria = idCategoria
        produto.descricao = descricao

        await produto.save()

        return res.json(produto)
     }

     async delete(req, res){

        const produto = await Produto.findByPk(req.params.id)

        if(!produto){
            return res.status(400).json({ error: 'Produto não encontrado'})
        }

        await produto.destroy()
        return res.json()

     }

}

export default new ProdutoController()