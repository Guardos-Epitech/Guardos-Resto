import React from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/DishesPage/DishesPage.module.scss";
import Layout from "../../components/dumpComponents/Layout/Layout";
import Dish from "../../components/menu/Dish/Dish";

import FixedBtn from "../../components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import { IDishFE } from "@src/model/IRestaurant";

const DishesPage = () => {
  const dishName = "Juicy Burger";
  // const dishAllergens: string[] = ["Gluten", "Lactose", "Nuts", "Sesame", "Tree nuts"];
  const dishDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
    "Why do we use it?\n";
  const dishOptions =
    "BBQ-Sauce, Apple, gluten-free bread, Sesame, Some more options to exceed one line".repeat(
      2
    );
  const price = 10.0;
  const dish: IDishFE = {
      name: dishName,
      products: "Bread, Meat, Cheese, Sauce, Apple, Sesame",
      description: dishDescription,
      price: price,
      pictures: ["https://bildungsserver.berlin-brandenburg.de/fileadmin/_processed_/4/5/csm_map-g138e26142_640_062325fe80.jpg"],
      category: {
      foodGroup: "Main",
      extraGroup: "cheese",
      },
    // TODO: add fields
    // allergens: dishAllergens,
    // options: dishOptions,
    // image: burgerImg
  };

  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My dishes</span>
      </div>
      <Layout>
        <Dish dish={dish} options={dishOptions} editable />
        <Dish dish={dish} options={null} editable />
        <Dish dish={dish} options={dishOptions} editable />
        <Dish dish={dish} options={""} editable />
        <Dish dish={dish} options={dishOptions} editable />
        <Dish dish={dish} options={dishOptions} editable />
      </Layout>
      <FixedBtn title={"Add dish"} redirect={"/addDish"} />
      <SuccessAlert />
    </div>
  );
};

export default DishesPage;
