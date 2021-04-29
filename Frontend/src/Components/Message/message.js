import React from 'react'
import '../../styles/message.css'
import logoAje from '../../assets/logoAje.png'

function Message(){
    return(
        <section className="title-container">
            <div className="welcome">
                <img src={logoAje} alt="LogoAje"/>
                <h1>Bem vindo ao Marketech Connection</h1>
            </div>
        </section>
    )
}
export default Message;