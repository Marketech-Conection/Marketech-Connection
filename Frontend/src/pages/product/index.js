import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './style.css'
import { addToCar } from '../../store/modules/addToCar/actions'
import api from '../../services/api'
import { useParams } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { toast } from 'react-toastify';

export default function Product(){
    const dispatch = useDispatch();
    const { idProduct, idShop } = useParams();
    const [arrProduct, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        async function loadProduct(){
            const response = await api.get(`api/product/${idShop}`);
            setProduct(response.data);
            setTimeout(() => {
                setLoading(false);
            }, 500)
        }
        loadProduct();
    }, [idShop, idProduct])

    function salvaProduto(){
        const myList = localStorage.getItem('produtos');

        let savedProducts = JSON.parse(myList) || [];

        const hasProduct = savedProducts.some( (pd) => pd.id === arrProduct[idProduct].id )
        console.log(hasProduct)
        if(hasProduct){
            toast.info("Você já possui esse produto salvo")
            return;
        }
        savedProducts.push(arrProduct[idProduct]);
        localStorage.setItem('produtos', JSON.stringify(savedProducts));
        toast.success("Produto adicionado a lista de desejos")
    }

    if(loading){
        return(
            <div id="loading">
                {loading}
            </div>
        )
    }
    function handleAdd(){
        dispatch( addToCar(arrProduct[idProduct]));
        if(handleAdd){
            toast.success("Produto adicionado ao carrinho")
        }
    }
     return(
        <div className="product-container">
            <div className="product">
                <img src={arrProduct.length!== 0 ? arrProduct[idProduct].image : "nao carregou"} alt={arrProduct.length !== 0 ? arrProduct[idProduct].name : "nao carregou"}/>
            </div>
            <div className="product-description">
                <h4>{arrProduct.length !== 0  ? arrProduct[idProduct].name : "nao carregou"} - R$ {arrProduct.length !== 0 ? arrProduct[idProduct].price : "nao carregou"}</h4>
                <p>{arrProduct.length !== 0 ? arrProduct[idProduct].description : "nao carregou"}</p>
                <div className="buttons">
                    <button onClick={ salvaProduto }>Lista de desejos <FaHeart size={15}/></button>
                    <button onClick={ handleAdd }>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    )
}