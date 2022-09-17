     <template>
  <v-container fluid class="ma-0 pa-0">
    <v-footer class="justify-center" color="white" height="50">
      <div
        class="title font-weight-light black--text text--lighten-1 text-center"
      >
        <h6>&copy;2022 — AMALENSEGUA</h6>
      </div>
      <v-spacer></v-spacer>
        <v-btn  v-for="icon in icons" :key="icon.icono" class="mx-3" black icon>
        <v-icon size="20px" v-on:click="redSocial(icon.link)">{{
          icon.icono
        }}</v-icon>
      </v-btn>
    </v-footer>
  </v-container>
</template>

    <script>
export default {
  name: "PiePagina",
  data: () => ({
    icons: [
      {
        icono: "fab fa-facebook",
        link: "https://www.facebook.com/mismanostuvoz/photos/?ref=page_internal",
          
      },
      {
        icono: "fab fa-twitter",
        link: "https://www.facebook.com/mismanostuvoz/photos/?ref=page_internal",
      },
      {
        icono: "fab fa-google-plus",
        link: "https://www.facebook.com/mismanostuvoz/photos/?ref=page_internal",
      },
      {
        icono: "fab fa-instagram",
        link: "https://www.facebook.com/mismanostuvoz/photos/?ref=page_internal",
      },
    ],
  }),
  methods: {
    redSocial(irRuta) {
      location.href = irRuta;
      window.open(irRuta.href);
    },
  },
};
</script>
    
    