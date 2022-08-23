import axios from 'axios';

const token = localStorage.getItem('token');

// Get user data
export async function getUser(username) {
  try {
    let response = axios.get(
      `https://shop-api-2022.herokuapp.com/users/${username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

// Delete account
export async function deleteUser(username) {
  try {
    axios.delete(`https://shop-api-2022.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Account deleted');
  } catch (error) {
    console.log(error);
  }
}
