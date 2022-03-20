<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="blue"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img  height="250" :src="post.img"></v-img>

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
      </v-card-text>

      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="mb-4"
        >
          Programare
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Verificare disponibilitate programare</v-toolbar-title>
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
        <v-list
          three-line
          subheader
        >
          <!-- <v-subheader>User Controls</v-subheader> -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="pa-6">Ati selectat programarea pentru data de {{selectionhours}} si ziua {{selectionday}} pentru {{post.title}}</v-list-item-title>

              <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="200"
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
        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data: () => ({
    loading: false,
    selection: 1,
    dialog:false
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
