import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { DrinkDetails } from "./pages/DrinkDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/";
import CocktailSearch from "./components/CoktailSearch";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <AppProvider>
      {" "}
      {/* AppProvider must wrap all components that use the context */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="cocktail/:id" element={<DrinkDetails />} />
          <Route path="/search/:text" element={<CocktailSearch />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
