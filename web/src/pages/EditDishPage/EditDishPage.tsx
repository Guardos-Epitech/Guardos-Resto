import React from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/EditDishPage/EditDishPage.module.scss";
import Layout from "../../components/dumpComponents/Layout/Layout";
import DishForm from "@src/components/forms/DishForm/DishForm";
import { useLocation } from "react-router-dom";
import { IDishFE } from "@src/model/dishInterfaces";

interface IEditDishPageProps {
  dish: IDishFE;
}

const EditDishPage = () => {
  const { dish } = useLocation().state as IEditDishPageProps;
  const { name, products, description, price, allergens, resto, category } = dish;
  const selResto: string[] = [resto];
  const selAllergens: string[] = allergens.toString().split(",");
  const selCat: string[] = [category.menuGroup];

  return (
    <div className="test">
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
          selAllerg={selAllergens}
          restoName={selResto}
          selCat={selCat}
        />
      </Layout>
    </div>
  );
};

export default EditDishPage;
