import { IDishBE } from './dishInterfaces';
import { ILocation } from './locationInterfaces';
import { IMealType } from './mealTypeInterfaces';
import { IOpeningHours, IProducts } from './restaurantInterfaces';

export interface IIngredientsCommunication {
    name?: string;
    id?: number;
}

export interface IDishesCommunication {
    name?: string;
    description?: string;
    price?: number;
    products?: string[];
    pictures?: string[];
    allergens?: string[];
    category?: {
        menuGroup: string,
        foodGroup: string,
        extraGroup: string[],
    },
}

export interface IRestaurantCommunication {
    name: string;
    phoneNumber?: string;
    website?: string;
    openingHours?: [IOpeningHours];
    pictures?: [string];
    description?: string;
    dishes?: [IDishBE];
    location?: ILocation;
    mealType?: [IMealType];
    extras?: [IDishBE];
    products?: [IProducts];
}
