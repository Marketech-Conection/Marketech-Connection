import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/header.css'
import { FaUser, FaListAlt, FaShoppingCart } from 'react-icons/fa'

function Header(){
    return(
        <header>
            <div className="logo">
                <Link to="/">
                    <h3>Marketech</h3>
                    <h5>Connection</h5>
                </Link>
            </div>
            <nav className="nav-bar">
                <ul>
                    <div className="input">
                        <input type="search" placeholder="Pesquise o que quiser"/>
                    </div>
                    <li><Link href="/"><FaListAlt/></Link></li>
                    <li><Link href="/"><FaUser/></Link></li>
                    <li><Link to={`/Carrinho`}><FaShoppingCart/></Link></li>
                </ul>
        </nav>
        </header>
    )
}
export default Header;