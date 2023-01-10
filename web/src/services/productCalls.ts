import axios from 'axios';

const baseUrl = 'http://localhost:8082/';

export const getAllRestoProducts = async (restoName: string) => {
  const response = await axios({
    method: 'GET',
    url: baseUrl + 'api/products/' + restoName,
  });
  return response.data;
}

export const getAllProducts = async () => {
  const response = await axios({
    method: 'GET',
    url: baseUrl + 'get',
  });
  return response.data;
}

export const addNewProduct = async (body: any) => {
  const response = await axios({
    url: baseUrl + 'post',
    method: 'POST',
    data: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export const deleteProduct = async (body: any) => {
  const response = await axios({
    url: baseUrl + 'delete',
    method: 'DELETE',
    data: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.data;
}