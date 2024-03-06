<template>
    <div>
      <div class="navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/potions">Potions</router-link>
        <router-link to="/spells">Spells</router-link>
        <router-link to="/books">Books</router-link>
        <router-link to="/characters">Characters</router-link>
      </div>
      <router-view></router-view> <!-- C'est ici que le contenu de chaque page sera affiché -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Layout'
  }
  </script>
  
  <style>
  /* Styles de votre barre de navigation */
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    background-color: black;
    display: flex;
    justify-content: space-around;
    padding: 15px 20px;
  }
  
  .navigation a {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-family: cursive, sans-serif;
    transition: transform 1.0s;
    text-decoration: none;
    color: white;
  }
  
  .navigation a:hover {
    transform: scale(1.7);
  }
  </style>
  