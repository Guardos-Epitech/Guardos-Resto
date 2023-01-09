import React  from "react";
import styles from "./HomePage.module.scss";
import Header from "@src/components/dumpComponents/Header/Header";
import RestoCard from "@src/components/RestoCard/RestoCard";
import FixedBtn from "../../components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import Layout from "@src/components/dumpComponents/Layout/Layout";
import restaurantData from "@src/assets/restaurantFE.json";

import restoImg from "@src/assets/restoimg.jpeg";
import { IRestaurantFrontEnd } from "@src/model/IRestaurant";

const HomePage = () => {

  const getImg = (index: number) => {
    if (index % 2 === 0) {
      return restoImg;
    } else {
      return "";
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My Restaurants</span>
      </div>
      <Layout>
        <div className={styles.DivContent}>
          <div>
            {restaurantData.map((restaurant, index) => {
              return (
                <RestoCard
                  key={restaurant.name + index}
                  resto={restaurant as IRestaurantFrontEnd}
                  imageSrc={getImg(index)}  // TODO: replace with actual data
                  editable
                />
              );
            })}
          </div>
        </div>
      </Layout>
      <FixedBtn title={"Add Restaurant"} redirect={"/addResto"}/>
      <SuccessAlert />
    </div>
  );
};

export default HomePage;
