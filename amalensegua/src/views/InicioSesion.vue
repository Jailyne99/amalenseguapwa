<template>
  <v-container fluid class="carta">
    <div :style="backgroundDiv">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6 mt-10">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Inicie sesión en su cuenta</h4>
                      <h5 class="text-center grey--text">
                        Inicie sesión en su cuenta para poder continuar
                        aprendiendo,<br />reforzando la lengua de señas
                        guatemalteca.
                      </h5>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field
                            v-model="email"
                            label="Correo Electrónico"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-7"
                            required
                          />
                          <v-text-field
                            label="Contraseña"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                          />
                          <v-row justify="center" class="ml-2 pa-3">
                            <!--<v-col cols="12" sm="7">
                                <v-checkbox label="Remember Me" class="mt-n1" color="blue"></v-checkbox>
                              </v-col>-->
                            <v-col cols="12" sm="8">
                              <v-chip color="white" @click="blinds"
                                ><span class="caption blue--text"
                                  >Olvidé Contraseña</span
                                ></v-chip
                              >
                              <v-checkbox
                                v-model="checkbox"
                                :rules="[
                                  (v) => !!v || 'Debes aceptar para continuar!',
                                ]"
                                label="¿Estás de acuerdo?"
                                required
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                          <v-btn
                            v-on:click="enlace()"
                            color="#3737CD"
                            dark
                            block
                            tile
                            >INICIAR SESIÓN</v-btn
                          >
                          <!--<h5 class="text-center grey--text mt-4 mb-3">Or Log in using</h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                      <v-btn depressed outlined color="grey" class="align-center">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                          </div>-->
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6" class="rounded-bl-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h4 class="text-center">¿Aún no tienes una cuenta?</h4>
                        <h5 class="text-center">
                          Vamos a prepararlo todo para que puedas comenzar.<br />registrate.
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++"
                          >INSCRIRSE</v-btn
                        >
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row>
                  <v-col cols="12" md="6" class="rounded-br-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h3 class="text-center">¿Ya te registraste?</h3>
                        <h5 class="text-center">
                          Inicie sesión en su cuenta para poder continuar<br />aprendiendo
                          en AMALENSEGUA.
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--"
                          >INICIAR SESIÓN</v-btn
                        >
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">
                        Regístrese para obtener una cuenta
                      </h4>
                      <h5 class="text-center grey--text">
                        Vamos a prepararlo todo para que pueda comenzar
                      </h5>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Primer Nombre"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                              />
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Segundo Nombre"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                              />
                            </v-col>
                          </v-row>

                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Primer Apellido"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                              />
                            </v-col>

                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Segundo Apellido"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                              />
                            </v-col>
                          </v-row>
                          <v-text-field
                            label="Correo electrónico"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />

                          <v-text-field
                            label="Contraseña"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                          />

                          <v-btn color="#3737CD" dark block tile
                            >INSCRIBIRSE</v-btn
                          >
                        </v-col>
                        <div></div>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "InicioSesion",
  components: {},
  data() {
    return {
      step: 1,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    enlace() {
      this.$router.push({ path: "/admin" });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    blinds() {
      alert(
        "Para recuperar tu contraseña comunicate con el administrador: amalensegua@gmail.com"
      );
    },
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
  background-color: #3737cd;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
  background-color: #3737cd;
}
.carta {
  margin-top: 100px;
  margin-bottom: 61px;
}
</style>

