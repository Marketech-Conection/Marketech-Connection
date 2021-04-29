import React from 'react'
import geleiaAcai from '../../assets/products/geleiaacai.jpg'
import './style.css'

export default function product(){
    return(
        <div className="product-container">
            <div className="product">
                <h3>Geleia de açaí</h3>
                <img src={geleiaAcai} alt="geleia açai"/>
            </div>
            <div className="product-description">
                <h4>Descrição</h4>
                <p>A geleia de açaí possui índice elevado de vitaminas B1, C e E que garantem o bom funcionamento do sistema nervoso bem como estimula o apetite.</p>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}