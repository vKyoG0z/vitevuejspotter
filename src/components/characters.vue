<template>
  <div>
    <div class="search-container">
      <input type="text" v-model="searchQuery" @input="filterCharacters" placeholder="Search characters...">
    </div>
    <h1>Characters</h1>
    <div v-for="item in filteredList" :key="item.id">
      <a :href="item.attributes.wiki">
        <img :src="item.attributes.image" alt="Link to Wiki!" />
      </a>
      <p>
        {{ item.attributes.name }} <br>
        <!-- Utilisation d'expressions ternaires pour conditionnellement afficher les attributs -->
        {{ item.attributes.house ? 'House : ' + item.attributes.house  : '' }}<br>
        {{ item.attributes.born ? 'Born ' + item.attributes.born : '' }}<br>
        {{ item.attributes.died ? 'Died : ' + item.attributes.died  : '' }}<br>
        {{ item.attributes.gender ? 'Gender : ' + item.attributes.gender : '' }}<br>
        {{ item.attributes.height ? 'Height : ' + item.attributes.height  : '' }}<br>
        {{ item.attributes.nationality ? 'Nationality : ' + item.attributes.nationality : '' }}
      </p>
    </div>
    <!-- Boutons de pagination -->
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Characters",
  data() {
    return {
      list: [],
      currentPage: 1,
      itemsPerPage: 10, // Nombre d'éléments par page
      searchQuery: ""
    };
  },
  computed: {
    filteredList() {
      return this.list.filter(item => {
        return item.attributes.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
    displayedList() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredList.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredList.length / this.itemsPerPage);
    },
  },
  async mounted() {
    try {
      let result = await axios.get("https://api.potterdb.com/v1/characters");
      console.warn(result.data.data)
      this.list = result.data.data;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  methods: {
    filterCharacters() {
      // No need for async/await here as it's just filtering the existing list
      // This method will be triggered each time the search query changes
      // and will automatically update the filteredList computed property
      // based on the search query
    },
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

.search-container input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
