import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import foto from "./components/CardGrande/foto-perfil-jessica.jpg";
import logoItau from "./components/CardGrande/logo-itau.png";
import logoSafra from "./components/CardGrande/logo-safra.png";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import Home from "./components/CardPequeno/home.png";
import Email from "./components/CardPequeno/o-email.png";
import styledComponents from "styled-components";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={foto}
          nome="Jessica de Oliveira"
          descricao="Oi, eu sou a Jéssica! Comunicadora por essência, profissional de marketing por destino, professora por paixão e psicanalista por escolha. Nos últimos 9 anos tive o prazer de construir produtos digitais e campanhas de marketing para empresas incríveis como Nestlé, Apple, Itaú, Banco Safra e desde 2021 estou me aventurando no mundo da programação."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        icon={Email}
        titulo="Email: "
        descricao="jess.oliveira@gmail.com"
      />
      <CardPequeno
        icon={Home}
        titulo="Endereço: "
        descricao="Rua das Rosas, 123"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={logoItau}
          nome="Itaú Unibanco"
          descricao="Trainee Varejo 2016. Liderança em campanhas de marketing e gestão de projetos para a divisão Digital Seguros e Abertura de Conta."
        />

        <CardGrande
          imagem={logoSafra}
          nome="Banco Safra"
          descricao="Estrategista digital para Conta Corrente PF."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
