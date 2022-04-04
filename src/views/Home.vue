<template>
  <div id="app">
    <!-- <input type="text" v-model="search" /> -->
    <v-text-field
      v-model="search"
      class="pa-3"
      dense
      label="Cautare"
    ></v-text-field>
    <p class="font-weight-bold">Ati cautat clinica: {{ search }}</p>
  <v-container class="my-5">
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="post in filteredPosts" :key="post.id">
    
      <post :post="post"></post>
      
    
    </v-flex>
  </v-layout>
</v-container>

    
  </div>
</template>

<script>
// import db from "@/main";

import Post from "@/components/Post";
export default {
  name: "Home",
  components: {
    Post
  },
  data() {
    return {
      ora:"",
      search: "",
      posts: [
        {
          id: 1,
          title: "Clinica Max",
          body: "Dermatologie",
          img: "https://vitaplusmedical.ro/wp-content/uploads/2019/02/Centrul-Medical-Parc-2.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        },
        {
          id: 2,
          title: "Clinica Anedio",
          body: "Pediatrie",
          img: "https://mercut.ro/wp-content/uploads/2018/10/clinica-216x300.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        },
        {
          id: 3,
          title: "Clinica Dr.Brown",
          body: "Ginecologie",
          img: "https://vitaplusmedical.ro/wp-content/uploads/photo-gallery/imported_from_media_libray/Policlinica-Independenta-aprilie-2020-R-fara-cabluri-960x720-1_(1).jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        },
        {
          id: 4,
          title: "Clinica M&M",
          body: "Diabet-boli de nutritie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTb9QBYiEh9tUKTmoXi0o7X4eQTwJSB-KUfEzDL8Sq1KRCro_2neD_z8QBTboG3K8YJs&usqp=CAU",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        },
        {
          id: 5,
          title: "Clinica Tommed",
          body: "Reumatologie",
          img: "http://www.centrulmedicaltommed.ro/images/header_banner1.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        },
        {
          id: 6,
          title: "Clinica PriMed",
          body: "Dermatologie",
          img: "https://calatoriaperfecta.ro/wp-content/uploads/2020/07/Clinica-PriMed.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        },
        {
          id: 7,
          title: "Clinica Sante",
          body: "Pediatrie",
          img: "https://www.clinica-sante.ro/wp-content/uploads/2012/11/giurgiului.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        },
        {
          id: 8,
          title: "Clinica Dentist Popescu",
          body: "Dentara",
          img: "https://ziarulsanatatea.ro/wp-content/uploads/2018/05/clinica6-1024x576.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        }
      ],
      
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(this.search.toLowerCase()) ||
          post.body.toLowerCase().includes(this.search.toLowerCase())
      );
    },
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

#buton-programare {
  top: 12px;
}
</style>
