import { useEffect, useState } from 'react'
import './styles.css'
import { toast } from 'react-toastify'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import sadImage from '../../assets/undraw_feeling_blue_4b7q.svg'
export default function SavedProducts(){
    const [addedProduct, setAddedProduct] = useState([]);

    useEffect( () => {
        const myList = localStorage.getItem('produtos');
        setAddedProduct(JSON.parse(myList) || []);

    }, []);
    function handleDelete(id){
        let filterProducts = addedProduct.filter( (item) => {
            return(
                item.id !== id
            )
        })
        setAddedProduct(filterProducts);
        localStorage.setItem('produtos', JSON.stringify(filterProducts))
        toast.success("Produto excluído com sucesso")
    }
    return(
        <div id="my-products">
            <h1>Lista de desejos</h1>
            {addedProduct.length === 0 && 
                <div className="no-products">
                    <img src={sadImage} alt="wishlist"/>
                    <span>Você não possui itens na sua Lista de desejos</span>
                    <Link to="/">
                        Explorar
                    </Link>
                </div>
            }
            <ul>
                {addedProduct.map((item) => {
                    return(
                        <li key={item.id}>
                            <div className="my-products-info">
                                <img src={item.image} alt={item.name}/>
                                <span>{item.name}</span>
                            </div>
                            <div>
                                <button onClick={ () => handleDelete(item.id) }><FaTrash color="#fff" size={20}/></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}