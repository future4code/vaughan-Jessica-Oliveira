import React from "react";
import styled from "styled-components";

const FormQuestions = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
`;

export default class Etapa1 extends React.Component {
  render() {
    return (
      <>
        <Title>ETAPA 1 - DADOS GERAIS</Title>
        <FormQuestions>
          <h2>1. Qual o seu nome?</h2>
          <input placeholder="Digite aqui o seu nome" />
        </FormQuestions>
        <FormQuestions>
          <h2>2. Qual sua idade?</h2>
          <input placeholder="Digite aqui a sua idade" />
        </FormQuestions>
        <FormQuestions>
          <h2>3. Qual seu email?</h2>
          <input placeholder="Digite aqui o seu email" />
        </FormQuestions>
        <FormQuestions>
          <h2>4. Qual a sua escolaridade?</h2>
          <select>
            <option>Selecione</option>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Incompleto</option>
            <option>Ensino Superior Completo</option>
          </select>
        </FormQuestions>
      </>
    );
  }
}
