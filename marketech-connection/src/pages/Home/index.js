import React from 'react'
import { Link } from 'react-router-dom'
import { FaProductHunt,FaServicestack } from 'react-icons/fa'
import Message from '../../Components/Message/message'
import './contentBar.css'
export default function ContentBar(){
    return(
        <div className="container" >
            <Message/>
            <section className="categories">
                <h4>Categorias</h4>
                <p>
                    <Link href="/">Produtos <FaProductHunt size={25}/></Link>
                </p>
                <p>
                    <Link href="/">Serviços <FaServicestack size={25}/></Link>
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