import React from "react";
import { CardActionArea } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { RecipeCardContent } from "./styled";
import { RecipeCardContainer } from "./styled";

const RecipeCard = (props) => {
  return (
    <RecipeCardContainer>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt={props.title}
          height={"150px"}
          image={props.image}
          title={props.title}
        />
        <RecipeCardContent>
          <Typography align={"center"}>{props.title.toUpperCase()}</Typography>
        </RecipeCardContent>
      </CardActionArea>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
