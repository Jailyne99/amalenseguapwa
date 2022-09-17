<template>
  <v-main>
    <section id="about-me">
      <div class="py-8"></div>

      <v-container fluid class="white lighten-5">
        <v-row>
          <v-col cols="5">
            <v-img
              src="../assets/img/amalen.png"
              contain
              max-height="500"
            ></v-img>
          </v-col>
          <v-col cols="5">
            <h2 class="display-5 font-weight-bold mb-2">
              Lengua de Señas Amatitlán
            </h2>
            <h1 class="display-4 font-weight-bold mb-2 indigo--text">
              AMALENSEGUA
            </h1>
            <v-responsive
              class="mx-auto title font-weight-light mb-8 black--text"
              max-width="1160"
            >
              Somos una Institución académica de Lengua de Señas de Amatitlán.
            </v-responsive>
            <h1 class="display-2 font-weight-bold mb-2 indigo--text obje">
              OBJETIVO
            </h1>
            <v-responsive
              class="mx-auto title font-weight-light mb-8 black--text"
              max-width="1160"
            >
              Difundir la Lengua de Señas como parte de nuestras vidas y apoyar
              a la Comunidad Sorda dándoles oportunidades al acceso a la
              Comunicación.
            </v-responsive>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-5"></div>
    </section>

    <section id="features" class="black lighten-3">
      <div class="py-12"></div>

      <v-container class="text-center">
        <!-- <h2 class="display-2 font-weight-bold mb-3 white--text">
          VUETIFY FEATURES
        </h2> -->

        <!-- <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive> -->

        <v-row>
          <v-col cols="6">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end pb-0"
                height="200px"
                src="../assets/img/1.jpg"
              >
              </v-img>
              <v-card-subtitle class="indigo--text"
                ><h1>MISIÓN</h1></v-card-subtitle
              >
              <v-card-text class="text--primary">
                <p>
                  -Promover al sordo en actividades para que puedan valerse por
                  sí mismo.
                </p>
                <p>-Apoyar los derechos de igualdad de oportunidades.</p>
                <p>-Conocer su cultura sorda.</p>
                <div>-Conocer su gramática.</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end pb-0"
                height="200px"
                src="../assets/img/3.jpg"
              >
              </v-img>
              <v-card-subtitle class="indigo--text"
                ><h1>VISIÓN</h1></v-card-subtitle
              >
              <v-card-text class="text--primary">
                <p>
                  -Ver que nuestro Amatitlán vea la Comunidad Sorda integrada a
                  la Sociedad gozando de los mismo derechos e igualdad de muchas
                  oportunidades.
                </p>
                <div>
                  -Realizar proyectos para concientizar temas que nos ayude a
                  poder comprender más a nuestros hijos y a la Comunidad Sorda.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>

    <section id="stats">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 800 : 500"
        src="../assets/img/2.jpg"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
              v-for="[value, title] of stats"
              :key="title"
              cols="12"
              md="3"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4"
                  v-text="value"
                ></div>

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                ></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section id="Galeria">
      <div class="py-12"></div>

      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center ">
          GALERÍA
        </h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col v-for="item in items" :key="item.id" cols="16" md="4">
            <v-card outlined class="mx-auto">
              <v-img
                class="white--text align-end"
                height="260px"
                :src="item.src"
              >
                <v-card-title>{{ item.title }}</v-card-title>
              </v-img>


            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>
  </v-main>
</template>

<script>
export default {
  name: "Amalensegua",
  components: {},
  props: [],
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/img/4.jpg"),
        },
        {
          id: 2,
          src: require("../assets/img/5.jpg"),
        },
        {
          id: 3,
          src: require("../assets/img/6.jpg"),
        },
        {
          id: 4,
          src: require("../assets/img/7.jpg"),
        },
        {
          id: 5,
          src: require("../assets/img/8.jpg"),
        },
        {
          id: 6,
          src: require("../assets/img/9.jpg"),
        },
        {
          id: 7,
          src: require("../assets/img/10.jpg"),
        },
        {
          id: 8,
          src: require("../assets/img/1.jpg"),
        },
        {
          id: 9,
          src: require("../assets/img/1.jpg"),
        },
      ],
    };
  },
  methods: {},
  computed: {},
  created() {
    console.log("vista amalensegua");
  },

  beforeMount() {},
};
</script>


<style>
/* .amalenimg {
  border-radius: 50%;
  background-color: #3737cd;
  right: 0%;
  border-top-left-radius: 10%;
  border-bottom-right-radius: 10%;
  max-width: 45%;
  top: -15%;
  position: flex;
  z-index: 5px; 
} */
.obje {
  font-size: 30%;
}
</style>