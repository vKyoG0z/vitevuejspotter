<template>
  <div>
    <div class="search-container">
      <input type="text" v-model="searchQuery" @input="filterBooks" placeholder="Search books by title or author...">
    </div>
    <h1>Books page</h1>
    <div v-for="item in filteredList" :key="item.id">
      <a :href="item.attributes.wiki">
        <img :src="item.attributes.cover" alt="Book image" />
      </a>
      
      <p>{{ item.attributes.name }} <br>
         <span>Title: </span>{{ item.attributes.title }}<br><br>
         <span>Author : </span>{{ item.attributes.author }}<br><br>
         <span>Release date: </span>{{ item.attributes.release_date }}<br><br>
         <span>Summary: </span><br><br>{{ item.attributes.summary }}<br><br>
         <span>Number of pages : </span>{{ item.attributes.pages }}<br><br><br><p>----------------------------------------------------------------------------------</p><br><br><br>
        </p>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Books",
  data() {
    return {
      list: [],
      searchQuery: ""
    }
  },
  async mounted() {
    try {
      let result = await axios.get("https://api.potterdb.com/v1/books");
      this.list = result.data.data;
    } catch (error) {
      console.error("An error occurred:", error)
    }
  },
  computed: {
    filteredList() {
      return this.list.filter(item => {
        return item.attributes.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               item.attributes.author.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    async filterBooks() {
      // Cette méthode ne sera pas utilisée car nous utilisons la recherche en temps réel
      // Mais nous pourrions utiliser une méthode de recherche similaire ici si la recherche était déclenchée par un bouton de recherche
    }
  }
}
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

img {
  width: 30%;
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
