<template>
  <div>
    <v-card class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="blue"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="post.img"></v-img>

      <v-card-title>{{ post.title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          {{ post.body }}
        </div>

        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Disponibilitate programari</v-card-title>

      <v-card-text>
        <v-form>
          <v-chip-group
            v-model="selectionhours"
            active-class="blue accent-4 white--text"
            column
          >
            <v-chip value="5:30PM">5:30PM</v-chip>

            <v-chip value="7:30PM">7:30PM</v-chip>

            <v-chip value="8:00PM">8:00PM</v-chip>

            <v-chip value="9:00PM">9:00PM</v-chip>
          </v-chip-group>
          <v-chip-group
            v-model="selectionday"
            active-class="blue accent-4 white--text"
            column
          >
            <v-chip value="Luni">Luni</v-chip>

            <v-chip value="Marti">Marti</v-chip>

            <v-chip value="Miercuri">Miercuri</v-chip>

            <v-chip value="Joi">Joi</v-chip>

            <v-chip value="Vineri">Vineri</v-chip>
          </v-chip-group>
        </v-form>
      </v-card-text>

      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mb-4">
              Programare
            </v-btn>
            <!-- <v-btn color="green" dark  class="mx-4" to="details">
              Detalii
            </v-btn> -->
          </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title
                >Verificare disponibilitate programare</v-toolbar-title
              >
              <v-spacer></v-spacer>
              <!-- <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items> -->
            </v-toolbar>
            <v-list three-line subheader>
              <!-- <v-subheader>User Controls</v-subheader> -->
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="pa-6"
                    >Ati selectat programarea pentru data de
                    {{ selectionhours }} si ziua {{ selectionday }} pentru
                    {{ post.title }}</v-list-item-title
                  >

                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="20000"
                    max-width="400"
                    :src="post.img"
                  ></v-img>
                </v-list-item-content>
              </v-list-item>
              <!-- <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item> -->
            </v-list>
            <v-divider></v-divider>
            <v-list three-line subheader>
              <v-subheader>Informatii aditionale</v-subheader>

              <v-form class="pa-5" ref="form" v-model="valid" lazy-validation>
                <v-checkbox
                  v-model="bifare"
                  label="Bifati aceasta casuta daca dispuneti de trimitere de la medicul de familie"
                ></v-checkbox>
                <!-- <v-file-input
                type="file"
                @change="previewImage"
                  v-model="trimitere"
                  :disabled="!bifare"
                  label="Atasati trimiterea"
                  truncate-length="1"
                ></v-file-input> -->
                <input :disabled="!bifare" type="file" accept="image/*" @change="previewImage" name="" id="">
                <p>Progres: {{uploadValue.toFixed()+"%"}}
                 <progress :value="uploadValue" max="100"></progress>
                </p>
                <img :src="picture" alt="">
                <v-btn color="blue" @click="onUpload">Incarcare trimitere</v-btn>
                <v-text-field
                  v-model="Nume"
                  :counter="10"
                  :rules="nameRules"
                  label="Nume"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="Prenume"
                  :counter="10"
                  :rules="nameRules"
                  label="Prenume"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="cnp"
                  type="number"
                  label="C.N.P"
                  required
                  placeholder="Introduceti codul numeric personal format din 13 cifre"
                ></v-text-field>
                <v-text-field
            label="Descrieti-ne afectiunea dumneavoastra"
            single-line
            v-model="afectiune"
          ></v-text-field>

                <div>Specialitatea: {{ post.body }}</div>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[
                    (v) =>
                      !!v ||
                      'Pentru a putea merge mai departe trebuie confirmat acest camp!'
                  ]"
                  label="Sunteti de acord cu termenii si conditiile?"
                  required
                ></v-checkbox>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                  :loading="loading"
                >
                  Confirmare
                </v-btn>

                <v-btn color="error" class="mr-4" @click="reset">
                  Resetare formular
                </v-btn>
              </v-form>
            </v-list>
          </v-card>
        </v-dialog>
      </v-row>
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="900"
        
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          class="ma-2"
          dark
            color="green"
            v-bind="attrs"
            v-on="on"
          >Detalii</v-btn>
        </template>
                <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Detalii {{ post.title }}</v-toolbar>
            <v-card-text>
              <div class=" pa-12">{{post.about}}</div>
              <div>Pentru mai multe detalii va invitam sa vizitati site-ul nostru {{post.link}}</div>
              <v-img
                    
                    max-height="20000"
                    max-width="300"
                    :src="post.alt"
                  ></v-img>
                  
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Inchide fereastra</v-btn>
            </v-card-actions>
          </v-card>
        </template>

        </v-dialog>
    </v-card>
  </div>
  
</template>

<script>
import db from "@/main";
import firebase from 'firebase';
import Home from "@/views/Home";
export default {
  Home,
  props: ["post"],
  data: () => ({
    loading: false,
    imageData:null,
    picture:null,
    uploadValue:0,
    selection: 1,
    dialog: false,
    bifare: false,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Campul de nume si prenume trebuie completat",
      (v) =>
        (v && v.length <= 10) || "Numele nu trebuie sa depaseasca 10 caractere"
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Campul de e-mail trebuie completat",
      (v) => /.+@.+\..+/.test(v) || "Adresa de e-mail trebuie sa fie valida"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    previewImage(event){
      this.uploadValue=0;
      this.picture=null,
      this.imageData=event.target.files[0];
    },
    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=> {console.log(error.message)},
      ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.picture=url;
      })
      }
      );
    },




    // reserve() {
    //   this.loading = true;

    //   setTimeout(() => (this.loading = false), 2000);
    // },
    validate() {
      //  this.loading=!false
      //  setTimeout(()=>{
      //    this.loading=!true
      //  },4000)

      if (this.$refs.form.validate()) {













        this.loading = true;
        const project = {
          nume: this.Nume,
          prenume: this.Prenume,
          email: this.email,
          specialitatea: this.post.body,
          nume_clinica: this.post.title,
          ora_programare: this.selectionhours,
          ziua_programarii: this.selectionday,
          cnp:this.cnp,
          afectiune:this.afectiune
        };
        db.collection("programari")
          .add(project)
          .then(() => {});
        setTimeout(() => {
          this.loading = false;

          this.dialog = false;
          alert("Programarea dumneavoastra a fost inregistrata!");
        }, 4000);
        //
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
