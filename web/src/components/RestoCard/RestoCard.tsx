import React, { useState } from "react";
import styles from "./RestoCard.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PlaceIcon from "@mui/icons-material/Place";
import { Grid, Paper } from "@mui/material";
import DishActions from "@src/components/menu/Dish/DishActions/DishActions";

import Rating from "@src/components/RestoCard/Rating/Rating";
import { IRestaurantFrontEnd } from "@src/model/restaurantInterfaces";
import { deleteResto } from "@src/services/restoCalls";

interface IRestoCardProps {
  resto: IRestaurantFrontEnd;
  onUpdate: Function;
  editable?: boolean;
}

interface IDay {
  id?: number;
  name?: string;
}

const days: IDay[] = [
  { id: 0, name: "Monday" },
  { id: 1, name: "Tuesday" },
  { id: 2, name: "Wednesday" },
  { id: 3, name: "Thursday" },
  { id: 4, name: "Friday" },
  { id: 5, name: "Saturday" },
  { id: 6, name: "Sunday" },
];

const RestoCard = (props: IRestoCardProps) => {
  const [extended, setExtended] = useState(false);
  const { onUpdate, resto, editable } = props;
  const imgStr = `${resto.pictures[0]}?auto=compress&cs=tinysrgb&h=350`;
  const address =
    `${resto.location.streetName} ${resto.location.streetNumber}` +
    `, ${resto.location.postalCode} ${resto.location.city}, ${resto.location.country}`;

  const handleChildClick = (e: any) => {
    e.stopPropagation();
  };

  const handleClick = () => {
    setExtended(!extended);
  };

  async function getOnDelete() {
    await deleteResto(resto.name);
    await onUpdate();
  }

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
            <Rating
              restoRating={resto.rating}
              restoRatingsCount={resto.ratingCount}
            />
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
                onDelete={getOnDelete}
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
          <h3>Opening hours</h3>
          {resto.openingHours.map((index, key) => (
            <div key={key} className={styles.ContainerOpeningHours}>
              <span className={styles.DaysTextValue}>{days[key].name} :</span>
              <div>
                <span className={styles.OpenCloseTextValue}>{index?.open}</span>
                <span className={styles.OpenCloseTextValue}>{index?.close}</span>
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RestoCard;
