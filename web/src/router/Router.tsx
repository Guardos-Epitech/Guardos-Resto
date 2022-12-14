import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRestaurantPage from "@src/pages/AddRestaurantPage";
import MenuPage from "@src/pages/MenuPage";
import HomePage from "@src/pages/HomePage";
import ScrollToTop from "@src/components/ScrollToTop/ScrollToTop";
import ProductsPage from "@src/pages/ProductsPage";
import DishesPage from "@src/pages/DishesPage";
import AddDishPage from "@src/pages/AddDishPage";
import EditDishPage from "@src/pages/EditDishPage";
import EditRestaurantPage from "@src/pages/EditRestaurantPage";
import AddProductPage from "@src/pages/AddProductPage";
import AppOutlet from "@src/pages/AppOutlet/AppOutlet";

const MVPRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppOutlet />}>
          <Route path="addDish" element={<AddDishPage />} />
          <Route path="addProduct" element={<AddProductPage />} />
          <Route path="addResto" element={<AddRestaurantPage />} />
          <Route path="dishes" element={<DishesPage />} />
          <Route path="editDish" element={<EditDishPage />} />
          <Route path="editResto" element={<EditRestaurantPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MVPRouter;
