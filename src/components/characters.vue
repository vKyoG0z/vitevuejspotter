<template>
  <div>
    <h1>Characters</h1>
    <div v-for="item in displayedList" :key="item.id">
      <a :href="item.attributes.wiki">
        <img :src="item.attributes.image" alt="Lien Vers le Wiki!" />
      </a>
      <p>
        {{ item.attributes.name }} <br>
        <!-- Utilisation d'expressions ternaires pour conditionnellement afficher les attributs -->
        {{ item.attributes.house ? 'House : ' + item.attributes.house  : '' }}<br>
        {{ item.attributes.born ? 'born ' + item.attributes.born : '' }}<br>
        {{ item.attributes.deid ? 'died : ' + item.attributes.deid  : '' }}<br>
        {{ item.attributes.gender ? 'gender : ' + item.attributes.gender : '' }}<br>
        {{ item.attributes.height ? 'height : ' + item.attributes.height  : '' }}<br>
        {{ item.attributes.nationality ? 'nationality : ' + item.attributes.nationality : '' }}
      </p>
    </div>
    <!-- Boutons de pagination -->
    <button @click="previousPage" :disabled="currentPage === 1">Précédent</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      list: [],
      currentPage: 1,
      itemsPerPage: 10, // Nombre d'éléments par page
    };
  },
  computed: {
    displayedList() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.list.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.list.length / this.itemsPerPage);
    },
  },
  async mounted() {
    try {
      let result = await axios.get("https://api.potterdb.com/v1/characters");
      console.warn(result.data.data)
      this.list = result.data.data;
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}
h1 {
  color: aliceblue;
}
p {
  color: white;
}
span {
  font-size: 25px;
}
</style>