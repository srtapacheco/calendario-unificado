<template>
  <v-app>
    <v-app-bar app class="custom-app-bar">
      <v-btn icon @click="goBack">
        <v-icon class="custom-icon-arrow-left">mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="toolbar-title">
        <v-icon class="custom-icon-calendar-check mr-2">mdi-calendar-check</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon class="custom-icon-logout">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app></v-navigation-drawer>

    <v-main>
      <div class="external">
        <div class="container">
          <h1>Olá</h1>
          <h2>{{ userName }}</h2>

          <div class="container-options">
            <p>Escolha como quer entrar</p>
            <div class="card-container">
              <v-card class="custom-card" v-for="option in profileOptions" :key="option.opcao"
                @click="cardClicked(option)">
                <v-list-item class="custom-list">
                  <v-list-item-icon>
                    <i :class="['custom-icon', option.icon]"></i>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="custom-title">{{ option.opcao }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      userName: "Fulano de tal",
      profileOptions: [],
      drawer: false,
    };
  },
  created() {
    // Verificar o tipo de usuário
    const userType = this.getUserType();

    // Definir as opções do objeto profileOptions com base no tipo de usuário
    this.profileOptions = [
      { opcao: userType === "aluno" ? "Calendário" : "Marcar prova", icon: "mdi mdi-calendar-plus-outline" },
      { opcao: "Disciplinas", icon: "mdi mdi-bulletin-board" },
    ];
  },
  methods: {
    getUserType() {
      // Lógica para obter o tipo de usuário
      // Chamada a uma API
      // Retornar o tipo de usuário identificado
      return "aluno";
    },
    cardClicked(option) {
      // Lógica do clique no card
      console.log("Card clicado:", option);
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style src="./style.css" scopedZZ></style>
