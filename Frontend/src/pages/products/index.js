import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ExternalLink } from "react-external-link";
import { Link, useHistory, useParams } from "react-router-dom";
import "./styles.css";
export default function Products() {
  const { id } = useParams();
  const [produto, setProduto] = useState([]);
  const history = useHistory();
  const [associadosProdutos, setAssociadosProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`/api/product/${id}`);
      if (response.data.length === 0) {
        //Tentou acessar com um id que não existe, navego ele para a home
        history.replace("/");
        return;
      }
      setProduto(response.data);
      setTimeout(() => {
        setLoading(false);
    }, 500)
    }
    loadProducts();
  }, [history, id]);
  useEffect(() => {
    async function loadAssociadosProdutos() {
      const response = await api.get(`api/shop/${id}`);
      setAssociadosProdutos(response.data);
    }
    loadAssociadosProdutos();
  }, [id]);
  if(loading){
    return(
        <div id="loading">
            {loading}
        </div>
    )
}
  return (
    <div className="products-container">
      <div className="logo-content">
        <h1>Bem vindo a(ao)</h1>
        <div>
          <img src={associadosProdutos.image} alt="Logo" />
          <span>{associadosProdutos.description}</span>
          <div className="social-medias">
            <FaInstagram size={25} color="#E1306C" />
            <ExternalLink
              href={`${
                associadosProdutos.contact !== undefined
                  ? associadosProdutos.contact.instagram
                  : "Não carregou"
              }`}
            >
              <p>@{associadosProdutos.name}</p>
            </ExternalLink>
          </div>
          <div className="social-medias">
            <FaFacebook size={25} color="#4267B2" />
            <ExternalLink
              href={`${
                associadosProdutos.contact !== undefined
                  ? associadosProdutos.contact.facebook
                  : "Não carregou"
              }`}
            >
              <p>@{associadosProdutos.name}</p>
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="products-content">
        <div className="products-title">
          <h3>Produtos disponíveis</h3>
        </div>
        <div className="product-stock">
          {produto.map((product, index) => {
            return (
              <div className="content-associated" key={product.id}>
                <div className="product-logo">
                  <img
                    className="logo-associated"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="description">
                  <p>{product.name}</p>
                  <p>Preco: {product.price} reais</p>
                  <Link to={`${id}/${index}`}>
                    <button>Visualizar</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
