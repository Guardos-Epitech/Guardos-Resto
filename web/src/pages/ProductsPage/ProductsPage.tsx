import React  from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/ProductsPage/ProductsPage.module.scss";
import { Grid } from "@mui/material";
import FixedBtn from "@src/components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import Layout from "@src/components/dumpComponents/Layout/Layout";
import ProductCard from "@src/components/ProductCard/ProductCard";

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
      <div>
        <Header />
        <div className={styles.RectOnImg}>
          <span className={styles.TitleSearch}>My products</span>
        </div>
        <Layout>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={"space-between"}>
              {products.map((product, index) => (
                <ProductCard key={index} index={index} product={product} />
              ))}
            </Grid>
        </Layout>
        <FixedBtn title={"Add product"} redirect={"/addProduct"}/>
        <SuccessAlert />
      </div>
  );
};

export default ProductsPage;
