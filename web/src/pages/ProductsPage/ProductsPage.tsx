import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/ProductsPage/ProductsPage.module.scss";
import { Container, Grid, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AllergenTags from "@src/components/menu/AllergenTags/AllergenTags";
import FixedBtn from "@src/components/FixedBtn/FixedBtn";

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
        <Container className={styles.ContainerSpace} maxWidth={"lg"}>
          <Grid container justifyContent={"space-between"}>
            {/*display grid item for each element in products*/}
            {products.map((product, index) => (
                <Grid item xs={6} key={index}>
                  <Paper className={styles.Product} elevation={3} sx={{ m: 2 }}>
                    <h3 className={styles.ProductTitle}>{product.name}</h3>
                    <AllergenTags dishAllergens={product.allergens} titleVisible={false}/>
                    <div className={styles.ProductInfo}>
                      <span className={styles.IngredientList}>{"Ingredients: " + product.ingredients.join(", ")}</span>
                      <DeleteIcon className={styles.ProductDeleteBtn} />
                    </div>
                  </Paper>
                </Grid>
            ))}
          </Grid>
        </Container>
        <FixedBtn title={"Add product"} redirect={"/addProduct"}/>
      </div>
  );
};

export default ProductsPage;
