<template>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <!--  -->
      </v-navigation-drawer>
  
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>ADMINISTRADOR</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <!--  -->
      </v-main>
    </v-app>
  </template>
  
  <script>
import Admin from "@/views/Admin.vue"
    export default {
      name:"NavbarApp",
      comments:{},
      props:[],
      data: () => ({
         drawer: null,
         ruta: ["/admin"],
         }),

  components: { Admin },
    };
  </script>

  

