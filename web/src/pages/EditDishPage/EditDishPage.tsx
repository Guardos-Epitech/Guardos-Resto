import React from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/EditDishPage/EditDishPage.module.scss";
import Layout from "../../components/dumpComponents/Layout/Layout";
import DishForm from "@src/components/forms/DishForm/DishForm";

const EditDishPage = () => {
  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>Edit dish</span>
      </div>
      <Layout>
        <DishForm dishName={"Fish soup"} dishProducts={["Fish soup seasoning", "Flour", "Butter"]} dishDescription={"Some description ".repeat(20)} price={10} />
      </Layout>
    </div>
  );
};

export default EditDishPage;
