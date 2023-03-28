import React, { useEffect, useState } from "react";
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
import { getAllRestoProducts, getAllProducts } from "@src/services/productCalls";
import { addNewDish, editDish } from "@src/services/dishCalls";
import { IProduct, IRestaurantFrontEnd, IRestoName } from "@src/model/restaurantInterfaces";
import { IDishFE } from "@src/model/dishInterfaces";
import { getAllResto } from "@src/services/restoCalls";

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
  add?: boolean
}

const DishForm = (props: IDishFormProps) => {
  const navigate = useNavigate();
  let restoName = "" as string;
  let { dishName, dishProducts, dishDescription, price } = props;
  const imageSrc = props.imageSrc && props.imageSrc.length != 0 ? props.imageSrc : placeholderImg;
  const [productList, setProductList] = useState<Array<IProduct>>([]);
  const [restoList, setRestoList] = useState<Array<IRestaurantFrontEnd>>([]);
  let dishProductsList = [] as IProduct[];
  let restoNameList = [] as IRestoName[];
  let restotmp: string[] = [];

  useEffect(() => {
    getAllProducts().then((res) => {
      setProductList(res);
      dishProductsList = res.filter((product: IProduct) => dishProducts?.includes(product.name));
    });
  }, []);

  useEffect(() => {
    getAllResto().then((res) => {
      setRestoList(res);
      restoNameList = restoList.map((restaurant) => ({ name: restaurant.name }));
    });
  }, []);

  async function sendRequestAndGoBack() {
    const dish: IDishFE = {
      name: dishName,
      description: dishDescription,
      price: price,
      products: dishProducts,
      allergens: "milk,gluten,nuts",
      category: {
        foodGroup: "Main",
        extraGroup: "",
      }
    }

    if (props.add) {
      await addNewDish(restoName, dish);
    } else {
      await editDish(restoName, dish);
    }
    return NavigateTo("/dishes", navigate, { successfulForm: true });
  }

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
                  onChange={(e) => { dishName = e.target.value }}
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
                  onChange={(e) => { price = parseInt(e.target.value) }}
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
                  onChange={(e) => { dishDescription = e.target.value }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={8} md={12}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={productList}
                getOptionLabel={(option) => (option ? (option as IProduct).name : "")}
                defaultValue={dishProductsList}
                filterSelectedOptions
                onChange={(e, value) => {
                  dishProducts = value.map((product: IProduct) => product.name);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Products"
                  />
                )}
              />
            </Grid>
            <Grid item xs={4} sm={8} md={12}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={restoList}
                getOptionLabel={(option) => (option ? (option as IRestoName).name : "")}
                defaultValue={restoNameList}
                filterSelectedOptions
                onChange={(e, value) => {
                  restotmp = value.map((restoNameVar: IRestoName) => restoNameVar.name);
                  restoName = restotmp[0];
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Restaurant"
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
          onClick={sendRequestAndGoBack}
        >
          Save
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default DishForm;
