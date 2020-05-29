import React, {Component} from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'


import './styles.css'

export default class Main extends Component{
    state = {
        products: [],
    }

    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get('/listar-produtos')
        this.setState({ products: response.data})
    }

    render(){
        const {products} = this.state
        return (
                <div className="product-list">
                    <div className="action">
                        <Link to={'cadastrar-produto'}> Cadastrar Produto</Link>
                    </div>
                
                    {products.map( product => (
                        <article key={product.id}>
                            <strong>{product.descricao}</strong>
                            <p>{product.categoria.categoria}</p>
                            <Link to={`produtos/${product.id}`}>Atualizar</Link>
                            <Link to={`produtos/${product.id}`}>Deletar</Link>
                        </article>
                    ))}
                </div>

        )
    }
}