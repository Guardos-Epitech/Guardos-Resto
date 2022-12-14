import React from "react";
import Header from "@src/components/Header/Header";
import styles from "@src/pages/IngredientsPage/IngredientsPage.module.scss";
import { Container, Grid, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AllergenTags from "@src/components/menu/AllergenTags/AllergenTags";
import FixedBtn from "@src/components/FixedBtn/FixedBtn";

interface IIngredient {
  name: string,
  ingredients: string[],
  allergens: string[]
}

const ingredients : IIngredient[] = [
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

const IngredientsPage = () => {
  return (
      <div className="test">
        <Header />
        <div className={styles.RectOnImg}>
          <span className={styles.TitleSearch}>My products</span>
        </div>
        <Container className={styles.ContainerSpace} maxWidth={"lg"}>
          <Grid container justifyContent={"space-between"}>
            {/*display grid item for each element in ingredients*/}
            {ingredients.map((ingredient, index) => (
                <Grid item xs={6} key={index}>
                  <Paper className={styles.Ingredient} elevation={3} sx={{ m: 2 }}>
                    <h3 className={styles.IngredientTitle}>{ingredient.name}</h3>
                    <AllergenTags dishAllergens={ingredient.allergens} titleVisible={false}/>
                    <div className={styles.IngredientInfo}>
                      <span className={styles.IngredientList}>{"Ingredients: " + ingredient.ingredients.join(", ")}</span>
                      <DeleteIcon className={styles.IngredientDeleteBtn} />
                    </div>
                  </Paper>
                </Grid>
            ))}
          </Grid>
        </Container>
        <FixedBtn title={"Add ingredient"} redirect={"/ingredients"}/>
      </div>
  );
};

export default IngredientsPage;