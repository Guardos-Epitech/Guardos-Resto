import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/AddProductPage/AddProductPage.module.scss";
import Layout from "../../components/Layout/Layout";
import ProductForm from "@src/components/ProductForm/ProductForm";

const AddProductPage = () => {
  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My new product</span>
      </div>
      <Layout>
        <ProductForm />
      </Layout>
    </div>
  );
};

export default AddProductPage;
