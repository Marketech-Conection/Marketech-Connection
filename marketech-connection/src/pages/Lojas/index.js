import React from 'react'
import './styles.css'
import logoPaladarAmazonico from '../../assets/paladaramazopnico.png'
import logoAje from '../../assets/logoAje.png'
import logoLibertyStore from '../../assets/logoLibertyStore.jpg'

export default function Lojas(){
    return(
        <div className="container-store">
            <img src={logoAje} alt="logo-aje"/>
            <div className="content-store">
                <div className="content-associated">
                    <div className="product-logo">
                        <img className="logo-associated" src={logoPaladarAmazonico} alt="logoPaladarAmazonico"/>
                    </div>
                    <div className="description">
                        <p>
                        Indústria focada na produção e comercialização  de iguarias da região amazônica.
                        </p>
                        <button>Saiba mais</button>
                    </div>
                </div>
                <div className="container-store">
                <div className="product-logo">
                    <img className="logo-associated" src={logoLibertyStore} alt="logoPaladarAmazonico"/>
                </div>
                <div className="description">
                    <p>
                    Loja online voltada para o universo das T-shirts.
                    </p>
                    <button>Saiba mais</button>
                </div>
                </div>
            </div>
        </div>
    )
}