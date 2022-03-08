<template>
  <v-app id="inspire"
  :style="{'background-image':'url(https://previews.123rf.com/images/demonova/demonova1805/demonova180500016/100482996-medical-pattern-for-wallpaper.jpg)'}">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Formular autentificare</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="login"
                    label="Autentificare"
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
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login" color="primary">Intra in cont</v-btn>
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
  name: "login",
  data: function () {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function (e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert(`Contul ${user.user.email} a fost autentificat cu succes`);
            this.$router.push("/#/");
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
