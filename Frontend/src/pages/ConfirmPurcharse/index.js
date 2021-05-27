import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Confirmation() {
  const shoppingCartProducts = useSelector((state) => state.addToCar);
  return (
    <div>
      {shoppingCartProducts.map((content) => {
        return (
          <div className="finish-purcharse-container">
            <div className="content-purcharse-car" key={content.id}>
              <div className="product-image">
                <strong>Produto</strong>
                <img src={content.image} alt={content.name} />
              </div>
              <div className="product-name">
                <strong>Nome</strong>
                <p>{content.name}</p>
              </div>
              <div className="product-price">
                <strong>Preço(total)</strong>
                <p>{"R$ "+content.price * content.amount + ",00"}</p>
              </div>
              <div className="product-inc-dec">
                <strong>Quantidade</strong>
                <input type="text" value={content.amount} readOnly />
              </div>
            </div>
          </div>
        );
      })}
      <div className="procede-purcharse-button">
          <Link to="/Compra">
            <button>Finalizar compra</button>
          </Link>
        </div>
    </div>
  );
}
