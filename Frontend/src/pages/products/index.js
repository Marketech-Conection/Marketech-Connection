import React from 'react'
import logoPaladarAmazonico from '../../assets/paladaramazopnico.png'
import geleiaAcai from '../../assets/products/geleiaacai.jpg'
import geleiaCupuacu from '../../assets/products/geleiacupuacu.jpg'
import { FaInstagram } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'
import { Link } from 'react-router-dom'
import './styles.css'
export default function products(){
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
                    <div className="content-associated">
                        <div className="product-logo">
                            <img className="logo-associated" src={geleiaAcai} alt="geleia acai"/>
                        </div>
                        <div className="description">
                            <p>
                            Geleia de Açaí
                            </p>
                            <p>
                            Preco: R$ 16,00
                            </p>
                            <Link to="/lojas/produtos/produto">
                            <button>Visualizar</button>
                            </Link>
                        </div>
                    </div>
                    <div className="content-associated">
                        <div className="product-logo">
                            <img className="logo-associated" src={geleiaCupuacu} alt="geleia cupuaçu"/>
                        </div>
                        <div className="description">
                            <p>
                            Geleia de cupuaçu
                            </p>
                            <p>
                            Preco: R$ 18,00
                            </p>
                            <Link>
                            <button>Visualizar</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}