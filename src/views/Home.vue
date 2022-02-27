<template>
  <div id="app">
    <!-- <input type="text" v-model="search" /> -->
    <v-text-field
    v-model="search"
    class="pa-3"
            dense
            label="Cautare"
          ></v-text-field>
    <p>Ati cautat clinica: {{ search }}</p>
    <div class="pa-3" v-for="post in filteredPosts" :key="post.id">
      <post :post="post"></post>
      <v-btn
      
    id="buton-programare"
    
  elevation="3"
>Programare</v-btn>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";
export default {
  name: "Home",
  components: {
    Post
  },
  data() {
    return {
      search: "",
      posts: [
        {
          id: 1,
          title: "Clinica Max",
          body: "Dermatologie",
          img: "https://vitaplusmedical.ro/wp-content/uploads/2019/02/Centrul-Medical-Parc-2.jpg"
        },
        {
          id: 2,
          title: "Clinica Anedio",
          body: "Pediatrie",
          img: "https://mercut.ro/wp-content/uploads/2018/10/clinica-216x300.jpg"
        },
        {
          id: 3,
          title: "Clinica Dr.Brown",
          body: "Ginecologie",
          img: "https://vitaplusmedical.ro/wp-content/uploads/photo-gallery/imported_from_media_libray/Policlinica-Independenta-aprilie-2020-R-fara-cabluri-960x720-1_(1).jpg"
        },
        {
          id: 4,
          title: "Clinica M&M",
          body: "Diabet-boli de nutritie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTb9QBYiEh9tUKTmoXi0o7X4eQTwJSB-KUfEzDL8Sq1KRCro_2neD_z8QBTboG3K8YJs&usqp=CAU"
        }
      ]
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(this.search.toLowerCase()) ||
          post.body.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#buton-programare{
  top: 12px;
}
</style>
