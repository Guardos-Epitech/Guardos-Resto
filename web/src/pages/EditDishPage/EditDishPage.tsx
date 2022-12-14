import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/EditDishPage/EditDishPage.module.scss";
import Layout from "../../components/Layout/Layout";
import DishForm from "@src/components/DishForm/DishForm";

const EditDishPage = () => {
  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>Edit restaurant</span>
      </div>
      <Layout>
        <DishForm dishName={"Fish soup"} dishIngredients={["Fish soup seasoning", "Flour", "Butter"]} dishDescription={"Some description ".repeat(20)} price={10} />
      </Layout>
    </div>
  );
};

export default EditDishPage;