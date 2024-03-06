<template>
  <div class="navigation">
    <h1>Accueil</h1>
    <h1>Potions</h1>
    <h1>Sorts</h1>
    <h1>Livres</h1>
    <h1>Personnages</h1>
  </div>
</template>

<style>
body {
  background-image: url('./images/harry_potter.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}
.navigation {
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color:white;
  background-color: black; 

  display: flex;
  justify-content: space-around;
  padding: 15px 20px;
  
}

.navigation h1 {
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-family: cursive, sans-serif; /* Utilisation de la police "Cursive" avec une police de secours sans-serif */
  transition: transform 1.0s; /* Ajoute une transition fluide */
}

.navigation h1:hover {
  transform: scale(1.5); /* Zoom sur le texte au survol */
}


</style>