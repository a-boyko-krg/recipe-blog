import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="row flex-lg-row-reverse align-items-center g-5 py-4 mb-4">
   <div className="col-12 col-lg-6">
      <img src="/image/hero-image.png" width="607" height="510" className="d-block mx-lg-auto img-fluid" loading="lazy"
         alt="Cooking Blog"/>
   </div>
   <div className="col-12 col-lg-6">
      <h1 className="display-5 fw-bold mb-3">
         Huge selection of delicios recipe ideas
      </h1>
      <p className="lead">
         Explore our huge selection of delicious recipe ideas including; easy desserts,
         delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes,
         family-friendly meals and gluten-free recipes.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
         <Link to="/explore-lastes" className="btn btn-primary btn-dark btn-lg px-4 me-md-2">Explore Lastes</Link>
         <Link to="/random-recipe" className="btn btn-outline-secondary btn-lg px-4 me-md-2">Show Random</Link>
      </div>
   </div>
</div>
  )
}
export default Hero