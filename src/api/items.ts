import axios from 'axios';

type Item = {
  _id: string;
  Name: string;
  Brand: string;
  Price: number;
  ImagePath: string;
};

export async function getItems():Promise<any> {
  try {
    let response = await axios.get<Item[]>(
      'https://shop-api-2022.herokuapp.com/items'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getItem(itemId: string) {
  try {
    let response = await axios.get<Item>(
      `https://shop-api-2022.herokuapp.com/items/${itemId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
