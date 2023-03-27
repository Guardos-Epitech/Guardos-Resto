import React, { useEffect, useState } from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/DishesPage/DishesPage.module.scss";
import Layout from "../../components/dumpComponents/Layout/Layout";
import Dish from "../../components/menu/Dish/Dish";

import FixedBtn from "../../components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import { IDishFE } from "@src/model/dishInterfaces";
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
              editable
            />
          )
        })}
      </Layout>
      <FixedBtn title={"Add dish"} redirect={"/addDish"} />
      <SuccessAlert />
    </div>
  );
};

export default DishesPage;
