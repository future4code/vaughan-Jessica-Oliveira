import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 60px;
  width: 575px;
`;

const Icons = styled.img`
  height: 30px;
  width: 30px;
  margin: 10px;
`;

function CardPequeno(props) {
  return (
    <ContainerCard>
      <Icons src={props.icon} />
      <div>
        <span>{props.titulo}</span>
        <span>{props.descricao}</span>
      </div>
    </ContainerCard>
  );
}

export default CardPequeno;
