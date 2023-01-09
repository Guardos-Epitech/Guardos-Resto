import React, { useState } from "react";
import styles from "./RestoCard.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PlaceIcon from "@mui/icons-material/Place";
import { Grid, Paper } from "@mui/material";
import DishActions from "@src/components/menu/Dish/DishActions/DishActions";
import placeholderImg from "@src/assets/placeholder.png";

import Rating from "@src/components/RestoCard/Rating/Rating";
import { IRestaurantFrontEnd } from "@src/model/IRestaurant";

interface IRestoCardProps {
  resto: IRestaurantFrontEnd;
  imageSrc?: string;
  editable?: boolean;
}

const RestoCard = (props: IRestoCardProps) => {
  const [extended, setExtended] = useState(false);
  const { resto, editable } = props;
  const imgStr = `${props.resto.pictures[0]}?auto=compress&cs=tinysrgb&h=350`;
  const address =
    `${resto.location.streetName} ${resto.location.streetNumber}` +
    `, ${resto.location.postalCode} ${resto.location.city}, ${resto.location.country}`;

  const handleChildClick = (e: any) => {
    e.stopPropagation();
  };

  const handleClick = () => {
    setExtended(!extended);
  };

  return (
    <Paper className={styles.DishBox} elevation={3} onClick={handleClick}>
      <Grid container>
        <Grid item xs={3} className={styles.GridItemImage}>
          {
            <img
              src={imgStr}
              alt={resto.name}
              className={styles.ImageDimensions}
            />
          }
        </Grid>

        <Grid item xs={9} className={styles.GridItem}>
          <div className={styles.FlexParent}>
            <h3 className={styles.DishTitle}>{resto.name}</h3>
            <Rating restoRating={resto.rating} restoRatingsCount={78} />{/*TODO: get ratings count*/}
            {editable && (
              <DishActions
                actionList={[
                  {
                    actionName: "Menu",
                    actionIcon: MenuBookIcon,
                    actionRedirect: "/menu",
                    redirectProps: {
                      menu: resto.categories,
                      restoName: resto.name,
                      address: address,
                    },
                  },
                  {
                    actionName: "Edit",
                    actionIcon: EditIcon,
                    actionRedirect: "/editResto",
                    redirectProps: {
                      restoName: resto.name,
                      phone: resto.name,
                      street: resto.location.streetName,
                      streetNumber: resto.location.streetNumber,
                      postalCode: resto.location.postalCode,
                      city: resto.location.city,
                      country: resto.location.country,
                      description: resto.description,
                    },
                  },
                ]}
                className={styles.ActionMenu}
                onClick={handleChildClick}
              />
            )}
          </div>
          <div className={styles.FlexParent}>
            <PlaceIcon />
            <span className={styles.AddressText}>{address}</span>
          </div>
          <p
            className={
              extended
                ? styles.JustificationPrintExtended
                : styles.JustificationPrint
            }
          >
            {resto.description}
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RestoCard;
