export interface IRestaurantFrontEnd {
  id: number;
  name: string;
  phoneNumber: string;
  categories: [ICategories];
  location: ILocation;
  rating: number;
  range: number
  description: string;
  hitRate: number;
  dishes: any;
  pictures: [string];
}

export interface ICategories {
  name: string;
  hitRate: number;
  dishes: [IDishFE];
}

export interface IDishFE {
  name: string;
  description: string;
  pictures: [string];
  price: number;
  products: string[];
  category: ICategoryFE;
}

interface ICategoryFE {
  foodGroup: string,
  extraGroup: string
}

interface ILocation {
  streetName: string,
  streetNumber: string,
  postalCode: string,
  country: string;
  city: string;
}
