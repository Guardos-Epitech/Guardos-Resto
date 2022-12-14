import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/AddDishPage/AddDishPage.module.scss";
import Layout from "../../components/Layout/Layout";
import DishForm from "@src/components/DishForm/DishForm";

const AddDishPage = () => {
  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My new restaurant</span>
      </div>
      <Layout>
        <DishForm />
      </Layout>
    </div>
  );
};

export default AddDishPage;
