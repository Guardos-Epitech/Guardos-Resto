import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  TextField
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { addNewResto, editResto } from "@src/services/restoCalls";
import { NavigateTo } from "@src/utils/NavigateTo";
import placeholderImg from "@src/assets/profile-placeholder.png";
import styles from "./RestaurantForm.module.scss";

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
      borderRadius: 5
    }
  });
};

interface IRestaurantFormProps {
  restaurantName?: string;
  street?: string;
  streetNumber?: number;
  postalCode?: string;
  city?: string;
  country?: string;
  description?: string;
  imageSrc?: string;
  phone?: string;
  add?: boolean;
}

const RestaurantForm = (props: IRestaurantFormProps) => {
  const navigate = useNavigate();
  let {
    restaurantName,
    street,
    streetNumber,
    postalCode,
    city,
    country,
    description,
    phone
  } = props;
  const origRestoName = restaurantName;
  const imageSrc =
    props.imageSrc && props.imageSrc.length !== 0
      ? props.imageSrc
      : placeholderImg;

  async function sendRequestAndGoBack() {
    const resto = {
      name: restaurantName,
      phoneNumber: phone,
      description: description,
      location: {
        streetName: street,
        streetNumber: streetNumber,
        postalCode: postalCode,
        city: city,
        country: country
      }
    };

    if (props.add) {
      await addNewResto(resto);
    } else {
      await editResto(origRestoName, resto);
    }
    return NavigateTo("/", navigate, { successfulForm: true });
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid
        className={styles.GridSpaceTop}
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={2} md={3}>
          <img
            className={styles.ImageDimensions}
            src={imageSrc}
            alt="Resto Img"
          />
          <div className={styles.FormControlMargin}>
            <FormControl className={styles.ImageFlex}>
              <ThemeProvider theme={PageBtn()}>
                <Button
                  className={styles.FormControlMargin}
                  variant="outlined"
                  component="label"
                >
                  Change Image
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Button
                  className={styles.FormControlMargin}
                  variant="text"
                  component="label"
                >
                  Delete Image
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </ThemeProvider>
            </FormControl>
          </div>
        </Grid>

        <Grid className={styles.TextNextToImageField} item xs={4} sm={6} md={9}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={5} md={8} className={styles.FieldMarginRight}>
              <FormControl fullWidth>
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  defaultValue={restaurantName}
                  label="Name"
                  onChange={(e) => (restaurantName = e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={3} md={4} className={styles.FieldMarginLeft}>
              <FormControl fullWidth>
                <InputLabel htmlFor="component-outlined">
                  Phone number
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  defaultValue={phone}
                  label="Phone number"
                  onChange={(e) => (phone = e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3} sm={7} md={10}>
              <FormControl fullWidth>
                <InputLabel htmlFor="component-outlined">
                  Street name
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  defaultValue={street}
                  label="Street name"
                  onChange={(e) => (street = e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={1} sm={1} md={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="component-outlined">
                  Street number
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  defaultValue={streetNumber}
                  label="Street number"
                  onChange={(e) => (streetNumber = parseInt(e.target.value))}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={8} md={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="component-outlined">
                  Postal code
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  defaultValue={postalCode}
                  label="Postal code"
                  onChange={(e) => (postalCode = e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="component-outlined">City</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  defaultValue={city}
                  label="City"
                  onChange={(e) => (city = e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="component-outlined">Country</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  defaultValue={country}
                  label="Country"
                  onChange={(e) => (country = e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={8} md={12}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-multiline-flexible"
                  defaultValue={description}
                  label="Description"
                  multiline
                  onChange={(e) => (description = e.target.value)}
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
          onClick={sendRequestAndGoBack}
        >
          Save
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default RestaurantForm;
