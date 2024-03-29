import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import styles from "@src/components/RestoCard/Rating/Rating.module.scss";

const RatingColor = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#ffe227",
        contrastText: "#000000",
      },
    },
  });
};

interface IRatingProps {
  restoRating: number,
  restoRatingsCount: number
}

const Rating = (props: IRatingProps) => {
  const { restoRating, restoRatingsCount } = props;
  const fullRating = Math.floor(restoRating);

  return (
    <ThemeProvider theme={RatingColor}>
      {[...Array(fullRating)].map((elem, index) =>
        <ThemeProvider key={index} theme={RatingColor}>
          <StarIcon
            className={styles.StarPosition}
            color="primary"
            key={index}
          />
        </ThemeProvider>
      )}
      {restoRating - fullRating > 0 &&
        <ThemeProvider theme={RatingColor}>
          <StarHalfIcon className={styles.StarPosition} color="primary" />
        </ThemeProvider>
      }
      {[...Array(Math.floor(5 - restoRating))].map((elem, index) =>
        <ThemeProvider key={index} theme={RatingColor}>
          <StarOutlineIcon
            className={styles.StarPosition}
            color="primary"
            key={index}
          />
        </ThemeProvider>
      )}
      <span className={styles.RatingCount}>
        {`(${restoRatingsCount})`}
      </span>
    </ThemeProvider>
  );
};

export default Rating;
