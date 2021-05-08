import React, { useEffect, useState } from 'react'
import './styles.css'
import logoAje from '../../assets/logoAje.png'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export default function Lojas(){
    const [associadosProdutos, setAssociadosProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        async function loadAssociadosProdutos(){
            //https://api-marketech-connection.herokuapp.com/api/shop
            const response = await api.get('api/shop/product');
            setAssociadosProdutos(response.data)
            const finishedTimeout = setTimeout(() => {
                setLoading(false);
            }, 1000)
        }   

        loadAssociadosProdutos();
    }, []);
    if(loading){
        return(
            <div id="loading">
                {loading}
            </div>
        )
    }

    return(
        <div className="container-store">
            <img src={logoAje} alt="logo-aje"/>
            <div className="content-store">
                {associadosProdutos.map((index) => {
                return(
                    <div className="content-associated" key={index.id}>
                        <div className="product-logo">
                            <img className="logo-associated" src={index.image} alt={index.name}/>
                        </div>
                        <div className="description">
                            <p>
                            {index.name}
                            </p>
                            <Link to={`/lojas/${index.id}`}>
                                <button>Visualizar</button>
                            </Link>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}