import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRestaurantPage from "@src/pages/AddRestaurantPage";
import MenuPage from "@src/pages/MenuPage";
import HomePage from "@src/pages/HomePage";
import ScrollToTop from "@src/components/ScrollToTop/ScrollToTop";
import IngredientsPage from "@src/pages/IngredientsPage";
import DishesPage from "@src/pages/DishesPage";
import AddDishPage from "@src/pages/AddDishPage";
import EditDishPage from "@src/pages/EditDishPage";

const MVPRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="addDish" element={<AddDishPage />} />
        <Route path="addResto" element={<AddRestaurantPage />} />
        <Route path="dishes" element={<DishesPage />} />
        <Route path="editDish" element={<EditDishPage />} />
        <Route path="ingredients" element={<IngredientsPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MVPRouter;
