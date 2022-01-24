import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

const ThankYouText = styled.h2`
  text-align: center;
`;

export default class Final extends React.Component {
  render() {
    return (
      <>
        <Title>O FORMULÁRIO ACABOU</Title>
        <ThankYouText>
          Muito obrigado por participar! Entraremos em contato!
        </ThankYouText>
      </>
    );
  }
}
