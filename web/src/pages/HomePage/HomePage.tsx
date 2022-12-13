import React from "react";
import styles from "./HomePage.module.scss";
import Header from "@src/components/Header/Header";
import RestoCard from "@src/components/RestoCard/RestoCard";
import FixedBtn from "../../components/FixedBtn/FixedBtn";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My Restaurants</span>
      </div>
      <div className={styles.DivContent}>
        <div>
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
        </div>
      </div>
      <FixedBtn title={"Add Restaurant"} redirect={"/addResto"}/>
    </div>
  );
};

export default HomePage;
