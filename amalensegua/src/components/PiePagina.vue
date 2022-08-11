     <template>
  <v-container fluid class="ma-0 pa-0">
    <v-footer class="justify-center" color="white" height="55">
      <div class="title font-weight-light black--text text--lighten-1 text-center">
        <h6>&copy;2022 — AMALENSEGUA</h6>
      </div>
      <v-spacer></v-spacer>
      <v-btn v-for="icon in icons" :key="icon" class="mx-3" black icon>
        <v-icon size="20px">{{ icon }}</v-icon>
      </v-btn>
    </v-footer>
  </v-container>
</template>

    <script>
export default {
  name: "PiePagina",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram",
    ],
  }),
};
</script>
    
    