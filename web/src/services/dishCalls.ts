import axios from 'axios';

const baseUrl = 'http://localhost:8082/api/dishes/';

export const getAllDishes = async () => {
  const response = await axios({
    method: 'GET',
    url: baseUrl,
  });
  return response.data;
}

export const addNewDish = async (restoName: string, body: any) => {
  const response = await axios({
    url: baseUrl + restoName,
    method: 'POST',
    data: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export const editDish = async (restoName: string, body: any) => {
  const response = await axios({
    url: baseUrl + restoName,
    method: 'PUT',
    data: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
  });
  return response.data;
}

export const deleteDish = async (restoName: string, dishName: string) => {
  const response = await axios({
    url: baseUrl + restoName,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({ name: dishName }),
  });
  return response.data;
}