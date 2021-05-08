import './styles.css'
import { Link } from 'react-router-dom'
import ErrorImg from '../../assets/undraw_page_not_found_su7k.svg'

export default function Erro(){
    return(
        <div className="not-found">
            <img src={ErrorImg} alt="Error"/>
            <h2>Página não encontrada</h2>
            <Link to="/">Voltar para a home</Link>
        </div>
    )
}