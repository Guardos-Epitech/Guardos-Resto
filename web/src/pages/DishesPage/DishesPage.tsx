import React from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/DishesPage/DishesPage.module.scss";
import Layout from "../../components/dumpComponents/Layout/Layout";
import Dish from "../../components/menu/Dish/Dish";

import burgerImg from "@src/assets/dishImages/burger.jpg";
import pizzaImg from "@src/assets/dishImages/pizza.jpg";
import FixedBtn from "../../components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";

const DishesPage = () => {
  const dishName = "Juicy Burger";
  const dishAllergens: string[] = ["Gluten", "Lactose", "Nuts", "Sesame", "Tree nuts"];
  const dishDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
    "Why do we use it?\n";
  const dishOptions = "BBQ-Sauce, Apple, gluten-free bread";
  const price = 10.00;

  return (
      <div className="test">
        <Header />
        <div className={styles.RectOnImg}>
          <span className={styles.TitleSearch}>My dishes</span>
        </div>
        <Layout>
          <Dish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} options={dishOptions} imageSrc={burgerImg} price={price} editable/>
          <Dish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} options={null} imageSrc={pizzaImg} price={price} editable/>
          <Dish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} options={dishOptions} imageSrc={burgerImg} price={price} editable/>
          <Dish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} options={""} imageSrc={""} price={price} editable/>
          <Dish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} options={dishOptions} imageSrc={burgerImg} price={price} editable/>
          <Dish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} options={dishOptions} imageSrc={burgerImg} price={price} editable/>
        </Layout>
        <FixedBtn title={"Add dish"} redirect={"/addDish"}/>
        <SuccessAlert />
      </div>
  );
};

export default DishesPage;
