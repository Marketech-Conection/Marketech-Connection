import React, {useState} from 'react'
import logoZeroDano from '../../assets/logoZeroDano.png'
import { FaInstagram, FaPlus, FaMinus } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'
import './styles.css'
export default function Products(){

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if(clicked === index){
            return setClicked(null);
        }
        setClicked(index);
    }

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
                 <div className="accordion-section">
                    <div className="container">
                        <div className="wrap" onClick={ (index) => toggle(index)}>
                            <h1>Contato</h1>
                            <span>{clicked ? <FaMinus/> : <FaPlus/>}</span>
                        </div>
                        {clicked ? (
                            <div className="dropdown">
                            <p>(91)99862-9913</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="products-content">
                <div className="products-title">
                    <h3>Lista de serviços disponíveis</h3>
                    <ExternalLink href="https://drive.google.com/file/d/1MMXwt-nnAcFxOhwY9McDBLuJpPPcqAYk/view?usp=sharing"> 
                    <button>Ver portfólio</button>
                    </ExternalLink>
                </div>
                <div className="accordion-section">
                    <div className="container">
                        <div className="wrap" onClick={ (index) => toggle(index)}>
                            <h1>Lista de serviços</h1>
                            <span>{clicked ? <FaMinus/> : <FaPlus/>}</span>
                        </div>
                        {clicked ? (
                            <div className="dropdown">
                            <p>(91)99862-9912</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}