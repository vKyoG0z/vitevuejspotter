<template>
  <div>
    <h1>Books page</h1>
    <div v-for="item in list" :key="item.id">
      <a :href="item.attributes.wiki">
        <img :src="item.attributes.cover" alt="Book image" />
      </a>
      
      <p>{{ item.attributes.name }} <br>
         <span>Title: </span>{{ item.attributes.title }}<br><br>
         <span>Author : </span>{{ item.attributes.author }}<br><br>
         <span>Release data: </span>{{ item.attributes.release_date }}<br><br>
         <span>Summary: </span><br><br>{{ item.attributes.summary }}<br><br>
         <span>Number of pages : </span>{{ item.attributes.pages }}<br><br><br><p>----------------------------------------------------------------------------------</p><br><br><br>
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
      let result = await axios.get("https://api.potterdb.com/v1/books");
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
    font-size: 20px;
  }

  img{
    width:30%;
  }
  </style>