import React from "react";
import styles from "@src/components/forms/DishForm/DishForm.module.scss";
import {
  Autocomplete,
  Box, Button,
  FormControl,
  Grid, InputAdornment,
  TextField
} from "@mui/material";
import placeholderImg from "@src/assets/placeholder.png";
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

interface IDishFormProps {
  dishName?: string,
  dishProducts?: string[],
  dishDescription?: string,
  imageSrc?: string,
  price?: number,
}

interface IProduct {
  name: string;
  products: string[];
  allergens: string[];
}

const DishForm = (props: IDishFormProps) => {
  const navigate = useNavigate();
  const {dishName, dishProducts, dishDescription, price } = props;
  const imageSrc = props.imageSrc && props.imageSrc.length != 0 ? props.imageSrc : placeholderImg;

  const products:IProduct[] = [
    { name: 'Fish soup seasoning', products: ["Fish", "Water", "Salt"], allergens: ["Fish"] },
    { name: 'Butter', products: ["Butter"], allergens: ["milk"] },
    { name: 'Flour', products: ["Wheat flour"], allergens: ["gluten"] },
    { name: 'Tomato', products: ["Tomato"], allergens: [] },
    { name: 'Peanut butter', products: ["Peanuts", "oil"], allergens: ["nuts"] },
  ];
  const dishProductsList = products.filter(product => dishProducts?.includes(product.name));

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Grid className={styles.GridSpaceTop} container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={2} md={3}>
          <img className={styles.ImageDimensions} src={imageSrc} alt="Resto Img" />
          <div className={styles.FormControlMargin}>
            <FormControl className={styles.ImageFlex}>
              <ThemeProvider theme={PageBtn()}>
                <Button className={styles.FormControlMargin} variant="outlined" component="label">
                  Change Image
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Button className={styles.FormControlMargin} variant="text" component="label">
                  Delete Image
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
                <TextField
                  label="Name"
                  defaultValue={dishName}
                  id="component-outlined"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={3} md={4} className={styles.FieldMarginLeft}>
              <FormControl fullWidth>
                <TextField
                  label="Price"
                  id="outlined-end-adornment"
                  fullWidth
                  defaultValue={price?.toFixed(2)}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">€</InputAdornment>,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={8} md={12}>
              <FormControl fullWidth>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Description"
                  defaultValue={dishDescription}
                  multiline
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={8} md={12}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={products}
                getOptionLabel={(option) => (option ? (option as IProduct).name : "")}
                defaultValue={dishProductsList}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Products"
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ThemeProvider theme={PageBtn()}>
        <Button
          className={styles.SaveBtn}
          variant="contained"
          sx={{ width: "12.13rem" }}
          onClick={() => NavigateTo("/dishes", navigate, { successfulForm : true })}
        >
          Save
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default DishForm;