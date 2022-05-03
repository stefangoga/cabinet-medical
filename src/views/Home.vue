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
          img: "https://scontent.ftsr1-1.fna.fbcdn.net/v/t39.30808-6/272941993_2083037795182586_4407166944928682889_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CxetX8ABOCsAX_nkQpD&_nc_ht=scontent.ftsr1-1.fna&oh=00_AT-O5CKwwm9g7glGYXPLrI-Vh1oujpQSV_UtjrDzyVYbNg&oe=627495D7",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        },
        {
          id: 2,
          title: "Clinica Anedio",
          body: "Pediatrie",
          img: "http://clinicaanedio.ro/files/galerie/2_dscn7728.jpg",
          ora1: "5:30PM", ora2: "7:30PM", ora3: "8:00PM", ora4: "9:00PM"
        },
        {
          id: 3,
          title: "Clinica Dr.Neagoe",
          body: "Stomatologie",
          img: "https://www.dentistonline.ro/images/users_cabinete/1961/Foto2.jpg",
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
        },
        {
          id: 9,
          title: "Policlinica Elga",
          body: "Urologie",
          img: "https://ghidautoservice.ro/wp-content/uploads/2022/03/POLICLINICA-ELGA.jpg",
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
