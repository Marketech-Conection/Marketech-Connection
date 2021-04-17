import React from 'react'
import { FaProductHunt,FaServicestack } from 'react-icons/fa'
import '../../styles/contentBar.css'
export default function ContentBar(){
    return(
        <div className="container">
            <section className="categories">
                <h4>Categorias</h4>
                <p>
                    <a href="/">Produtos <FaProductHunt size={25}/></a>
                </p>
                <p>
                    <a href="/">Serviços <FaServicestack size={25}/></a>
                </p>
            </section>
            <section className="integrated-stores">
                <h4>Lojas Integradas</h4>
            </section>
            <section className="hot-products">
                <h4>Produtos mais vendidos</h4>
            </section>
            <section className="hot-services">
                <h4>Serviços mais acessados</h4>
            </section>
        </div>
    )
}