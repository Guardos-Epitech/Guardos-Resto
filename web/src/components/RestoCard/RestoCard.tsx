import React, { useState } from "react";
import styles from "./RestoCard.module.scss";
import EditIcon from '@mui/icons-material/Edit';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PlaceIcon from "@mui/icons-material/Place";
import { Grid, Paper } from "@mui/material";
import DishActions from "@src/components/menu/Dish/DishActions/DishActions";
import placeholderImg from "@src/assets/placeholder.png";

import Rating from "@src/components/RestoCard/Rating/Rating";

interface IRestoCardProps {
  restoName: string,
  restoRating: number,
  restoRatingsCount: number,
  restoDescription: string,
  address: string,
  menu: any,   // TODO: replace with Menu interface
  imageSrc?: string,
  editable?: boolean
}

const RestoCard = (props: IRestoCardProps) => {
  const [extended, setExtended ] = useState(false);
  const { restoName, restoRating, restoRatingsCount, restoDescription, address, editable } = props;
  const imageSrc = props.imageSrc && props.imageSrc.length != 0 ? props.imageSrc : placeholderImg;

  const handleChildClick = (e: any) => {
    e.stopPropagation();
  };

  const handleClick = () => {
    setExtended(!extended);
  }

  return (
    <Paper className={styles.DishBox} elevation={3} onClick={handleClick}>
      <Grid container>
        <Grid item xs={3} className={styles.GridItemImage}>
          {imageSrc && <img src={imageSrc} alt={restoName} className={styles.ImageDimensions}/>}
        </Grid>

        <Grid item xs={9}  className={styles.GridItem}>
          <div className={styles.FlexParent}>
            <h3 className={styles.DishTitle}>
              {restoName}
            </h3>
            <Rating restoRating={restoRating} restoRatingsCount={restoRatingsCount} />
            { editable && <DishActions actionList={[{ actionName: "Menu", actionIcon: MenuBookIcon, actionRedirect: "/menu"}, { actionName: "Edit", actionIcon: EditIcon, actionRedirect: "/editResto"}]} className={styles.ActionMenu} onClick={handleChildClick} /> }
          </div>
          <div className={styles.FlexParent}>
            <PlaceIcon />
            <span className={styles.AddressText}>
              {address}
            </span>
          </div>
          <p className={ extended ? styles.JustificationPrintExtended : styles.JustificationPrint}>
            { restoDescription }
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RestoCard;
