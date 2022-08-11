<template>
  <v-container>
    <v-card class="overflow-hidden">
      <v-app-bar app color="black" height="93">
        <v-app-bar-nav-icon class="ml-6">
          <v-img contain max-height="75" src="../assets/img/logo.png"></v-img>
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn class="botonposition" color="white" text v-on:click="enlace()"
          >HOME</v-btn
        >
        <v-btn class="botonposition" color="white" text v-on:click="enlace()"
          >AMALENSEGUA</v-btn
        >
        <v-btn class="botonposition" color="white" text v-on:click="enlace()"
          >CULTURA SORDA</v-btn
        >
        <v-btn
          class="botoncontacto"
          style="border: 2px solid #3737cd"
          color="white"
          text
          v-on:click="enlace()"
          >CONTACTANOS</v-btn
        >
      </v-app-bar>
    </v-card>
  </v-container>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  name: "NavBar",
  comments: {},
  props: [],
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram",
    ],
  }),
  methods: {
    enlace() {
      this.$router.push({ path: "/home" });
      this.$router.push({ path: "/amalensegua" });
      this.$router.push({ path: "/culturasorda" });
      this.$router.push({ path: "/contacto" });
    },
  },
  components: { Home },
};
</script>

<style>
.botonposition {
  left: -395px;
}
.botoncontacto {
  left: -40px;
}
.mr-3 {
  top: 25px;
}
</style>