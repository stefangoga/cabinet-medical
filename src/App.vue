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

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Programari cabinete medicale</v-toolbar-title>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null ,
    items: [
          { title: 'Pagina principala', icon: 'mdi-home' , to:'/'},
          { title: 'Autentificare', icon: 'mdi-login', to:'/login' },
          { title: 'Inregistrare', icon: 'mdi-account-plus',to:'/register' },
          { title: 'Despre', icon: 'mdi-lightbulb',to:'/about' }
        ],}),
  }
</script>