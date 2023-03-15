import React from "react";

import Header from "@src/components/dumpComponents/Header/Header";
import Layout from "../../components/dumpComponents/Layout/Layout";
import RestaurantForm
  from "@src/components/forms/RestaurantForm/RestaurantForm";
import styles from "@src/pages/AddRestaurantPage/AddRestaurantPage.module.scss";

const AddRestaurantPage = () => {

  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My new restaurant</span>
      </div>
      <Layout>
        <RestaurantForm add />
      </Layout>
    </div>
  );
};

export default AddRestaurantPage;
