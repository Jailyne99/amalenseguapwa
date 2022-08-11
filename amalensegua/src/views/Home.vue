<template>
     <v-container fluid class="ma-0 pa-0 black">
      <v-row> 
        <v-col cols="13">
           <h1 class="white--text fondotext">GUATEMALA</h1>
           <h1 class="white--text top">AMALENSEGUA</h1>
           <h2 class="white--text">Aprende y refuerza tus conocimientos</h2>
           <h2 class="white--text">en la lengua de señas guatemalteca.</h2>
        <v-container fluid class="ml-16" text v-on:click="enlace()"> 
            <v-btn color="#3737CD" class="white--text inicio" elevation="50" large >Iniciar Sesión</v-btn> 
        </v-container>
          <v-img src="../assets/img/perfil.png" class="feacture-img"></v-img>
        </v-col>
      </v-row> 
    </v-container>
</template>

<script>
export default {
  name: "Home",
   components: {},
 props: [],
  data() {
    return {};
  },
  methods: {
     enlace() {
      this.$router.push({ path: "/iniciosesion" });
    },
  },
}
</script>

<style scoped>
.top{
  margin-top: 500px;
  margin-left: 30px;
}
h1{ 
 font-size: 300%
 }
 .fondotext{
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 62%;
    transform: translate(-50%, -50%);
    font-size: 2000%;
    opacity: 11%;
 }
.feacture-img{
 
  position: relative;
  bottom: 0;
  left: 405px;
  max-width: 68%;
  top: 30px;
}
.inicio{
   left: 3%; 
}
</style>

