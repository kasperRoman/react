import React from 'react'
import { useLocation } from 'react-router-dom'
import { IRecipe } from '../models/IRecipesModul';



const RecipeDetailsPage = () => {

  const location =useLocation();
  const data:IRecipe = location.state?.data
  
  
  return (
    <div>
    {data.ingredients}
    </div>
  )
}

export default RecipeDetailsPage