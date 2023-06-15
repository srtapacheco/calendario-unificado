<template>
  <v-app>
    <v-app-bar app class="custom-app-bar">
      <!-- ... rest of the code ... -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app></v-navigation-drawer>

    <v-main>
      <div class="external">
        <div class="container">
          <h2>Suas disciplinas</h2>

          <div class="container-options">
            <div class="card-container">
              <v-card class="custom-card" v-for="option in profileOptions" :key="option.cod" @click="cardClicked(option)">
                <v-card-title class="custom-title-card">{{ option.cod }}</v-card-title>
                <v-card-subtitle class="custom-subtitle-card">{{ option.name }}</v-card-subtitle>
                <v-card-text>{{ option.description }}</v-card-text>
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
      profileOptions: [
        {
          cod: "COS123",
          name: "Inteligencia Artificial",
          description: "Engenharia Eletrônica e de Computação, Engenharia de Computação e Informação"
        },
        {
          cod: "COS234",
          name: "Algebra Linear Computacional",
          description: "Engenharia Civil, Engenharia de Computação e Informação"
        },
      ],
      drawer: false,
    };
  },
  methods: {
    // ... rest of the methods ...
  },
};
</script>

<style src="./style.css"></style>