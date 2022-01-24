import React from "react";
import styled from "styled-components";

const FormQuestions = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  text-align: center;
`;

export default class Etapa2 extends React.Component {
  render() {
    return (
      <>
        <Title>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Title>
        <FormQuestions>
          <h2>5. Qual curso?</h2>
          <input />
        </FormQuestions>
        <FormQuestions>
          <h2>6. Qual a unidade de ensino?</h2>
          <input />
        </FormQuestions>
      </>
    );
  }
}
