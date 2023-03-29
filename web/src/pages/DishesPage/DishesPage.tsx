import React, { useEffect, useState } from "react";

import Dish from "@src/components/menu/Dish/Dish";
import FixedBtn
  from "@src/components/dumpComponents/buttons/FixedBtn/FixedBtn";
import { getAllDishes } from "@src/services/dishCalls";
import Header from "@src/components/dumpComponents/Header/Header";
import {IDishFE} from "@src/model/dishInterfaces";
import Layout from "@src/components/dumpComponents/Layout/Layout";
import styles from "@src/pages/DishesPage/DishesPage.module.scss";
import SuccessAlert
  from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";

const DishesPage = () => {
  const [dishData, setDishData] = useState<Array<IDishFE>>([]);

  useEffect(() => {
    updateDishData();
  }, []);

  const updateDishData = () => {
    getAllDishes()
      .then((res) => {
        setDishData(res);
      });
  };

  return (
    <div>
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
              editable
            />
          );
        })}
      </Layout>
      <FixedBtn title="Add dish" redirect="/addDish" />
      <SuccessAlert />
    </div>
  );
};

export default DishesPage;
