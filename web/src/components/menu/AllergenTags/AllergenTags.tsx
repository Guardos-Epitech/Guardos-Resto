import React from "react";
import {Chip} from "@mui/material";

import styles from "@src/components/menu/AllergenTags/AllergenTags.module.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Tags = () => {
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
    },
    shape: {
      borderRadius: 5,
    },
  });
};

interface IAllergenTagsProps {
  titleVisible: boolean,
  dishAllergens: string[]
}

const AllergenTags = (props: IAllergenTagsProps) => {
    const { dishAllergens, titleVisible } = props;

    return (
        <>
            {titleVisible && <p className={styles.LowerBottomMargin}>
                {"Allergens:"}
            </p>}
          <ThemeProvider theme={Tags()}>
            {dishAllergens.length != 0 && dishAllergens.map((allergen) => (
                  <Chip
                      key={allergen}
                      label={allergen}
                      color="primary"
                      variant={"filled"}
                      size="small"
                      className={styles.TagMargin}
                  />
              ))}
          </ThemeProvider>
        </>
    )
}

export default AllergenTags;