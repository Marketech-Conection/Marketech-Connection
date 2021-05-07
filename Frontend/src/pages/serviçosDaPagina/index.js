import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import { FaInstagram, FaPlus, FaMinus } from 'react-icons/fa'
import { ExternalLink } from 'react-external-link'
import './styles.css'
import { useHistory, useParams } from 'react-router'
export default function Products(){

    const [clickedContacts, setClickedContacts] = useState(false);
    const [clickedServices, setClickedServices] = useState(false);
    const { id } = useParams();
    const [ associadosServicos, setAssociadosServicos ] = useState([]);
    const [ servico, setServico ] = useState([]);
    const history = useHistory();

    useEffect( () => {
        
        async function loadService(){
            const response = await api.get(`api/shop/${id}`);
            if(response.data.length === 0){
                history.replace('/');
                return;
            }
            setAssociadosServicos(response.data);
        }
        loadService();
    }, [id, history]);

    useEffect(() => {
        async function loadServices(){
            const response = await api.get(`api/service/${id}`)
            setServico(response.data);
        }
        loadServices();
    }, [id])

    const toggleContacts = index => {
        if(clickedContacts === index){
            return setClickedContacts(null);
        }
        setClickedContacts(index);
    }
    const toggleServices = index => {
        if(clickedServices === index){
            return setClickedServices(null);
        }
        setClickedServices(index);
    }

    return(
        <div className="products-container">
            <div className="logo-content">
                <h1>Bem vindo a(ao)</h1>
                {console.log(associadosServicos)}
                <img style={{padding: "32px 0"}} src={associadosServicos.image} alt={associadosServicos.name}/>
                
                 <div className="accordion-section">
                    <div className="container">
                        <div className="wrap" onClick={ (index) => toggleContacts(index)}>
                            <h1>Contato</h1>
                            <span>{clickedContacts ? <FaMinus/> : <FaPlus/>}</span>
                        </div>
                        {clickedContacts ? (
                            <div className="dropdown">
                                <div className="social-medias">
                                    <FaInstagram size={25}/>
                                    <ExternalLink href="https://www.instagram.com/zerodanoengenharia/">
                                        <p>Zero Dano</p>
                                    </ExternalLink>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="products-content">
                <div className="products-title">
                    <h3>Lista de serviços disponíveis</h3>
                    <ExternalLink href="https://drive.google.com/file/d/1MMXwt-nnAcFxOhwY9McDBLuJpPPcqAYk/view?usp=sharing"> 
                    <button>Ver portfólio</button>
                    </ExternalLink>
                </div>
                <div className="accordion-section">
                    <div className="container">
                        <div className="wrap" onClick={ (index) => toggleServices(index)}>
                            <h1>Lista de serviços</h1>
                            <span>{clickedServices ? <FaMinus/> : <FaPlus/>}</span>
                        </div>
                        {clickedServices ? (
                            <div className="dropdown">
                            <p></p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}