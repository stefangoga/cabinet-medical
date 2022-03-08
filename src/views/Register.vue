<template>
  <v-app id="register"
  :style="{'background-image':'url(https://previews.123rf.com/images/demonova/demonova1805/demonova180500016/100482996-medical-pattern-for-wallpaper.jpg)'}"
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
                    v-model="surname"
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

export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
       items: ['Dermatologie', 'Pediatrie', 'Ginecologie', 'Diabet-boli de nutritie'],
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
    }
  }

};
</script>
