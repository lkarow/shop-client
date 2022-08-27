import axios from 'axios';

const token = localStorage.getItem('token');
const username = localStorage.getItem('user');

// Login
export async function login(username, password) {
  try {
    let response = await axios.post(
      'https://shop-api-2022.herokuapp.com/login',
      {
        Username: username,
        Password: password,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Register
export async function register(username, password, email, birthday) {
  try {
    await axios.post('https://shop-api-2022.herokuapp.com/users', {
      Username: username,
      Email: email,
      Password: password,
      Birthday: birthday,
    });
  } catch (error) {
    console.log('Error');
  }
}

// Get user data
export async function getUser() {
  try {
    let response = await axios.get(
      `https://shop-api-2022.herokuapp.com/users/${username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Delete account
export async function deleteUser() {
  try {
    await axios.delete(
      `https://shop-api-2022.herokuapp.com/users/${username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    localStorage.clear();
    window.open('/', '_self');
    alert('Account deleted');
  } catch (error) {
    console.log(error);
  }
}

// Update user data
export async function updateUser(userData) {
  try {
    await axios.put(
      `https://shop-api-2022.herokuapp.com/users/${username}`,
      {
        Username: userData.Username,
        Password: userData.Password,
        Email: userData.Email,
        Birthday: userData.Birthday,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    alert('User data changed.');
  } catch (error) {
    console.log(error);
  }
}
