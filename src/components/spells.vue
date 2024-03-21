<template>
  <div>
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Search spells...">
    </div>
    <h1>Spells</h1>
    <div v-for="item in filteredList" :key="item.id">
      <a :href="item.attributes.wiki">
        <img :src="item.attributes.image" alt="Spell image" />
      </a>
      <br>
      <p>{{ item.attributes.name }}<br>
        <span>Category : </span>{{ item.attributes.category }}<br>
         <span>Effect : </span>{{ item.attributes.effect }}<br><br><br>----------------------------------------------------------------------------------<br><br><br>
      </p>
    </div>
    <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Spells",
  data() {
    return {
      list: [],
      currentPage: 1,
      itemsPerPage: 10,
      searchQuery: ""
    }
  },
  computed:{
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
      return 32;
       //Math.ceil(this.filteredList.length / this.itemsPerPage);
    }
  },
  async mounted() {
    try {
      let result = await axios.get('https://api.potterdb.com/v1/spells?page[size]=' + this.itemsPerPage + '&page[number]=' + this.currentPage);
      console.warn(result.data.data);
      this.list = result.data.data;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  methods: {
    fetchData() {
      axios.get('https://api.potterdb.com/v1/spells?page[size]=' + this.itemsPerPage + '&page[number]=' + this.currentPage)
        .then(response => {
          this.list = response.data.data;
        })
        .catch(error => {
          console.error('Erreur lors de la requête API :', error);
        });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchData();
      }
    }
  }
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
  font-size: 20px;
}

.search-container {
  margin-bottom: 20px;
}

.search-container input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
