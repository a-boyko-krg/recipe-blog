import { Link } from 'react-router-dom';

export default function RecipeSingleCard({ recipe }) {
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
          <li className="breadcrumb-item active page-item" aria-current="page">
            {recipe.name}
          </li>
        </ol>
      </nav>

      <div className="row recipe-wrapper">
        <div className="col-12">
          <h1 className="recipe-title">{recipe.name}</h1>
        </div>
        <div className="col-12 recipe-cat">
          <i className="bi bi-tag"></i>
          {recipe.category}
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-4">
            <img
              className="img-fluid sticky-top"
              src={`/image/recipes/${recipe.image}`}
              alt={recipe.name}
              loading="lazy"
            />
          </div>
          <div className="col-12 col-md-8">
            <div className="col-12">
              <p className="singlePostDesc">{recipe.desc}</p>
            </div>

            <div className="col-12">
              <h3 className="recipe-subtitle">Інгредієнти</h3>
              <ul className="list-group list-group-flush">
                {recipe.products.split(';').map((ingredients) => (
                  <li className="list-item products-item" key={ingredients}>
                    {ingredients}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="recipe-subtitle">Спосіб приготування</h3>
            <ol className="list-group list-group-flush">
              {recipe.method.split(';').map((method) => (
                <li className="list-item method-item" key={method}>
                  {method}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
