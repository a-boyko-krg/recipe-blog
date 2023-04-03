import { Link } from 'react-router-dom';

function RecipeCategoryCard({ recipe }) {
  return (
    <div className="recipe-card">
      <Link
        to={`/recipe/${recipe._id.$oid}`}
        className="col text-center category__link"
        key={recipe._id.$oid}
      >
        <div>
          <img
            className="mt-2 recipe-card-image"
            src={`/image/recipes/${recipe.image}`}
            alt={recipe.name}
            loading="lazy"
          />
        </div>
        <div className="pt-1 recipe-name">{recipe.name}</div>
        <div className="mb-4 recipe-desc">{recipe.desc}</div>
      </Link>
    </div>
  );
}
export default RecipeCategoryCard;
