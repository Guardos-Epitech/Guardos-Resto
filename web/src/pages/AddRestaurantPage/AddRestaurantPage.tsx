import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/AddRestaurantPage/AddRestaurantPage.module.scss";
import {
  Box, Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Layout from "../../components/Layout/Layout";
import placeholderImg from "@src/assets/profile-placeholder.png";

const AddRestaurantPage = () => {
  // const [imageSrc, setImageSrc] = React.useState("");

  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My new restaurant</span>
      </div>
      <Layout>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Grid container>
            <Grid item xs={3}>
              <img className={styles.ImageDimensions} src={placeholderImg} alt="Resto Img" />
              <div className={styles.FormControlMargin}>
                <FormControl>
                  <Button className={styles.FormControlMargin} variant="contained" component="label">
                    Upload Image
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </FormControl>
              </div>
            </Grid>

            <Grid container item xs={9}>
              <Grid item xs={8} className={styles.FieldMargin}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="component-outlined">Name</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    // defaultValue="Composed TextField"
                    label="Name"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4} className={styles.FieldMargin}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="component-outlined">Phone number</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    label="Phone number"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={10}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="component-outlined">Street name</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    label="Street name"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="component-outlined">Street number</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    label="Street number"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="component-outlined">Postal code</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    label="Postal code"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="component-outlined">Country</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    label="Country"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="component-outlined">Description</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  label="Description"
                />
              </FormControl>
            </Grid>
          </Grid>
         </Box>
      </Layout>
    </div>
  );
};

export default AddRestaurantPage;
