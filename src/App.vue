<template>
  <v-app id="inspire">
     <v-navigation-drawer 
     v-model="drawer"
     
     app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Optiuni
          </v-list-item-title>
          
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
    app
      
      color="#43a047"
      dark
      prominent
      src="https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-superJumbo.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title >Programari cabinete medicale</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    
    data: () => ({ drawer: false ,
    items: [
          { title: 'Pagina principala', icon: 'mdi-home' , to:'/'},
          { title: 'Autentificare', icon: 'mdi-login', to:'/login' },
          { title: 'Inregistrare', icon: 'mdi-account-plus',to:'/register' },
          { title: 'Despre', icon: 'mdi-lightbulb',to:'/about' }
        ],}),
  }
</script>