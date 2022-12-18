import React  from "react";
import styles from "./HomePage.module.scss";
import Header from "@src/components/dumpComponents/Header/Header";
import RestoCard from "@src/components/RestoCard/RestoCard";
import FixedBtn from "../../components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import Layout from "@src/components/dumpComponents/Layout/Layout";

import restoimg from "@src/assets/restoimg.jpeg";

const HomePage = () => {
  const restoName = "My Restaurant";
  const restoDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
    "Why do we use it?\n";
  const restoAddress = "ABC street, 12345 Berlin";
  const ratingCount = 78;

  return (
    <div>
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My Restaurants</span>
      </div>
      <Layout>
        <div className={styles.DivContent}>
          <div>
            <RestoCard restoName={restoName} restoRating={5} restoRatingsCount={ratingCount} restoDescription={restoDescription} address={restoAddress} menu={{}} imageSrc={restoimg} editable />
            <RestoCard restoName={restoName} restoRating={4} restoRatingsCount={ratingCount} restoDescription={restoDescription} address={restoAddress} menu={{}} imageSrc={restoimg} editable />
            <RestoCard restoName={restoName} restoRating={1.5} restoRatingsCount={ratingCount} restoDescription={restoDescription} address={restoAddress} menu={{}} imageSrc={""} editable />
            <RestoCard restoName={restoName} restoRating={4} restoRatingsCount={ratingCount} restoDescription={restoDescription} address={restoAddress} menu={{}} imageSrc={restoimg} editable />
            <RestoCard restoName={restoName} restoRating={5} restoRatingsCount={ratingCount} restoDescription={restoDescription} address={restoAddress} menu={{}} imageSrc={restoimg} editable />
            <RestoCard restoName={restoName} restoRating={4.5} restoRatingsCount={ratingCount} restoDescription={restoDescription} address={restoAddress} menu={{}} imageSrc={restoimg} editable />
          </div>
        </div>
      </Layout>
      <FixedBtn title={"Add Restaurant"} redirect={"/addResto"}/>
      <SuccessAlert />
    </div>
  );
};

export default HomePage;
