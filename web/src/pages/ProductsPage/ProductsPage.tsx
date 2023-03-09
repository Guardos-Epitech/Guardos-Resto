import React, { useEffect, useState } from "react";
import Header from "@src/components/dumpComponents/Header/Header";
import styles from "@src/pages/ProductsPage/ProductsPage.module.scss";
import { Grid } from "@mui/material";
import FixedBtn from "@src/components/dumpComponents/buttons/FixedBtn/FixedBtn";
import SuccessAlert from "@src/components/dumpComponents/SuccessAlert/SuccessAlert";
import Layout from "@src/components/dumpComponents/Layout/Layout";
import ProductCard from "@src/components/ProductCard/ProductCard";
import { getAllProducts } from "@src/services/productCalls";
import { IProduct } from "@src/model/IRestaurant";

const ProductsPage = () => {
  const [productData, setProductData] = useState<Array<IProduct>>([]);

  useEffect(() => {
    updateProductData();
  }, []);

  const updateProductData = () => {
    getAllProducts().then((res) => {
      setProductData(res);
    });
  }

  return (
    <div>
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My products</span>
      </div>
      <Layout>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={"space-between"}>
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              index={index}
              product={product}
              onUpdate={updateProductData}
            />
          ))}
        </Grid>
      </Layout>
      <FixedBtn title={"Add product"} redirect={"/addProduct"} />
      <SuccessAlert />
    </div>
  );
};

export default ProductsPage;
