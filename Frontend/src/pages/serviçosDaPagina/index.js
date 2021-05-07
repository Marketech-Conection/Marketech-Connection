import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ExternalLink } from "react-external-link";
import "./styles.css";
import { useHistory, useParams } from "react-router";
export default function Products() {
  const { id } = useParams();
  const [associadosServicos, setAssociadosServicos] = useState([]);
  const [servico, setServico] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadService() {
      const response = await api.get(`api/shop/${id}`);
      if (response.data.length === 0) {
        history.replace("/");
        return;
      }
      setAssociadosServicos(response.data);
    }
    loadService();
  }, [id, history]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get(`api/service/${id}`);
      setServico(response.data);
    }
    loadServices();
  }, [id]);

  return (
    <div className="service-container">
      <div className="logo-content">
        <h1>Bem vindo a(ao)</h1>
        <img
          src={associadosServicos.image}
          alt={associadosServicos.name}
        />
      </div>
      <div className="description-container">
            <h3>Sobre a <strong>{associadosServicos.name}</strong></h3>
            <p>{associadosServicos.description}</p>
            <ExternalLink href="https://drive.google.com/file/d/1MMXwt-nnAcFxOhwY9McDBLuJpPPcqAYk/view">
                <button>Ver portfólio</button>
        </ExternalLink>
        </div>
      <div className="service-content">
        <div className="service-title">
          <h3>Lista de serviços disponíveis</h3>
        </div>
        <div>
          {servico.map((list) => {
            return (
              <ul className="services">
                <li>{list.name} - {list.description}</li>
              </ul>
            );
          })}
        </div>
        <div className="service-social-medias">
            <h3>Contato: </h3>
            <div className="social">
            <ExternalLink
              href={`${
                associadosServicos.contact !== undefined
                  ? associadosServicos.contact.facebook
                  : "Não carregou"
              }`}
            >
              <p> <FaInstagram size={25} color="#E1306C" /> {associadosServicos.name}</p>
            </ExternalLink>
            </div>
            <div className="social">
            <ExternalLink
              href={`${
                associadosServicos.contact !== undefined
                  ? associadosServicos.contact.facebook
                  : "Não carregou"
              }`}
            >
              <p><FaFacebook size={25} color="#4267B2" /> {associadosServicos.name}</p>
            </ExternalLink>
            </div>
        </div>
      </div>
    </div>
  );
}
