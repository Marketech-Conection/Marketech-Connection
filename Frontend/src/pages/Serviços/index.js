import React, { useEffect, useState } from 'react'
import './styles.css'
import logoAje from '../../assets/logoAje.png'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export default function Servicos(){
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        async function loadServices(){
            const response = await api.get('api/shop/service');
            setServicos(response.data);
        }
        loadServices();
    }, [])
    return(
        <div className="container-store">
            <img src={logoAje} alt="logo-aje"/>
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
                            <Link to={`/api/service/${index.id}`}>
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