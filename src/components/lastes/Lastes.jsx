import { Link } from 'react-router-dom';
import recipes from '../../data/recipesList';

function Lastes() {
  return (
    <section className="pb-4 pt-4">
      <div className="d-flex mb-2 align-items-center">
        <h2>Lastes Recipes</h2>
        <Link to="/explore-lastes" className="ms-auto">
          View More
        </Link>
      </div>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {recipes.map(
          (recipe, index) =>
            index < 5 && (
              <Link
                to={`/recipe/${recipe._id.$oid}`}
                className="col text-center category__link"
                key={recipe._id.$oid}
              >
                <div className="lastes-recipe-card">
                  <img
                    className="lastes-recipe-image"
                    src={`image/recipes/${recipe.image}`}
                    alt={recipe.name}
                    loading="lazy"
                  />
                  <div className="pt-1 lastes-recipe-name">{recipe.name}</div>
                </div>
              </Link>
            )
        )}
      </div>
    </section>
  );
}
export default Lastes;
