import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../../data/recipesList';
import RecipeSingleCard from '../../components/recipeSingleCard/RecipeSingleCard';

function RecipePage() {
  let recipeID = useParams();

  return (
    <div className="singleRecipe">
      {recipes
        .filter((recipe) => recipe._id.$oid === recipeID.id)
        .map((recipe, index) => (
          <RecipeSingleCard key={index} recipe={recipe} />
        ))}
    </div>
  );
}
export default RecipePage;
