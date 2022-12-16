import React from "react";
import {Chip} from "@mui/material";

import styles from "@src/components/menu/AllergenTags/AllergenTags.module.scss";

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
            {dishAllergens.length != 0 && dishAllergens.map((allergen) => (
                <Chip
                    key={allergen}
                    label={allergen}
                    color="error"
                    variant="outlined"
                    size="small"
                    sx={{ m: 0.5 }}
                />
            ))}
        </>
    )
}

export default AllergenTags;