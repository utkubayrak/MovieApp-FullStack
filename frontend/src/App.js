import "./App.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import CategoryMovies from './pages/CategoryMovies';
import NotFound from './pages/NotFound';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="details/:id" element={<MovieDetails />}></Route>
        <Route path="category" element={<Category />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="admin" element={<Admin />}></Route>
        <Route path="/:categoryName" element={<CategoryMovies />} />
        <Route path="404" element={<NotFound />}> </Route>
        <Route path="*" element={<NotFound />}> </Route>
      </Routes>
    </div>
  );
}
export default App;
