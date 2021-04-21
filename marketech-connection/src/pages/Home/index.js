import React from 'react'
import { Link } from 'react-router-dom'
import { FaProductHunt,FaServicestack } from 'react-icons/fa'
import Message from '../../Components/Message/message'
import './contentBar.css'
import geleiaAcai from '../../assets/products/geleiaacai.jpg'
import geleiaCupuacu from '../../assets/products/geleiacupuacu.jpg'
import camisaTudoPassa from '../../assets/products/camisa tudo passa.jpg'
import camisaThinkMore from '../../assets/products/camisa think more.jpg'
import gestaoDeSst from '../../assets/serv/2.png'
import ppra from '../../assets/serv/3.png';
import pgr from '../../assets/serv/4.png';
export default function ContentBar(){
    return(
        <div className="container" >
            <Message/>
            <div className="content">
            <section className="categories">
                <h4>Categorias</h4>
                <Link to={`/lojas`}>
                <p>
                    Produtos
                    <FaProductHunt size={25}/>
                </p>
                </Link>
                <Link href="/">
                <p>
                    Serviços
                    <FaServicestack size={25}/>
                </p>
                </Link>
            </section>
            <section className="integrated-stores">
                <h4>Lojas Integradas</h4>
            </section>
            <section className="hot-products">
                <h4>Produtos mais vendidos</h4>
                <div className="products">
                    <div className="product-session">
                        <img className="product-image" src={geleiaAcai} title="geleia de açaí" alt="geleia de açaí"/>
                        <p className="price">R$ 16,00</p>
                    </div>
                    <div className="product-session">
                        <img className="product-image" src={geleiaCupuacu} title="geleia de cupuaçu" alt="geleia de açaí"/>
                        <p className="price">R$ 16,00</p>
                    </div>
                    <div className="product-session">
                        <img className="product-image" src={camisaThinkMore} title="camisa think more" alt="geleia de açaí"/>
                        <p className="price">R$ 16,00</p>
                    </div>
                    <div className="product-session">
                        <img className="product-image" src={camisaTudoPassa} title="camisa tudo passa" alt="geleia de açaí"/>
                        <p className="price">R$ 16,00</p>
                    </div>
                    
                </div>
                <h4>Serviços mais acessados</h4>
                <div className="products">
                    <div className="product-session">
                        <img className="product-image" src={gestaoDeSst} title="Gestão de SST - Segurança e saúde do trabalho" alt="gestão de sst"/>
                    </div>
                    <div className="product-session">
                        <img className="product-image" src={ppra} title="Elaboração de Programa de Prevenção de Riscos Ambientais – PPRA" alt="PPRA"/>
                    </div>
                    <div className="product-session">
                        <img className="product-image" src={pgr} title="Elaboração de Programa de Gerenciamento de Riscos – PGR" alt="PGR"/>
                    </div>
                    
                </div>
            </section>
            </div>
        </div>
    )
}