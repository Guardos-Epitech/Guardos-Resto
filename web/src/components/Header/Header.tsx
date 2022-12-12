import React from "react";
import styles from "./Header.module.scss";
import logo from "@src/assets/logo.png";

const Header = () => {
  return (
    <div className={styles.BackgroundRect}>
      <span className={styles.NavTitle}>Login</span>
      <span className={styles.NavTitle}>My Restaurants</span>
      <img className={styles.LogoImg} src={logo} alt="Logo" />
      <span className={styles.NavTitle}>My Dishes</span>
      <span className={styles.NavTitle}>My Ingredients</span>
    </div>
  );
};

export default Header;
