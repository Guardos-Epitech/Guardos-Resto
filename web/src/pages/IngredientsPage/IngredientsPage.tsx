import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/IngredientsPage/IngredientsPage.module.scss";
import { Container } from "@mui/material";

const IngredientsPage = () => {
    return (
        <div className="test">
          <Header />
          <div className={styles.RectOnImg}>
            <span className={styles.TitleSearch}>My ingredients</span>
          </div>
          <Container maxWidth={"lg"}>
              Some ingredients...
          </Container>
        </div>
    );
};

export default IngredientsPage;
