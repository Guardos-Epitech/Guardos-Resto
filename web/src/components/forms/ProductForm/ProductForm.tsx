import React from "react";
import styles from "@src/components/forms/ProductForm/ProductForm.module.scss";
import {
  Autocomplete,
  Box, Button, Container,
  FormControl,
  Grid,
  TextField
} from "@mui/material";
import { NavigateTo } from "@src/utils/NavigateTo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "@src/services/productCalls";
import { IIngredient, IProduct } from "@src/model/IRestaurant";

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
  productName?: string,
  productIngredients?: string[],
}

const ProductForm = (props: IDishFormProps) => {
  const navigate = useNavigate();
  let { productName, productIngredients } = props;

  const ingredients: IIngredient[] = [
    { name: 'Milk' },
    { name: 'Wheat' },
    { name: 'Egg' },
    { name: 'Tomato' },
    { name: 'Salt' },
  ];
  const productIngredientsList = ingredients.filter(product => productIngredients?.includes(product.name));

  async function sendRequestAndGoBack() {
    const product: IProduct = {
      name: productName,
      ingredients: productIngredients,
      allergens: [],
    }

    await addNewProduct(product, "burgerme"); // TODO: replace with resto group someday
    return NavigateTo("/products", navigate, { successfulForm: true });
  }

  return (
    <Container maxWidth={"md"}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Grid className={styles.GridSpaceTop} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={8} md={12}>
            <FormControl fullWidth>
              <TextField
                label="Name"
                defaultValue={productName}
                id="component-outlined"
                fullWidth
                onChange={(e) => { productName = e.target.value }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={8} md={12}>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={ingredients}
              getOptionLabel={(option) => (option ? (option as IIngredient).name : "")}
              defaultValue={productIngredientsList}
              filterSelectedOptions
              onChange={(e, value) => {
                productIngredients = value.map((ingredient: IProduct) => ingredient.name);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Ingredients"
                />
              )}
            />
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
    </Container>

  );
};

export default ProductForm;
