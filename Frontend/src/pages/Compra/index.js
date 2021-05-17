import React from 'react'
import './styles.css'
import OrderConfirmed from '../../assets/undraw_Order_confirmed_re_g0if.svg'

export default function Compra(){
    return(
        <div className="purcharse-container">
            <img src={OrderConfirmed} alt="order-confirmed"/>
            <h3>Compra aprovada!!</h3>
        </div>
    )
}