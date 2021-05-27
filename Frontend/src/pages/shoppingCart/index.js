import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCar, updateAmountCar } from '../../store/modules/addToCar/actions'
import "./styles.css";
import emptyCart from '../../assets/undraw_empty_cart_co35.svg'
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";


export default function ShoppingCart() {

  const shoppingCartProducts = useSelector((state) => state.addToCar);
  const dispatch = useDispatch();

  function handleRemove(id){
    dispatch(removeToCar(id))
    if(handleRemove){
      toast.info("Produto removido");
    }
  }
  function decrementAmount(product){
    dispatch(updateAmountCar(product.id, product.amount - 1))
  }
  function incrementAmount(product){
    dispatch(updateAmountCar(product.id, product.amount + 1))
  }

  return (
    <div className="container-car">
      <h1>Carrinho</h1>
      <h3>Itens no Carrinho: {shoppingCartProducts.length}</h3>
      {shoppingCartProducts.length === 0 &&
        <div className="no-products">
            <img className="no-products-image" src={emptyCart} alt="no-products"/>
            <span>Você não possui produtos no seu carrinho</span>
            <Link to="/">
                Explorar
            </Link>
        </div>
      }
      {shoppingCartProducts.map((content) => {
        return (
          <div className="content-car" key={content.id}>
            <div className="product-image">
              <strong>Produto</strong>
              <img src={content.image} alt={content.name} />
            </div>
            <div className="product-name">
              <strong>Nome</strong>
              <p>{content.name}</p>
            </div>
            <div className="product-price">
              <strong>Preço(unidade)</strong>
              <p>R$ {content.price},00</p>
            </div>
            <div className="product-inc-dec">
              <strong>Quantidade</strong>
              <input type="text" value={content.amount} readOnly />
              <div className="product-buttons">
              <button onClick={ () => decrementAmount(content)}>
                <FaMinus size={15}></FaMinus>
              </button>
              <button onClick={ () => incrementAmount(content)}>
                <FaPlus size={15}></FaPlus>
              </button>
              </div>
              <button onClick={() => handleRemove(content.id) } className="delete-button">
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        );
      })}
      <div className="procede-button">
        <Link to="/confirmacao">
        {shoppingCartProducts.length === 0 ? <button disabled={true}>Continuar</button> : <button>Continuar</button>}
        </Link>
      </div>
    </div>
  );
}
