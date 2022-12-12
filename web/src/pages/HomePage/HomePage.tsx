import React from "react";
import styles from "./HomePage.module.scss";
import Header from "@src/components/Header/Header";
import RestoCard from "@src/components/RestoCard/RestoCard";
import Button from "@mui/material/Button";
import { NavigateTo } from "@src/utils/NavigateTo";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const PageBtn = () => {
  return createTheme({
    typography: {
      button: {
        fontFamily: "Montserrat",
        textTransform: "none",
        fontSize: "1.13rem",
        fontWeight: "500",
      },
    },
    palette: {
      primary: {
        main: "#AC2A37",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#094067",
        contrastText: "#ffffff",
      },
    },
    shape: {
      borderRadius: 5,
    },
  });
};

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.RectOnImg}>
        <span className={styles.TitleSearch}>My Restaurants</span>
      </div>
      <div className={styles.DivContent}>
        <div>
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
          <RestoCard />
        </div>
      </div>
      <div className={styles.FixedBtn}>
        <ThemeProvider theme={PageBtn()}>
          <Button
            variant="contained"
            sx={{ width: "15.13rem" }}
            onClick={() => NavigateTo("/addResto", navigate)}
          >
            Add Restaurant
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default HomePage;
