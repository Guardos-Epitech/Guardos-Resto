import axios from 'axios';
import { IProduct } from "@src/model/restaurantInterfaces";

const baseUrl = 'http://localhost:8082/';

export const getAllRestoProducts = async (restoName: string) => {
  const response = await axios({
    method: 'GET',
    url: baseUrl + 'api/products/' + restoName
  });
  return response.data;
};

export const getAllProducts = async () => {
  const response = await axios({
    method: 'GET',
    url: baseUrl
  });
  return response.data;
};

export const addNewProduct = async (product: IProduct, restoName: string) => {
  const response = await axios({
    url: baseUrl,
    method: 'POST',
    data: JSON.stringify({
      name: product.name,
      ingredients: product.ingredients,
      allergens: product.allergens,
      resto: restoName
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export const deleteProduct = async (product: any) => {
  const response = await axios({
    url: baseUrl,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(product)
  });
  return response.data;
};
