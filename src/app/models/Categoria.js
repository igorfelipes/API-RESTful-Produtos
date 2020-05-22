import { Model, DataTypes } from 'sequelize';

class Categoria extends Model {
    static init(sequelize){
        super.init({
            categoria: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName: 'Categorias',
            
        });
    }

    static associate(models){
        this.hasMany(models.Produto, {foreignKey:'idCategoria', as: 'produtos'})
    }
}



export default Categoria