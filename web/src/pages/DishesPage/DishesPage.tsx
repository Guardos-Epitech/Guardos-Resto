import React, { useEffect, useState } from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/DishesPage/DishesPage.module.scss";
import Layout from "../../components/dumpComponents/Layout/Layout";
import Dish from "../../components/menu/Dish/Dish";

import burgerImg from "@src/assets/dishImages/burger.jpg";
import pizzaImg from "@src/assets/dishImages/pizza.jpg";
import FixedBtn from "../../components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import { IDishFE } from "@src/model/IRestaurant";
import { getAllDishes } from "@src/services/dishCalls";

const DishesPage = () => {
  const [dishData, setDishData] = useState<Array<IDishFE>>([]);

  useEffect(() => {
    updateDishData();
  }, []);

  const updateDishData = () => {
    getAllDishes().then((res) => {
      setDishData(res);
    });
  }
  const dishOptions =
    "BBQ-Sauce, Apple, gluten-free bread, Sesame, Some more options to exceed one line".repeat(
      2
  );

  const getImg = (index: number) => {
    if (index % 3 === 0) {
      return burgerImg;
    } else if (index % 3 === 1) {
      return pizzaImg;
    } else {
      return "";
    }
  }

  return (
    <div className="test">
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My dishes</span>
      </div>
      <Layout>
        {dishData.map((dish, index) => {
          return (
            <Dish
              key={dish.name + index}
              dish={dish}
              onUpdate={updateDishData}
              options={dishOptions}
              imageSrc={getImg(index)}
              editable
            />
        )})}
      </Layout>
      <FixedBtn title={"Add dish"} redirect={"/addDish"} />
      <SuccessAlert />
    </div>
  );
};

export default DishesPage;
