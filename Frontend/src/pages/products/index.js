import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'
import { Link, useHistory, useParams } from 'react-router-dom'
import './styles.css'
export default function Products(){
    const { id } = useParams();
    const [ produto, setProduto ] = useState([]);
    const history = useHistory();
    const [associadosProdutos, setAssociadosProdutos] = useState([]);

    useEffect( () => {
        async function loadProducts(){
            const response = await api.get(`/api/product/${id}`)
            if(response.data.length === 0){
                //Tentou acessar com um id que não existe, navego ele para a home
                history.replace('/');
                return;
            }
            setProduto(response.data);
        }
        loadProducts();

    }, [history,id]);
    useEffect( () => {
        async function loadAssociadosProdutos(){
            const response = await api.get(`api/shop/${id}`);
            setAssociadosProdutos(response.data)
        }
         loadAssociadosProdutos();
    }, [id])
    return(
        <div className="products-container">
            <div className="logo-content">
                <h1>Bem vindo a(ao)</h1>
                        <div>
                            <img src={associadosProdutos.image} alt="Logo"/>
                            <span>{associadosProdutos.description}</span>
                            <div className="social-medias">
                                <FaInstagram size={25} color="#E1306C"/>
                                {console.log(associadosProdutos)}
                                <ExternalLink href={`${associadosProdutos.contact !== undefined ? associadosProdutos.contact.instagram : "Não carregou"}`}>
                                    <p>@{associadosProdutos.name}</p>
                                </ExternalLink>
                                
                            </div>
                            <div className="social-medias">
                                <FaFacebook size={25} color="#4267B2"/>
                                {console.log(associadosProdutos)}
                                <ExternalLink href={`${associadosProdutos.contact !== undefined ? associadosProdutos.contact.facebook : "Não carregou"}`}>
                                    <p>@{associadosProdutos.name}</p>
                                </ExternalLink>
                                
                            </div>
                        </div>
            </div>
            <div className="products-content">
                <div className="products-title">
                    <h3>Produtos disponíveis</h3>
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