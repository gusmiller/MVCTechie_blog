/*******************************************************************
 * Carleton Bootcamp - 2023
 * Copyright 2023 Sonja Gorin, Jacob Martin, Gustavo Miller
 * Licensed under MIT
 * 
 * Group Project #2 MVC/Express.js
 * Cravings
 * 
 * Date : 11/14/2023 5:50:29 PM
 *******************************************************************/
const loginFormHandler = async (event) => {
     event.preventDefault();

     const email = document.querySelector('#email-login').value.trim();
     const password = document.querySelector('#password-login').value.trim();

     if (email && password) {
          const response = await fetch('api/users/login', {
               method: 'POST',
               body: JSON.stringify({ email, password }),
               headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
               document.location.replace('/');
          } else {
               alert('Failed to log in');
          }
     }
};

document
     .querySelector('.login-form')
     .addEventListener('submit', loginFormHandler);
