import React from 'react'
import "./styles.css"
import Geleia from '../../assets/products/geleiaacai.jpg'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

export default function shoppingCart(){
    return(
        <div className="container-car">
            <h1>Carrinho</h1>
            <div className="content-car">
                <div className="product-image">
                    <strong>Produto</strong>
                    <img src={Geleia} alt=""/>
                </div>
                <div className="product-name">
                    <strong>Nome</strong>
                    <p>Geleia</p>
                </div>
                <div className="product-price">
                    <strong>Preço</strong>
                    <p>R$ 16,00</p>
                </div>
                <div className="product-inc-dec">
                    <strong>Quantidade</strong>
                    <button>
                        <FaMinus size={20}></FaMinus>
                    </button>
                    <input type="text" value={1} readOnly/>
                    <button>
                        <FaPlus size={20}></FaPlus>
                    </button>
                    <button className="delete-button">
                        <FaTrash size={20}/>
                    </button>
                </div>
            </div>
            <div className="procede-button">
                    <button>Continuar</button>
            </div>
        </div>
    )
}