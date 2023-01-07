
export interface IingredientsCommunication {
    name?: string;
    id?: number;
}

export interface IdishesCommunication {
    name?: string;
    description?: string;
    price?: number;
    products?: [string];
    pictures?: [string];
    allergens?: string;
    category?: {
        menuGroup: string,
        foodGroup: string,
        extraGroup: string,
    },
}
