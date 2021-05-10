import React, { useEffect, useState } from 'react'
import './styles.css'
import logoAje from '../../assets/logoAje.png'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export default function Servicos(){
    const [servicos, setServicos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadServices(){
            const response = await api.get('api/shop/service');
            setServicos(response.data);
            setTimeout(() => {
                setLoading(false);
            }, 500)
        }
        loadServices();
    }, [])
    if(loading){
        return(
            <div id="loading">
                {loading}
            </div>
        )
    }
    return(
        <div className="container-store">
            <div className="registered-stores">
                <img src={logoAje} alt="logo-aje"/>
                <h1>Lojas cadastradas</h1>
            </div>
            <div className="content-store">
                {servicos.map((index) => {
                return(
                    <div className="content-associated" key={index.id}>
                        <div className="product-logo">
                            <img className="logo-associated" src={index.image} alt={index.name}/>
                        </div>
                        <div className="description">
                            <p>
                            {index.name}
                            </p>
                            <Link to={`/serviços/${index.id}`}>
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