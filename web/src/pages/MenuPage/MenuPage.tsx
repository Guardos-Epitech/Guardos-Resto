import React from "react";
import { useLocation } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { List, ListItem } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

import Category from "@src/components/menu/Category/Category";
import Dish from "@src/components/menu/Dish/Dish";
import Header from "@src/components/dumpComponents/Header/Header";
import Layout from "@src/components/dumpComponents/Layout/Layout";
import styles from "@src/pages/MenuPage/MenuPage.module.scss";

import burgerImg from "@src/assets/dishImages/burger.jpg";
import pizzaImg from "@src/assets/dishImages/pizza.jpg";
import { ICategories } from "@src/model/categoryinterfaces";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FAFAFA",
    },
  },
});

interface IMenuPageProps {
  menu: [ICategories];
  restoName: string;
  address: string;
}

const MenuPage = () => {
  const { menu, restoName, address } = useLocation().state as IMenuPageProps;

  const getImg = (index: number) => {
    if (index % 3 === 0) {
      return burgerImg;
    } else if (index % 3 === 1) {
      return pizzaImg;
    } else {
      return "";
    }
  };

  return (
    <>
      <Header />
      <div className={styles.RectOnImg}>
        <List>
          <ListItem>
            <h2 className={styles.RestaurantTitle}>{restoName}</h2>
          </ListItem>
          <ListItem>
            <div className={styles.Address}>
              <ThemeProvider theme={theme}>
                <PlaceIcon color="primary" />
              </ThemeProvider>
              <span className={styles.RestaurantAddress}>{address}</span>
            </div>
          </ListItem>
        </List>
      </div>
      <Layout>
        {menu.map((category) => {
          return (
            category.dishes.length > 0 && (
              <Category key={category.name} title={category.name}>
                {category.dishes.map((dish, index) => {
                  return (
                    <Dish
                      key={dish.name + index}
                      dish={dish}
                    />
                  );
                })}
              </Category>
            )
          );
        })}
      </Layout>
    </>
  );
};

export default MenuPage;
