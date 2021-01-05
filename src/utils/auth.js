/* eslint-disable import/prefer-default-export */
// authentication to register

// export const BASE_URL = 'https://www.news-explorer.tk.students.nomoreparties.site';
export const BASE_URL = 'http://localhost:3000';

export const register = (email, password, name) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password, name }),
}).then((response) => response.json()).then((data) => {
  console.log(data);
  return data;
});

export const authorize = (password, email) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ password, email }),
}).then((response) => response.json()).then((data) => {
  if (data.token) {
    localStorage.setItem('jwt', data.token);
    return data;
  }
  return null;
});

export const checkToken = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => res.json())
  .then((data) => data);
