import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

import styles from "@src/components/editableDish/EditableDish.module.scss";

import AllergenTags from "@src/components/menu/AllergenTags/AllergenTags";
import DishHeader from "@src/components/menu/Dish/DishHeader/DishHeader";
import placeholderImg from "@src/assets/placeholder.png";

interface IEditableDishProps {
  dishName: string,
  dishAllergens: string[],
  dishDescription: string,
  imageSrc: string,
  price: number,
}

const EditableDish = (props: IEditableDishProps) => {
  const [extended, setExtended] = useState(false);
  const {dishName, dishAllergens, dishDescription, price } = props;
  const imageSrc = props.imageSrc && props.imageSrc.length != 0 ? props.imageSrc : placeholderImg;
  const shortenedDescription = dishDescription.substring(0, 250);

  return (
    <Paper className={styles.DishBox} elevation={3} sx={{ m: 2 }} onClick={() => setExtended(!extended)}>
      {/*mobile version of dish element*/}
      <div className={styles.MobileVersion}>
        <Grid container justifyContent={"space-between"}>

          <Grid item className={styles.GridItem}>
            <h3>
              {dishName}
            </h3>
            <h3>
              {`${price.toFixed(2)} €`}
            </h3>
          </Grid>
          <Grid item className={styles.ImageParent}>
            <img src={imageSrc} className={styles.ImageDimensions} alt={dishName} />
          </Grid>
          <Grid xs={12} className={styles.GridItemDescription}>
            <p className={styles.JustificationPrint}>
              {extended ? dishDescription : shortenedDescription}
            </p>
            {extended && <AllergenTags dishAllergens={dishAllergens} titleVisible/>}
          </Grid>

        </Grid>
      </div>


      {/*web version of dish element*/}
      <div className={styles.WebVersion}>
        <Grid container>

          <Grid item xs={9}  className={styles.GridItem}>
            <DishHeader dishName={dishName} price={price}/>
            <p className={styles.JustificationPrint}>
              {extended ? dishDescription : shortenedDescription}
            </p>
          </Grid>

          <Grid item xs={3} className={styles.GridItemImage}>
            {imageSrc && <img src={imageSrc} alt={dishName} className={styles.ImageDimensions}/>}
            {extended && <AllergenTags dishAllergens={dishAllergens} titleVisible/>}
          </Grid>

        </Grid>
      </div>
    </Paper>
  )
}

export default EditableDish;