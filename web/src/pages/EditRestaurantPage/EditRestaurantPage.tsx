import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/EditRestaurantPage/EditRestaurantPage.module.scss";
import Layout from "../../components/Layout/Layout";
import RestaurantForm from "@src/components/RestaurantForm/RestaurantForm";

const EditRestaurantPage = () => {
  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My new restaurant</span>
      </div>
      <Layout>
        <RestaurantForm
          restaurantName={"Restaurant 1"}
          phone={"+0123 / 92"}
          street={"ABC street"}
          streetNumber={5}
          postalCode={"01234"}
          country={"Germany"}
          description={"Some description ".repeat(20)}
        />
      </Layout>
    </div>
  );
};

export default EditRestaurantPage;
