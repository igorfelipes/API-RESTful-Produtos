import { Model, DataTypes } from 'sequelize';

class Produto extends Model {
    static init(sequelize){
        super.init({
            idCategoria: DataTypes.INTEGER,
            descricao: DataTypes.TEXT,
        },
        {
            sequelize,
            tableName: 'Produtos',

        })
    }

    static associate(models){
        this.belongsTo(models.Categoria, { foreignKey: 'idCategoria', as: 'categoria'})
    }
}


export default Produto