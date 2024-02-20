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
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-image: url('./images/harry_potter.jpg'); /* Remplacez 'chemin/vers/votre/image.jpg' par le chemin de votre image */
    background-size: cover; /* Ajuste la taille de l'image pour couvrir la totalité de l'élément */
    background-position: center; /* Centre l'image dans l'élément */
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navigation h1 {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
  </style>
  