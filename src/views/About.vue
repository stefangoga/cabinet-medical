<template>
<div id="app">
  <v-carousel cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    
  </v-carousel>
  
  </div>
  
</template>






<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/poza.jpg'),
          },
          {
            src: require('../assets/doctori.jpg'),
          },
          {
            src: require('../assets/hol.jpg'),
          },
          
        ],
      }
    },
  }
</script>