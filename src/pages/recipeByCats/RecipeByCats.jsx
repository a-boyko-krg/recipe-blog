import { Link, useParams } from 'react-router-dom';
import recipes from '../../data/recipesList';
import RecipeCategoryCard from '../../components/recipeCategoryCard/RecipeCategoryCard';

function RecipeByCats() {
  let categoryID = useParams();

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {categoryID.id}
          </li>
        </ol>
      </nav>
      <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-2 recipe-by-cats">
        {recipes
          .filter((recipe) => recipe.category === categoryID.id)
          .map((recipe, index) => (
            <RecipeCategoryCard key={index} recipe={recipe} />
          ))}
      </div>
    </>
  );
}
export default RecipeByCats;
