import React from 'react'
import logoZeroDano from '../../assets/logoZeroDano.png'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
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
                    <h3>Lista de serviços disponíveis</h3>
                    <ExternalLink href="https://drive.google.com/file/d/1MMXwt-nnAcFxOhwY9McDBLuJpPPcqAYk/view?usp=sharing"> 
                    <button>Ver portfólio</button>
                    </ExternalLink>
                </div>
                <div className="content-list">
                    <ul>
                        <li>
                        PPRA - Elaboração de Programa de Prevenção de Riscos Ambientais
                        <button>
                            <FaWhatsapp size={20}/>
                            Entrar em contato via Whatsapp
                        </button>
                        </li>
                        <li>
                        PPRA - Elaboração de Programa de Prevenção de Riscos Ambientais
                        <button>
                            <FaWhatsapp size={20}/>
                            Entrar em contato via Whatsapp
                        </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}