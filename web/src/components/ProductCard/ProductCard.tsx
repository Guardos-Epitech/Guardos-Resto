import React, { useState } from "react";
import styles from "@src/components/ProductCard/ProductCard.module.scss";
import { Grid, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AllergenTags from "@src/components/menu/AllergenTags/AllergenTags";
import { deleteProduct } from "@src/services/productCalls";
import { IProduct } from "@src/model/restaurantInterfaces";

interface IProductCardProps {
  index: number;
  product: IProduct;
  onUpdate: Function;
}

const ProductCard = (props: IProductCardProps) => {
  const [extended, setExtended] = useState(false);
  const { index, product, onUpdate } = props;

  const handleChildClick = async (e: any) => {
    e.stopPropagation();
    await deleteProduct(product);
    if (onUpdate) {
      await onUpdate();
    }
  };

  const handleClick = () => {
    setExtended(!extended);
  };

  return (
    <Grid item xs={6} key={index} onClick={handleClick}>
      <Paper className={styles.Product} elevation={3}>
        <div className={styles.ProductHeader}>
          <h3 className={styles.ProductTitle}>{product.name}</h3>
          <DeleteIcon
            className={styles.ProductDeleteBtn}
            onClick={handleChildClick}
          />
        </div>
        {extended && product.allergens && (
          <AllergenTags dishAllergens={product.allergens} />
        )}
        {product.ingredients?.length > 0 && (
          <span
            className={
              extended ? styles.IngredientList : styles.IngredientListWrap
            }
          >
            <b>{"Ingredients: "}</b>
            {product.ingredients?.join(", ")}
          </span>
        )}
      </Paper>
    </Grid>
  );
};

export default ProductCard;
