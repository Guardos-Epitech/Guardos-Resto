import React from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/ProductsPage/ProductsPage.module.scss";
import { Grid, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AllergenTags from "@src/components/menu/AllergenTags/AllergenTags";
import FixedBtn from "@src/components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import Layout from "@src/components/dumpComponents/Layout/Layout";

interface IProduct {
  name: string,
  ingredients: string[],
  allergens: string[]
}

const products : IProduct[] = [
  {
    name: "Pasta",
    ingredients: ["Pasta", "Water"],
    allergens: ["Gluten"]
  },
  {
    name: "Pizza",
    ingredients: ["Flour", "Cheese", "Tomato"],
    allergens: ["Gluten", "Milk"]
  },
  {
    name: "Salad",
    ingredients: ["Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Oil", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil"],
    allergens: []
  },
  {
    name: "Pasta",
    ingredients: ["Pasta", "Water"],
    allergens: ["Gluten"]
  },
  {
    name: "Pizza",
    ingredients: ["Flour", "Cheese", "Tomato"],
    allergens: ["Gluten", "Milk"]
  },
  {
    name: "Salad",
    ingredients: ["Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Oil", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil"],
    allergens: []
  },
  {
    name: "Pasta",
    ingredients: ["Pasta", "Water"],
    allergens: ["Gluten"]
  },
  {
    name: "Pizza",
    ingredients: ["Flour", "Cheese", "Tomato"],
    allergens: ["Gluten", "Milk"]
  },
  {
    name: "Salad",
    ingredients: ["Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Oil", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil"],
    allergens: []
  },
  {
    name: "Pasta",
    ingredients: ["Pasta", "Water"],
    allergens: ["Gluten"]
  },
  {
    name: "Pizza",
    ingredients: ["Flour", "Cheese", "Tomato"],
    allergens: ["Gluten", "Milk"]
  },
  {
    name: "Salad",
    ingredients: ["Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Oil", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil", "Lettuce", "Tomato", "Oil"],
    allergens: []
  }
]

const ProductsPage = () => {
  return (
      <div className="test">
        <Header />
        <div className={styles.RectOnImg}>
          <span className={styles.TitleSearch}>My products</span>
        </div>
        <Layout>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={"space-between"}>
              {/*display grid item for each element in products*/}
              {products.map((product, index) => (
                <Grid item xs={6} key={index}>
                  <Paper className={styles.Product} elevation={3}>
                    <div className={styles.ProductHeader}>
                      <h3 className={styles.ProductTitle}>{product.name}</h3>
                      <DeleteIcon className={styles.ProductDeleteBtn} />
                    </div>
                    <AllergenTags dishAllergens={product.allergens} titleVisible={false}/>
                    <span className={styles.IngredientList}>{"Ingredients: " + product.ingredients.join(", ")}</span>
                  </Paper>
                </Grid>
              ))}
            </Grid>
        </Layout>
        <FixedBtn title={"Add product"} redirect={"/addProduct"}/>
        <SuccessAlert />
      </div>
  );
};

export default ProductsPage;
