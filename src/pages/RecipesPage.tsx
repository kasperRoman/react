import React from "react";
import Recipes from "../components/recipes/Recipes";
import { Outlet } from "react-router-dom";

const RecipesPage = () => {
  return (
    <div>
      <Recipes />
      <hr />
      <Outlet/>
      <hr />
    </div>
  );
};

export default RecipesPage;
