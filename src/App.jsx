import "./App.css";
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/beers"} element={<AllBeersPage />} />
        <Route path={"/random-beer"} element={<RandomBeerPage />} />
        <Route path={"/new-beer"} element={<AddBeerPage />} />
        <Route path={"/beers/:beerId"} element={<BeerDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
