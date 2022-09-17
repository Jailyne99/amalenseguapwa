<template>
  <v-container fluid class="ma-0 pa-0 black">
    <v-row>
      <v-col cols="11">
        <h1 class="white--text fondotext">GUATEMALA</h1>
        <h1 class="white--text top">AMALENSEGUA</h1>
        <h2 class="white--text pt1">Aprende y refuerza tus conocimientos</h2>
        <h2 class="white--text pt2">en la lengua de señas guatemalteca.</h2>
        <v-container fluid text v-on:click="enlace()">
          <v-btn color="#3737CD" class="white--text inicio" elevation="50" large
            >Iniciar Sesión</v-btn
          >
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
    return {
      infoEstudiantes: []
    };
  },
  created(){
    this.getInfoEstudiantes();
  },
  methods: {
    enlace() {
      this.$router.push({ path: "/iniciosesion" });
    },
    async getInfoEstudiantes(){
      const response = await fetch('http://localhost:4000/api/estudiantes');
      this.infoEstudiantes = await response.json();
      console.log(this.infoEstudiantes)
    }
  },
};
</script>

<style scoped>
.top {
  margin-top: 100px;
  margin-left: 105px;
}
h1 {
  font-size: 300%;
  position: absolute;
  top: 45%;
  left: 13%;
  transform: translate(-50%, -50%);
}
.pt1 {
  /* margin-left: 70px;
   position: relative; */
  position: absolute;
  top: 60%;
  left: 6%;
}
.pt2 {
  position: absolute;
  top: 63%;
  left: 6%;
}
.fondotext {
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 62%;
  transform: translate(-50%, -50%);
  font-size: 2000%;
  opacity: 11%;
}
.feacture-img {
  position: relative;
  bottom: 0;
  left: 500px;
  max-width: 69%;
  top: 0%;
}
.inicio {
  left: 200px;
  position: absolute;
  display: inline-block;
  top: 69%;
}
</style>

