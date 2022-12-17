import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

import styles from "@src/components/menu/Dish/Dish.module.scss";

import AllergenTags from "@src/components/menu/AllergenTags/AllergenTags";
import placeholderImg from "@src/assets/placeholder.png";
import DishActions from "@src/components/menu/Dish/DishActions/DishActions";

interface IEditableDishProps {
  dishName: string,
  dishAllergens: string[],
  dishDescription: string,
  options?: string,
  imageSrc?: string,
  price: number,
  editable?: boolean
}

const Dish = (props: IEditableDishProps) => {
  const [extended, setExtended] = useState(false);
  const {dishName, dishAllergens, dishDescription, options, price, editable } = props;
  const imageSrc = props.imageSrc && props.imageSrc.length != 0 ? props.imageSrc : placeholderImg;
  const shortenedDescription = dishDescription.substring(0, 150);
  const priceStr = `${price.toFixed(2)} €`;

  const handleChildClick = (e: any) => {
    e.stopPropagation();
  };

  const handleClick = () => {
    setExtended(!extended);
  }

  return (
    <Paper className={styles.DishBox} elevation={3} onClick={handleClick}>
      {/*mobile version of dish element*/}
      <div className={styles.MobileVersion}>
        <Grid container justifyContent={"space-between"}>
          <Grid item className={extended ? styles.GridItem : styles.FlexGridItem}>
            <div className={styles.FlexParent}>
              <h3 className={styles.DishTitle}>
                {dishName}
              </h3>
              { editable && <DishActions onClick={handleChildClick} /> }
            </div>
            {/*TODO: change allergens to products list*/}
            {extended && <AllergenTags dishAllergens={dishAllergens}/>}
          </Grid>
          <Grid item className={styles.FlexParent}>
            <img src={imageSrc} className={styles.ImageDimensions} alt={dishName} />
          </Grid>
          <Grid item xs={12} className={styles.GridItemDescription}>
            <p className={styles.JustificationPrint}>
              {extended ? dishDescription : shortenedDescription}
            </p>
            <span className={styles.OptionsText}>
              {(options && options.length != 0) &&
                <div>
                  <b>
                    {"Options: "}
                  </b>
                  {options}
                </div>
              }
            </span>
            <h3>
              {`${price.toFixed(2)} €`}
            </h3>
          </Grid>
        </Grid>
      </div>


      {/*web version of dish element*/}
      <div className={styles.WebVersion}>
        <Grid container>

          <Grid item xs={10}  className={styles.GridItem}>
            <div className={styles.FlexParent}>
              <h3 className={styles.DishTitle}>
                {dishName}
              </h3>
              { editable && <DishActions onClick={handleChildClick} /> }
            </div>
            {/*TODO: change allergens to products list*/}
            {extended && <AllergenTags dishAllergens={dishAllergens}/>}
            <p className={styles.JustificationPrint}>
              {extended ? dishDescription : shortenedDescription}
            </p>
            <span className={styles.OptionsText}>
              {(options && options.length != 0) &&
                <div>
                  <b>
                    {"Options: "}
                  </b>
                  {options}
                </div>
              }
            </span>
            <h3 className={styles.DishPrice}>
              {priceStr}
            </h3>
          </Grid>

          <Grid item xs={2} className={styles.GridItemImage}>
            {imageSrc && <img src={imageSrc} alt={dishName} className={styles.ImageDimensions}/>}
          </Grid>
        </Grid>
      </div>
    </Paper>
  )
}

export default Dish;