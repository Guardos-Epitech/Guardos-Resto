import React from "react";
import { useLocation } from "react-router-dom";

import DishForm from "@src/components/forms/DishForm/DishForm";
import Header from "@src/components/dumpComponents/Header/Header";
import { IDishFE } from "@src/model/IRestaurant";
import Layout from "@src/components/dumpComponents/Layout/Layout";
import styles from "@src/pages/EditDishPage/EditDishPage.module.scss";

interface IEditDishPageProps {
  dish: IDishFE;
}

const EditDishPage = () => {
  const { dish } = useLocation().state as IEditDishPageProps;
  const { name, products, description, price } = dish;

  return (
    <div>
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>Edit dish</span>
      </div>
      <Layout>
        <DishForm
          dishName={name}
          dishProducts={products}
          dishDescription={description}
          price={price}
        />
      </Layout>
    </div>
  );
};

export default EditDishPage;
