import React from 'react'
import logoZeroDano from '../../assets/logoZeroDano.png'
import gestaoSST from '../../assets/serv/2.png'
import Ppra from '../../assets/serv/3.png'
import { FaInstagram } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'
import './styles.css'
export default function products(){
    return(
        <div className="products-container">
            <div className="logo-content">
                <h1>Bem vindo a(ao)</h1>
                <img style={{padding: "32px 0"}} src={logoZeroDano} alt="Logo"/>
                <div className="social-medias">
                    <FaInstagram size={25}/>
                    <ExternalLink href="https://www.instagram.com/zerodanoengenharia/">
                        <p>Zero Dano Assessoria, Consultoria e Projetos</p>
                    </ExternalLink>
                </div>
            </div>
            <div className="products-content">
                <div className="products-title">
                    <h3>Serviços em destaque</h3>
                </div>
                <div className="product-stock">
                    <div className="content-associated">
                        <div className="product-logo">
                            <img className="logo-associated" src={gestaoSST} alt="geleia acai"/>
                        </div>
                        <div className="description">
                            <p>
                            Gestão de SST
                            </p>
                            <p>
                            SSMA de sua empresa em boas mãos
                            </p>
                            <button>Visualizar</button>
                        </div>
                    </div>
                    <div className="content-associated">
                        <div className="product-logo">
                            <img className="logo-associated" src={Ppra} alt="geleia cupuaçu"/>
                        </div>
                        <div className="description">
                            <p>
                            PPRA
                            </p>
                            <p>
                            Elaboração de Programa de Prevenção de Riscos Ambientais
                            </p>
                            <button>Visualizar</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}