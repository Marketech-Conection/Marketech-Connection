import React from 'react'
import './styles.css'
import logoZeroDano from '../../assets/logoZeroDano.png'
import logoAje from '../../assets/logoAje.png'
import { Link } from 'react-router-dom'

export default function Servicos(){
    return(
        <div className="container-store">
            <img src={logoAje} alt="logo-aje"/>
            <div className="content-store">
                <div className="content-associated">
                    <div className="product-logo">
                        <img className="logo-associated" src={logoZeroDano} alt="logoZeroDano"/>
                    </div>
                    <div className="description">
                        <p>
                        “Zero Dano Sistema de Gestão: SSMA de sua empresa em boas mãos”.
                        </p>
                        <Link to="/serviços/serviçosDaPagina">
                            <button>Saiba mais</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}