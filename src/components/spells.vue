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
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Spells",
  data() {
    return {
      list: [],
      searchQuery: ""
    }
  },
  async mounted() {
    try {
      let result = await axios.get("https://api.potterdb.com/v1/spells");
      this.list = result.data.data;
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
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
    async searchSpells() {
      try {
        let result = await axios.get(`https://api.potterdb.com/v1/spells?filter[name_cont]=${this.searchQuery}`);
        this.list = result.data.data;
      } catch (error) {
        console.error("Une erreur s'est produite :", error)
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
