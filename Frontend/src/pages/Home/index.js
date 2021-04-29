import React from 'react'
import { Link } from 'react-router-dom'
import { FaProductHunt,FaServicestack } from 'react-icons/fa'
import Message from '../../Components/Message/message'
import './contentBar.css'
export default function ContentBar(){
    return(
        <div className="container" >
            <Message/>
            <div className="content">
            <section className="categories">
                <h4>Selecione uma categoria</h4>
                <Link to={`/lojas`}>
                <p>
                    Produtos
                    <FaProductHunt size={25}/>
                </p>
                </Link>
                <Link to={`/serviços`}>
                <p>
                    Serviços
                    <FaServicestack size={25}/>
                </p>
                </Link>
            </section>
            </div>
        </div>
    )
}