import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/DishesPage/DishesPage.module.scss";
import { Container } from "@mui/material";

const DishesPage = () => {
    return (
        <div className="test">
          <Header />
          <div className={styles.RectOnImg}>
            <span className={styles.TitleSearch}>My dishes</span>
          </div>
          <Container maxWidth={"lg"}>
              Some Dishes...
          </Container>
        </div>
    );
};

export default DishesPage;
