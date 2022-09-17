<template>
  <v-app>
    <navbar />
    <router-view />
    <pie-pagina />
  </v-app>
</template>


<script>
  import Navbar from "./components/Navbar.vue";
  import PiePagina from "./components/PiePagina.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      PiePagina
    },
  };
</script>