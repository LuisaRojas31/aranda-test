import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import { Home } from "./pages";

const Router = () => {
  return (
    <>
      <Header />
      <Banner />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vegetarianos" element={<div>vegetarianos</div>} />
        <Route path="principales" element={<div>principales</div>} />
        <Route path="tortas" element={<div>tortas</div>} />
        <Route path="rapida" element={<div>rapida</div>} />
        <Route path="ninos" element={<div>ninos</div>} />
        <Route path="sopas" element={<div>sopas</div>} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
