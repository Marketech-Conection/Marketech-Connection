import React from 'react'
import '../../styles/header.css'
import { FaUser, FaListAlt, FaShoppingCart } from 'react-icons/fa'

function Header(){
    return(
        <header>
            <div className="logo">
                <a href="/">
                    <h3>Marketech</h3>
                    <h5>Connection</h5>
                </a>
            </div>
            <nav className="nav-bar">
                <ul>
                    <div className="input">
                        <input type="search" placeholder="Pesquise o que quiser"/>
                    </div>
                    <li><a href="/"><FaListAlt/></a></li>
                    <li><a href="/"><FaUser/></a></li>
                    <li><a href="/"><FaShoppingCart/></a></li>
                </ul>
        </nav>
        </header>
    )
}
export default Header;