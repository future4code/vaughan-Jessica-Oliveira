import React from "react";
import styled from "styled-components";

const FormQuestions = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
`;
export default class Etapa3 extends React.Component {
  render() {
    return (
      <>
        <Title>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Title>
        <FormQuestions>
          <h2>5. Por que você não terminou um curso de graduação?</h2>
          <input />
        </FormQuestions>
        <FormQuestions>
          <h2>6. Você fez algum curso complementar?</h2>
          <select>
            <option>Selecione</option>
            <option>Curso técnico</option>
            <option>Cursos de inglês</option>
            <option>Não fiz curso complementar</option>
          </select>
        </FormQuestions>
      </>
    );
  }
}
