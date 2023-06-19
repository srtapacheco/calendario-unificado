<template>
  <v-app>
    <HeaderComponent :hasBackButton="false"/>

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
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  components: { HeaderComponent },
  data() {
    return {
      userName: window.localStorage.getItem('NOME'),
      profileOptions: [],
      drawer: false,
    };
  },
  created() {
    const userType = window.localStorage.getItem('PERFIL');

    this.profileOptions = [
      { opcao: userType === "aluno" ? "Calendário" : "Marcar prova", icon: "mdi mdi-calendar-plus-outline" },
      { opcao: "Disciplinas", icon: "mdi mdi-bulletin-board" },
    ];
  },
  methods: {
    cardClicked(option) {
      if (option.opcao === "Disciplinas"){
        this.$router.push("./disciplinas")
      } else {
        this.$router.push("./calendario")
      }
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style src="./style.css" scoped></style>
