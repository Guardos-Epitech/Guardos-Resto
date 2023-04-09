import axios from 'axios';

const baseUrl = 'http://localhost:8082/api/restaurants/';

export const getAllResto = async () => {
  const response = await axios({
    method: 'GET',
    url: baseUrl
  });
  return response.data;
};

export const addNewResto = async (body: any) => {
  const response = await axios({
    url: baseUrl,
    method: 'POST',
    data: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export const editResto = async (restoName: string, body: any) => {
  const response = await axios({
    url: baseUrl + restoName,
    method: 'PUT',
    data: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    }
  });
  return response.data;
};

export const deleteResto = async (restoName: string) => {
  const response = await axios({
    url: baseUrl + restoName,
    method: 'DELETE'
  });
  return response.data;
};
