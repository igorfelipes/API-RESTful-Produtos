import Categoria from '../models/Categoria'

class CategoriaController{
    async index(req, res){
        const  categorias = await Categoria.findAll({include:{ association: 'produtos'}})

        return res.json(categorias)
     }

    async store(req, res){
        const  categoria = await Categoria.create(req.body)

        return res.json(categoria)
     } 
     

}

export default new CategoriaController()