<template>
  <div>
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Search potions...">
     
    </div>
    <h1>Potions page</h1>
    <div v-for="item in filteredList" :key="item.id">
      <a :href="item.attributes.wiki">
        <img :src="item.attributes.image" alt="Image de la potion" />
      </a>
      <p>{{ item.attributes.name }} <br>
         <span>Ingredients : </span>{{ item.attributes.ingredients }}<br>
         <span>Effects : </span>{{ item.attributes.effect }}
        </p>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Potions",
  data() {
    return {
      list: [],
      searchQuery: ""
    }
  },
  async mounted() {
    try {
      let result = await axios.get("https://api.potterdb.com/v1/potions");
      this.list = result.data.data;
    } catch (error) {
      console.error("error :", error)
    }
  },
  computed: {
    filteredList() {
      return this.list.filter(item => {
        return item.attributes.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    async searchPotions() {
      try {
        let result = await axios.get(`https://api.potterdb.com/v1/potions?filter[name_cont]=${this.searchQuery}`);
        this.list = result.data.data;
      } catch (error) {
        console.error("error :", error)
      }
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

p {
  color: white;
}

h1 {
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
