import React, { FC } from "react";
import { IRecipe } from "../../models/IRecipesModul";
import { Link } from "react-router-dom";
type RecipeProps = {
  item: IRecipe;
};

const Recipe: FC<RecipeProps> = ({ item }) => {
  return( 
    
  <div>
    <Link state={{data:item}} to={item.id.toString()}>{item.name}</Link>
    
    </div>
  )
};

export default Recipe;
