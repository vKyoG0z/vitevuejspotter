<template>
  <div>
    <h1>Potions page</h1>
    <div v-for="item in list" :key="item.id">
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
      console.error("error :", error)
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

  p{
    color:white;
  }

  h1{
    color:white;
  }

span{
  font-size: 20px;
}

  </style>

  