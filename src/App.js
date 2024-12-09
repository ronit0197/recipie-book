import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ResponsiveNavbar from "./Components/Navbar";
import "./Style/App.scss"
import Recipe from "./Pages/Recipe";
import Footer from "./Components/Footer";
import Search from "./Pages/Search";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search/:s" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;