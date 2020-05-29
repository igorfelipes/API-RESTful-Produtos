import React , {Component} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './styles.css'



export default class SubmitForm extends Component{

    state = {
        idCategoria: '', 
        descricao: ''
    }

    handleInputChange = event =>{
        this.setState({ idCategoria: event.target.value})
    }
    
    handleInputDescChange = event =>{
        this.setState({ descricao: event.target.value})
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const { idCategoria, descricao} = this.state

        const response = await api.post('/cadastrar-produto', {
            "idCategoria": idCategoria,
            "descricao":  descricao,
        })

        alert(`Produto cadastrado com Sucesso!`)
        window.location.href='/'
        console.log(response.data)
    }

    render(){
        const { idCategoria, descricao} = this.state

        return (
            <div className="form-submit">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    placeholder="Digite o id da categoria"
                    value={idCategoria}
                    onChange={this.handleInputChange}
                    />
                    <input 
                    type="text"
                    placeholder="Digite a descrição do produto"
                    value={descricao}
                    onChange={this.handleInputDescChange}
                    />
                    <button type="submit" onclick= "alert('Produto cadastrado com sucesso!')">Submit</button>
                    <Link to={`/`}>Voltar</Link>
                </form>
            </div>
        );
    }
}

