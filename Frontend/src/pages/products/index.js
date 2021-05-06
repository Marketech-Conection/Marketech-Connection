import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import logoPaladarAmazonico from '../../assets/paladaramazopnico.png'
import { FaInstagram } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'
import { Link, useParams } from 'react-router-dom'
import './styles.css'
export default function Products(){
    const { id } = useParams();
    const [ produto, setProduto ] = useState([]);

    useEffect( () => {
        async function loadProducts(){
            const response = await api.get(`/api/product/${id}`)
            console.log(response.data)
            setProduto(response.data);
        }
        loadProducts();
    }, [id]);
    return(
        <div className="products-container">
            <div className="logo-content">
                <h1>Bem vindo a(ao)</h1>
                <img src={logoPaladarAmazonico} alt="Logo"/>
                <div className="social-medias">
                    <FaInstagram size={25}/>
                    <ExternalLink href="https://www.instagram.com/paladaramazonico/">
                        <p>@paladaramazonico</p>
                    </ExternalLink>
                </div>
            </div>
            <div className="products-content">
                <div className="products-title">
                    <h3>Produtos mais acessados</h3>
                </div>
                <div className="product-stock">
                    { produto.map( (index) => {
                        return(
                            <div className="content-associated">
                        <div className="product-logo">
                            <img className="logo-associated" src={index.image} alt={index.name}/>
                        </div>
                        <div className="description">
                            <p>
                            {index.name}
                            </p>
                            <p>
                            Preco: {index.price} reais
                            </p>
                            <Link to="/lojas/produtos/produto">
                            <button>Visualizar</button>
                            </Link>
                        </div>
                    </div>  
                        )
                    })} 
                </div>
            </div>
        </div>
    )
}