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
  
  <style src="/workspace/vitevuejspotter/src/layout.css"></style>
  