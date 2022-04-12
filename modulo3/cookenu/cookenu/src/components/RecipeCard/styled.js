import styled from "styled-components";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

export const RecipeCardContainer = styled(Card)`
  width: 250px;
  margin: 10px;
`;

export const RecipeCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;