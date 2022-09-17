<template>
  <v-container>
    <v-card class="overflow-hidden">
      <v-app-bar app color="black" height="93">
        <v-app-bar-nav-icon class="ml-6">
          <v-img contain max-height="75" src="../assets/img/logo.png"></v-img>
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn
          class="botonposition"
          color="white"
          text
          v-on:click="enlace(ruta[0])"
          >HOME</v-btn
        >
        <v-btn
          class="botonposition"
          color="white"
          text
          v-on:click="enlace(ruta[1])"
          >AMALENSEGUA</v-btn
        >
        <v-btn
          class="botonposition"
          color="white"
          text
          v-on:click="enlace(ruta[2])"
          >CULTURA SORDA</v-btn
        >
        <v-btn
          class="botoncontacto"
          style="border: 2px solid #3737cd"
          color="white"
          text
          v-on:click="enlace(ruta[3])"
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
    ruta: ["/home", "/amalensegua", "/culturasorda", "/contacto"],
  }),
  methods: {
    enlace(irRuta) {
      // console.log("irRuta: " + irRuta);
      // console.log("fullPath: " + this.$router.app.$route.fullPath);
      if (irRuta != this.$router.app.$route.fullPath) {
        this.$router.push({ path: irRuta });
      }
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