import { Link } from 'react-router-dom';
import categories from '../../data/categoryList';


function Category() {
   
  return (
    <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 py-4">
      {categories.map(
        (category, index) =>
          index < 5 && (
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
          )
      )}

      <Link to="/categories" className="col text-center category__link">
        <div className="category__img shadow">
          <img
            src="image/category/view-all.jpg"
            alt="View All Categores"
            loading="lazy"
          />
        </div>
        <div className="pt-1">View All</div>
      </Link>
    </div>
  );
}
export default Category;
