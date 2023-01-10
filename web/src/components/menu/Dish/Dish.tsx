import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

import styles from "@src/components/menu/Dish/Dish.module.scss";

import AllergenTags from "@src/components/menu/AllergenTags/AllergenTags";
import DishActions from "@src/components/menu/Dish/DishActions/DishActions";
import EditIcon from "@mui/icons-material/Edit";
import { IDishFE } from "@src/model/IRestaurant";
import { deleteDish } from "@src/services/dishCalls";

interface IEditableDishProps {
  dish: IDishFE;
  onUpdate?: Function;
  imageSrc?: string;
  editable?: boolean;
}

const Dish = (props: IEditableDishProps) => {
  const [extended, setExtended] = useState(false);
  const { onUpdate, dish, editable } = props;
  const options = dish.category.extraGroup
  const { name, products, description, price, pictures } = dish;
  const imgStr = `${pictures[0]}?auto=compress&cs=tinysrgb&h=350`;
  const priceStr = `${price.toFixed(2)} €`;

  const handleChildClick = (e: any) => {
    e.stopPropagation();
  };

  const handleClick = () => {
    setExtended(!extended);
  };

  async function getOnDelete() {
    await deleteDish("burgerme", name);
    if (onUpdate) {
      await onUpdate();
    }
  }

  return (
    <Paper className={styles.DishBox} elevation={3} onClick={handleClick}>
      {/*mobile version of dish element*/}
      <div className={styles.MobileVersion}>
        <Grid container justifyContent={"space-between"}>
          <Grid
            item
            className={extended ? styles.GridItem : styles.FlexGridItem}
          >
            <div className={styles.FlexParent}>
              <h3 className={styles.DishTitle}>{name}</h3>
              {editable && (
                <DishActions
                  actionList={[
                    {
                      actionName: "Edit",
                      actionIcon: EditIcon,
                      actionRedirect: "/editDish",
                      redirectProps: {
                        dish: dish,
                      },
                    },
                  ]}
                  onDelete={getOnDelete}
                  onClick={handleChildClick}
                />
              )}
            </div>
            {extended && <AllergenTags dishAllergens={products} />}
          </Grid>
          <Grid item className={styles.FlexParent}>
            <img
                src={imgStr}
                alt="new"
                className={styles.ImageDimensions}
            />;
          </Grid>
          <Grid item xs={12} className={styles.GridItemDescription}>
            <p
              className={
                extended
                  ? styles.JustificationPrintExtended
                  : styles.JustificationPrint
              }
            >
              {description}
            </p>
            <span className={styles.OptionsText}>
              {options && options.length != 0 && (
                <div className={!extended && styles.OptionsWrap}>
                  <b>{"Options: "}</b>
                  {options}
                </div>
              )}
            </span>
            <h3>{`${price.toFixed(2)} €`}</h3>
          </Grid>
        </Grid>
      </div>

      {/*web version of dish element*/}
      <div className={styles.WebVersion}>
        <Grid container>
          <Grid item xs={10} className={styles.GridItem}>
            <div className={styles.FlexParent}>
              <h3 className={styles.DishTitle}>{name}</h3>
              {editable && (
                <DishActions
                  actionList={[
                    {
                      actionName: "Edit",
                      actionIcon: EditIcon,
                      actionRedirect: "/editDish",
                      redirectProps: {
                        dish: dish,
                      },
                    },
                  ]}
                  onDelete={getOnDelete}
                  onClick={handleChildClick}
                />
              )}
            </div>
            {extended && <AllergenTags dishAllergens={products} />}
            <p
              className={
                extended
                  ? styles.JustificationPrintExtended
                  : styles.JustificationPrint
              }
            >
              {description}
            </p>
            <span className={styles.OptionsText}>
              {options && options.length != 0 && (
                <div className={!extended && styles.OptionsWrap}>
                  <b>{"Options: "}</b>
                  {options}
                </div>
              )}
            </span>
            <h3 className={styles.DishPrice}>{priceStr}</h3>
          </Grid>

          <Grid item xs={2} className={styles.GridItemImage}>
            {
              <img src={imgStr}
                   alt="new"
                   className={styles.ImageDimensions}
              />
            }
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default Dish;
