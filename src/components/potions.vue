<template>
  <div>
    <h1>Potions</h1>
    <div v-for="item in list" :key="item.id">
      <a :href="item.attributes.wiki">
        <img :src="item.attributes.image" alt="Image de la potion" />
      </a>
      <p>{{ item.attributes.name }} <br>
         <span>ingrédient : </span>{{ item.attributes.ingredients }}<br>
         <span>effect : </span>{{ item.attributes.effect }}
        </p>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "App",
  data() {
    return {
      list: []
    }
  },
  async mounted() {
    try {
      let result = await axios.get("https://api.potterdb.com/v1/potions");
      console.warn(result.data.data)
      this.list = result.data.data
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
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
  h1{
    color: aliceblue;
  }
  p{
    color: white;
  }
  span{
    font-size: 25px;
  }
  </style>