import React, { useState } from "react";
import styles from "@src/components/ProductCard/ProductCard.module.scss";
import { Grid, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AllergenTags from "@src/components/menu/AllergenTags/AllergenTags";

interface IProduct {
  name: string,
  ingredients: string[],
  allergens: string[]
}

interface IProductCardProps {
  index: number,
  product: IProduct
}

const ProductCard = (props: IProductCardProps) => {
  const [extended, setExtended] = useState(false);
  const { index, product } = props;

  const handleClick = () => {
    setExtended(!extended);
  };

  return (
    <Grid item xs={6} key={index} onClick={handleClick}>
      <Paper className={styles.Product} elevation={3}>
        <div className={styles.ProductHeader}>
          <h3 className={styles.ProductTitle}>{product.name}</h3>
          <DeleteIcon className={styles.ProductDeleteBtn} />
        </div>
        { extended && <AllergenTags dishAllergens={product.allergens}/> }
        <span className={extended ? styles.IngredientList : styles.IngredientListWrap}>
              <b>
                {"Ingredients: "}
              </b>
          {product.ingredients.join(", ")}</span>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
