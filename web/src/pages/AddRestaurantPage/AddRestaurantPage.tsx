import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/AddRestaurantPage/AddRestaurantPage.module.scss";
import { Container, FormControl, FormHelperText, Input, InputLabel, Paper } from "@mui/material";

const AddRestaurantPage = () => {
    return (
        <div className="test">
          <Header />
          <div className={styles.RectOnImg}>
            <span className={styles.TitleSearch}>My new restaurant</span>
          </div>
          <Container maxWidth={"lg"}>
            <Paper className={styles.ContentAlignment} elevation={3} sx={{ m: 2 }}>
              {/*TODO: needs to be improved / extended*/}
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We will never share your email.</FormHelperText>
              </FormControl>
            </Paper>
          </Container>
        </div>
    );
};

export default AddRestaurantPage;
