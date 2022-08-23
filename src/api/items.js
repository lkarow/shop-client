import axios from 'axios';

export async function getItems() {
  try {
    let response = await axios.get('https://shop-api-2022.herokuapp.com/items');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
