import React, { useState, useEffect } from 'react'
import './style.css'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

export default function Product(){
    const { idProduct, idShop } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        async function loadProduct(){
            const response = await api.get(`api/product/${idShop}`);
            setProduct(response.data);
            const finishedTimeout = setTimeout(() => {
                setLoading(false);
            }, 500)
        }
        loadProduct();
    }, [idShop, idProduct])
    if(loading){
        return(
            <div id="loading">
                {loading}
            </div>
        )
    }
     return(
        <div className="product-container">
            <div className="product">
                <h3>{product.length !== 0  ? product[idProduct].name : "nao carregou"}</h3>
                <img src={product.length!== 0 ? product[idProduct].image : "nao carregou"} alt={product.length !== 0 ? product[idProduct].name : "nao carregou"}/>
            </div>
            <div className="product-description">
                <h4>Descrição</h4>
                <p>{product.length !== 0 ? product[idProduct].description : "nao carregou"}</p>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}