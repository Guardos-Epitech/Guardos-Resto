import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import Header from "@src/components/dumpComponents/Header/Header";
import RestoCard from "@src/components/RestoCard/RestoCard";
import FixedBtn from "../../components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import Layout from "@src/components/dumpComponents/Layout/Layout";

import { IRestaurantFrontEnd } from "@src/model/IRestaurant";
import { getAllResto } from "@src/services/restoCalls";

const HomePage = () => {
   const [restoData, setRestoData] = useState<Array<IRestaurantFrontEnd>>([]);

   useEffect(() => {
      updateRestoData();
   }, []);

   const updateRestoData = () => {
     getAllResto().then((res) => {
       setRestoData(res);
     });
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
            {restoData.map((restaurant, index) => {
              return (
                <RestoCard
                  key={restaurant.name + index}
                  resto={restaurant as IRestaurantFrontEnd}
                  onUpdate={updateRestoData}
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
