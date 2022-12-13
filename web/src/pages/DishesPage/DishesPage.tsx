import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/DishesPage/DishesPage.module.scss";
import Layout from "../../components/Layout/Layout";
import EditableDish from "../../components/editableDish/EditableDish";

import burgerImg from "@src/assets/dishImages/burger.jpg";
import pizzaImg from "@src/assets/dishImages/pizza.jpg";
import FixedBtn from "../../components/FixedBtn/FixedBtn";

const DishesPage = () => {
  const dishName = "Juicy Burger";
  const dishAllergens: string[] = ["Gluten", "Lactose", "Nuts", "Sesame", "Tree nuts"];
  const dishDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
    "Why do we use it?\n";
  const price = 10.00;

  return (
      <div className="test">
        <Header />
        <div className={styles.RectOnImg}>
          <span className={styles.TitleSearch}>My dishes</span>
        </div>
        <Layout>
          <EditableDish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} imageSrc={burgerImg} price={price} />
          <EditableDish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} imageSrc={pizzaImg} price={price} />
          <EditableDish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} imageSrc={burgerImg} price={price} />
          <EditableDish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} imageSrc={""} price={price} />
          <EditableDish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} imageSrc={burgerImg} price={price} />
          <EditableDish dishName={dishName} dishAllergens={dishAllergens} dishDescription={dishDescription} imageSrc={burgerImg} price={price} />
        </Layout>
        <FixedBtn title={"Add dish"} redirect={"/dishes"}/>
      </div>
  );
};

export default DishesPage;
