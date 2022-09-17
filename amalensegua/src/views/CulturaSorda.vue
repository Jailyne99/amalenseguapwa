<template>
  <v-content>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div class="py-1"></div>

    <section id="features" class="write lighten-3">
      <div class="py-12"></div>

      <v-container class="text-center">
        <v-row align="center">
          <v-card class="mx-auto" max-width="844" max-b="844" elevation="24">
            <v-card-text>
              <div>CULTURA SORDA GUATEMALA</div>
              <p class="text-h4 text--primary">
                TEMAS IMPORTANTES DE LA PERSONA SORDA
              </p>
              <p>
                Todos los años lo celebran en la última semana de Sept. Realizan
                varias actividades.
              </p>
              <div class="text--primary">
                Se eligió el 23 de Septiembre, como la fecha conmemorativa
                porque fue la fecha en que se estableció la Federación Mundial
                de Sordos (FMS) EN 1951, ese día marca el nacimiento de una
                organización, que tiene como uno de sus principales objetivos,
                de conservar la Lengua de Señas y la Cultura Sorda como
                prerrequisitos para la realización de los derechos humanos de
                las personas Sordas.
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="blue" @click="reveal = true"> Leer más </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 125%"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    El martes 28 de enero 2020, el Congreso de la Republica de
                    Guatemala aprobó la Ley que reconoce y aprueba la Lengua de
                    señas de Guatemala, LENSEGUA, Decreto 3-2020
                  </p>
                  23 de sept. Se Conmemora el Día Nacional de la Lengua de
                  Señas<br />
                  En Guatemala las Asociaciones de personas Sordas e Intérpretes
                  promovieron la unidad el trabajo en equipo y juntos lucharon
                  por los derechos del Sordo, sobre todo el derecho que tienen
                  ellos al acceso a la comunicación y declarar en el país el
                  idioma como una lengua Oficial para la Comunidad, es por ello
                  que los sordos se toman el tiempo para celebrar en equipo su
                  idioma que los distingue y les da una Identidad.

                  <p></p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn text color="blue" @click="reveal = false">
                    Regresar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>
    <section>
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 800 : 1000"
        src="../assets/img/mano.jpg"
      >
        <v-container>
          <h2 class="text-center indigo--text display-3 font-weight-bold mb-3">
            HECHOS HISTÓRICOS DE LENSEGUA
          </h2>
          <v-row>
            <v-col cols="5" class="lensegua">
              <v-img
                src="../assets/img/lensegua.png"
                contain
                max-height="300"
              ></v-img>
            </v-col>
            <v-col cols="7">
              <v-responsive
                class="mx-auto title font-weight-light mb-8 black--text"
                max-width="1160"
              >
                <li>
                  2008 Inició el proceso de la iniciativa de la Ley de Lengua de
                  Señas No. 3932 y llegó a segunda lectura en el congreso.
                </li>
                <li>
                  2016 se presenta nueva iniciativa 5128 y solo obtuvo el
                  dictamen favorable de Comisión de Educación y Discapacidad.
                </li>
                <li>
                  2019 con el asesoramiento del Congreso de la República, se
                  presenta una nueva iniciativa No.5603.
                </li>
                <li>
                  2020 declaran la aprobación de la Ley de Lengua de señas ,
                  decreto 03-2020.
                </li>
              </v-responsive>
            </v-col>
          </v-row>
          <div class="py-8"></div>
          <h2 class="text-center indigo--text display-3 font-weight-bold mb-3">
            CONOZCAMOS ¿QUÉ NOS DICE EL ARTICULO 2?
          </h2>
          <v-row>
            <v-col cols="5" class="lensegua">
              <v-img
                src="../assets/img/ley.png"
                contain
                max-height="300"
              ></v-img>
            </v-col>
            <v-col cols="7">
              <v-responsive
                class="mx-auto title font-weight-light mb-8 black--text"
                max-width="1160"
              >
                <li>
                  Lengua: Conjunto ordenador y sistemático de formas orales,
                  escritas grabadas y gestuales que facilitan la comunicación
                  entre las personas que constituyen una comunidad lingüística ,
                  donde existen variaciones léxicas, fónicas y sintácticas
                  menores por motivos históricos y estrictamente evolutivos que
                  se modifican y se entienden entre sí.
                </li>
                <li>
                  Lengua de señas: es un Sistema de comunicación natural con
                  gramática propia, de percepción visual y táctil que se vale de
                  gestos, formas, mímicas, movimientos manuales y corporales
                  característicos y reconocidos en un territorio utilizado
                  mayormente por personas sordas.
                </li>
              </v-responsive>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section id="features" class="indigo">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3 white--text">
          ¿PALABRAS INCORRECTAS?
        </h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
              Palabra Incorrecta
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Términos Incorrectos
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3"> Palabra Correcta </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-5" color="grey lighten-2" height="300px">
                <v-avatar class="elevation-0 mb-1" size="175">
                  <v-img src="../assets/img/flag-front-color.png"></v-img>
                </v-avatar>
                <h1>
                  Una persona “SORDOMUDA” ¿sería la que no puede hablar ni puede
                  oír?
                </h1>

                <li>
                  Como no oyen no ha podido aprender el lenguaje, pero no tienen
                  ningún problema en la voz, por lo tanto no son MUDAS.
                </li>
                <li>
                  La persona sorda aunque hable únicamente la lengua de señas,
                  nunca se considera “MUDA” porque habla en este idioma con
                  aquella persona que también lo hablan.
                </li>
              </v-card>

              <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-5" color="grey lighten-2" height="300px">
                <v-avatar class="elevation-0 mb-1" size="158">
                  <v-img src="../assets/img/megaphone-front-color.png"></v-img>
                </v-avatar>
                <h1>Términos Incorrectos que se han dicho</h1>

                <li>Sordito</li>
                <li>Discapacitado ( dito)</li>
                <li>Sordo mudo</li>
              </v-card>

              <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-5" color="grey lighten-2" height="300px">
                <v-avatar class="elevation-0 mb-1" size="158">
                  <v-img src="../assets/img/tick-front-color.png"></v-img>
                </v-avatar>
                <h1>Palabra correcta al dirigirse...</h1>

                <h1>SORDO</h1>
              </v-card>
              <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-container>

      <div class="py-12"></div>
    </section>

    <section>
      <div class="py-5"></div>

      <v-container>
        <h2 class="text-center indigo--text display-3 font-weight-bold mb-3">
          CUANDO ESCRIBAMOS LA PALABRA SORDO
        </h2>
        <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items2"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
        <div class="py-8"></div>
      </v-container>

      <div class="py-12"></div>
    </section>
  </v-content>
</template>

<script>
export default {
  name: "CulturaSorda",
  components: {},
  props: [],
  data() {
    return {
      e1: 1,
      reveal: false,
      length: 3,
      window: 0,
      items: [
        {
          src: "https://i.imgur.com/xPMGbqO.jpeg",
        },
        {
          src: "https://i.imgur.com/SDdC9H9.jpeg",
        },
        {
          src: "https://i.imgur.com/k9BHVua.jpeg",
        },
        {
          src: "https://i.imgur.com/a7INaXt.jpeg",
        },
      ],
      items2: [
        {
          src: "https://i.imgur.com/DQp7nzT.jpg",
        },
        {
          src: "https://i.imgur.com/QCEPhdf.jpg",
        },
        {
          src: "https://i.imgur.com/4VoG5xy.jpg",
        },
        {
          src: "https://i.imgur.com/abnGsCr.jpg",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  created() {
    console.log("vista cultura");
  },

  beforeMount() {},
};
</script>

<style>

    .v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  } 

  .lensegua {
    left: 50px;
    position: relative;
  }
</style>