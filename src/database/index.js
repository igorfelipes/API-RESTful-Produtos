import Sequelize from 'sequelize';

import Produto from '../app/models/Produto'
import Categoria from '../app/models/Categoria'

import databaseConfig from '../config/database'


const models = [Produto, Categoria];

class Database {
     constructor(){
         this.init()
         
     }

     init(){
        
        this.connection = new Sequelize(databaseConfig)      
         
        models.map( model =>model.init(this.connection) )
        models.map(model => model.associate(this.connection.models))
     }
}

export default new Database();
