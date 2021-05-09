import { useEffect, useState } from 'react'
import './styles.css'
import { toast } from 'react-toastify'
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
            <ul>
                {addedProduct.map((item) => {
                    return(
                        <li key={item.id}>
                            <div className="my-products-info">
                                <img src={item.image} alt={item.name}/>
                                <span>{item.name}</span>
                            </div>
                            <div>
                                <button onClick={ () => handleDelete(item.id) }>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}