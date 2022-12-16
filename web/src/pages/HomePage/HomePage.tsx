import React  from "react";
import styles from "./HomePage.module.scss";
import Header from "@src/components/dumpComponents/Header/Header";
import RestoCard from "@src/components/RestoCard/RestoCard";
import FixedBtn from "../../components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import Layout from "@src/components/dumpComponents/Layout/Layout";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My Restaurants</span>
      </div>
      <Layout>
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
      </Layout>
      <FixedBtn title={"Add Restaurant"} redirect={"/addResto"}/>
      <SuccessAlert />
    </div>
  );
};

export default HomePage;
