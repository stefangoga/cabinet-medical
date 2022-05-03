<template>
  <v-app
    id="register"
    :style="{
      'background-image':
        'url(https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80)'
    }"
  >
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Inregistrare client</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="name"
                    label="Nume"
                    id="name"
                    type="text"
                    v-model="name"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="firstname"
                    label="Prenume"
                    id="firstname"
                    type="text"
                    v-model="firstname"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="mdi-at"
                    name="login"
                    label="Email"
                    id="email"
                    type="email"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="Parola"
                    label="Parola"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                  <v-select
                    :items="items"
                    prepend-icon="mdi-medical-bag"
                    v-model="specialitate"
                    label="Selectati specialitatea"
                  ></v-select>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="register" color="primary">Creeaza cont</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import db from "@/main";
export default {
  name: "register",
  data: function () {
    return {
      specialitate: "",
      firstname: "",
      name: "",
      email: "",
      password: "",
      items: [
        "Dermatologie",
        "Pediatrie",
        "Ginecologie",
        "Diabet-boli de nutritie",
        "Stomatologie",
        "Reumatologie",
        "Dentara",
        "Urologie"
      ]
    };
  },
  methods: {
    register: function (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            // console.log(user);
            alert(
              `Contul tau pentru adresa de email ${user.user.email} a fost generat`
            );
            this.$router.push("/login");
          },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault();

      const project = {
        name: this.name,
        firstname: this.firstname,
        email: this.email,
        specialitate: this.specialitate,
        password: this.password
      };
      db.collection("inregistrare")
        .add(project)
        .then(() => {
          console.log("adaugat in baza de date");
          alert("Informatiile au fost adaugate in baza de date");
        });
    }
  }
};
</script>
