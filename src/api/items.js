import axios from 'axios';

export async function getItems() {
  try {
    let response = await axios.get('https://shop-api-2022.herokuapp.com/items');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getItem(itemId) {
  try {
    let response = await axios.get(
      `https://shop-api-2022.herokuapp.com/items/${itemId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
