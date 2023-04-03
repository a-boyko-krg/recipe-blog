import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CategoriesPage from './pages/categories/CategoriesPage';
import HomePage from './pages/home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipePage from './pages/recipe/RecipePage';
import RecipeByCats from './pages/recipeByCats/RecipeByCats';
import SearchPage from './pages/search/SearchPage';

export default function App() {
  return (
    <Router>
      <div className="container-xxl px-md-5 bg-white shadow-lg">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<RecipeByCats />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
