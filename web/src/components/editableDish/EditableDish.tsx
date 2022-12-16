import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "@src/components/editableDish/EditableDish.module.scss";

import AllergenTags from "@src/components/menu/AllergenTags/AllergenTags";
import DishHeader from "@src/components/menu/Dish/DishHeader/DishHeader";
import placeholderImg from "@src/assets/placeholder.png";
import { NavigateTo } from "@src/utils/NavigateTo";
import { useNavigate } from "react-router-dom";

interface IEditableDishProps {
  dishName: string,
  dishAllergens: string[],
  dishDescription: string,
  imageSrc: string,
  price: number,
}

const EditableDish = (props: IEditableDishProps) => {
  const navigate = useNavigate();
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
            {/*TODO: change allergens to products list*/}
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
            {/*TODO: change allergens to products list*/}
            {extended && <AllergenTags dishAllergens={dishAllergens} titleVisible/>}
          </Grid>

        </Grid>
      </div>
      {extended &&
        <div className={styles.AttachToRightOfParent}>
          <EditIcon className={styles.IconScale} onClick={() => NavigateTo("/editDish", navigate)}/>
          <DeleteIcon className={styles.IconScale}/>
        </div>
      }
    </Paper>
  )
}

export default EditableDish;