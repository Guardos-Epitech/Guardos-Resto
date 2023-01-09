import React from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/AddDishPage/AddDishPage.module.scss";
import Layout from "../../components/dumpComponents/Layout/Layout";
import DishForm from "@src/components/forms/DishForm/DishForm";

const AddDishPage = () => {
  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My new dish</span>
      </div>
      <Layout>
        <DishForm add />
      </Layout>
    </div>
  );
};

export default AddDishPage;
