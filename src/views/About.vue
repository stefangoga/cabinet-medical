<template>
  <div>
    <v-carousel cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header> Cum ma inregistrez?  </v-expansion-panel-header>
        <v-expansion-panel-content> Pentru a va inregistra este necesar sa accesati iconita de tip sandwich din coltul din stanga sus al ecranului iar apoi sa selectati "Inregistrare". Este necesar sa introduceti in campurile din formular datele dumneavoastra persoanale cat si specialitatea pentru care doriti sa plasati o programare. </v-expansion-panel-content>
        <v-expansion-panel-header> Cum ma autentific? </v-expansion-panel-header>
        <v-expansion-panel-content>
         Pentru a va autentifica este nevoie sa accesati iconita de tip sandwich din coltul din stanga sus al ecranului iar apoi selectati "Autentificare". Este necesar sa folositi datele alese de dvs. in procesul de inregistrare.
        </v-expansion-panel-content>
                <v-expansion-panel-header> Cum plasez o programare?  </v-expansion-panel-header>
<v-expansion-panel-content>
Pentru a plasa o programare este nevoie sa accesati  iconita de tip sandwich din coltul din stanga sus al ecranului iar apoi selectati "Pagina principala". Selectati din lista oferita de noi clinica la care doriti sa plasati programarea alegand ora si ziua. Dupa selectarea orei si zilei la care doriti sa plasati programarea, trebuie sa atasati o fotografie cu trimiterea medicului de familie in caz ca aveti una la dispozitie, dupa care completati restul de informatii cu caracter personal iar apoi apasati "CONFIRMARE"   </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/poza.jpg")
        },
        {
          src: require("../assets/doctori.jpg")
        },
        {
          src: require("../assets/hol.jpg")
        }
      ]
    };
  }
};
</script>
