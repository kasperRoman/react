import React, { useEffect, useState } from "react";
import { IRecipe } from "../../models/IRecipesModul";
import { getRecipes } from "../../services/dummyApi.servece";
import Recipe from "../recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  useEffect(() => {
    getRecipes().then((response) => setRecipes(response));
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe item={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default Recipes;
