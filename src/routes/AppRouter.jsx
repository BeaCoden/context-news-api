import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/common/header/Header";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Categories from "../pages/categories/Categories";
import Contact from "../pages/contact/Contact";
import Search from "../pages/search/Search";
import Newsletter from "../pages/newsletter/Newsletter";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/categories"
            element={<Categories />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/search"
            element={<Search />}
          />
          <Route
            path="/newsletter"
            element={<Newsletter />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
