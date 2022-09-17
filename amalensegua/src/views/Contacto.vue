<template>
  <v-container class="contacto">
    <v-card
    max-width="800"
    class="mx-auto "
  >
    <v-img
      src="../assets/img/joyful-young-woman-wearing-black-undershirt-shows-call-and-point-her-finger-to-up-on-white-wall.jpg"
      height="350px"
      dark
    >
      <v-row class="fill-height">
        <v-card-title>

          <v-spacer></v-spacer>

          <v-btn
            dark
            icon
            class="mr-4"
          >
           
          </v-btn>

        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="text-h4 pl-12 pt-12">
            CONTACTANOS ESTAMOS PARA SERVIRTE
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(+502) 5775-6520</v-list-item-title>
          <v-list-item-subtitle>Movil</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>yeiaraujo@hotmail.com</v-list-item-title>
          <v-list-item-subtitle>Correo electronico </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Amatitlán, Guatemala.</v-list-item-title>
          <v-list-item-subtitle>7ma. av. 7-37 Barrio El Rosario, Amatitlán, Guatemala </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-card>
  </v-container>
</template>

<script>

export default {

  name: "Contacto",
  components:{
  },
  props:[],
  data(){
   return{
   }
  },
  methods:{},
  computed:{},
  created(){
  console.log("vista amalensegua" )

  },

  beforeMount(){},
}

</script>

<style>
.contacto{
 padding-top: 75px;
}
</style>