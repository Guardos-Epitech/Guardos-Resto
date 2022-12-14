import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/AddRestaurantPage/AddRestaurantPage.module.scss";
import {
  Box, Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput, TextField
} from "@mui/material";
import Layout from "../../components/Layout/Layout";
import placeholderImg from "@src/assets/profile-placeholder.png";
import { NavigateTo } from "@src/utils/NavigateTo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const PageBtn = () => {
  return createTheme({
    typography: {
      button: {
        fontFamily: "Montserrat",
        textTransform: "none",
        fontSize: "1.13rem",
        fontWeight: "500",
      },
    },
    palette: {
      primary: {
        main: "#AC2A37",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#094067",
        contrastText: "#ffffff",
      },
    },
    shape: {
      borderRadius: 5,
    },
  });
};

const AddRestaurantPage = () => {
  const navigate = useNavigate();
  // const [imageSrc, setImageSrc] = React.useState("");

  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My new restaurant</span>
      </div>
      <Layout>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
          <Grid className={styles.GridSpaceTop} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={2} md={3}>
              <img className={styles.ImageDimensions} src={placeholderImg} alt="Resto Img" />
              <div className={styles.FormControlMargin}>
                <FormControl className={styles.ImageFlex}>
                  <ThemeProvider theme={PageBtn()}>
                    <Button className={styles.FormControlMargin} variant="outlined" component="label">
                    Change Image
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  </ThemeProvider>
                </FormControl>
              </div>
            </Grid>

            <Grid className={styles.TextNextToImageField} item xs={4} sm={6} md={9}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={5} md={8} className={styles.FieldMarginRight}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      // defaultValue="Composed TextField"
                      label="Name"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={3} md={4} className={styles.FieldMarginLeft}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined">Phone number</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      label="Phone number"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={3} sm={7} md={10}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined">Street name</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      label="Street name"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={1} sm={1} md={2}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined">Street number</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      label="Street number"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined">Postal code</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      label="Postal code"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined">Country</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      label="Country"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={12}>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Description"
                      multiline
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ThemeProvider theme={PageBtn()}>
            <Button
              className={styles.SaveBtn}
              variant="contained"
              sx={{ width: "12.13rem" }}
              onClick={() => NavigateTo("/", navigate)}
            >
              Save
            </Button>
          </ThemeProvider>
         </Box>
      </Layout>
    </div>
  );
};

export default AddRestaurantPage;
