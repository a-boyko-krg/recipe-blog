import categories from '../../data/categoryList';
import { Link } from 'react-router-dom';

function CategoriesPage() {
  
  return (
    <>
      <h1 className="pb-4">Explore Categories</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Explore Categories
          </li>
        </ol>
      </nav>

      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mb-4">
        {categories.map((category, index) => (
          <Link
            to={`/categories/${category.name}`}
            className="col text-center category__link"
            key={category._id.$oid}
          >
            <div className="category__img shadow">
              <img
                src={`image/category/${category.image}`}
                alt={`${category.name} Food`}
                loading="lazy"
              />
            </div>
            <div className="pt-1">{category.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
export default CategoriesPage;
