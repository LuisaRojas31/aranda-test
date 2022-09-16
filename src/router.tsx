import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import { Home, MainRecipes, Vegetarians } from "./pages";
import Cake from "./pages/cake";
import FastFood from "./pages/fastFood";
import Kids from "./pages/kids";
import Soups from "./pages/soups";

const Router = () => {
  return (
    <>
      <Header />
      <Banner />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vegetarianos" element={<Vegetarians />} />
        <Route path="principales" element={<MainRecipes />} />
        <Route path="tortas" element={<Cake />} />
        <Route path="rapida" element={<FastFood />} />
        <Route path="ninos" element={<Kids />} />
        <Route path="sopas" element={<Soups />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
