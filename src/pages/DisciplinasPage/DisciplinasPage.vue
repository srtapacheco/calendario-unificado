<template>
  <v-app>
    <HeaderComponent />

    <v-main>
      <div class="external">
        <div class="container">
          <h2>Suas disciplinas</h2>
          <div class="card-container">
            <v-card elevation="0" class="custom-card" v-for="option in profileOptions" :key="option.cod"
              @click="cardClicked(option)">
              <div class="card-content">
                <v-card-title class="custom-title-card">{{ option.cod }}</v-card-title>
                <div class="delete-icon-container" @click="deleteCard(option)">
                  <v-icon class="custom-delete-icon">mdi-trash-can-outline</v-icon>
                </div>
              </div>
              <v-card-subtitle class="custom-subtitle-card">{{ option.name }}</v-card-subtitle>
              <v-card-text class="custom-courses-card">{{ option.courses }}</v-card-text>
            </v-card>
          </div>
        </div>
      </div>
      <v-btn class="add-button" icon>
        <v-icon class="custom-icon-add">mdi-plus</v-icon>
      </v-btn>


    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent
  },
  data() {
    return {
      userName: "Fulano de tal",
      profileOptions: [
        {
          cod: "COS123",
          name: "Inteligencia Artificial",
          courses: "Engenharia Eletrônica e de Computação, Engenharia de Computação e Informação"
        },
        {
          cod: "COS234",
          name: "Algebra Linear Computacional",
          courses: "Engenharia Civil, Engenharia de Computação e Informação"
        },
        {
          cod: "COS987",
          name: "Computadores e Sociedade 1",
          courses: "Engenharia Civil, Engenharia de Computação e Informação"
        },
        {
          cod: "COS988",
          name: "Computadores e Sociedade 2",
          courses: "Engenharia Civil, Engenharia de Computação e Informação"
        },
        {
          cod: "COS989",
          name: "Computadores e Sociedade 3",
          courses: "Engenharia Civil, Engenharia de Computação e Informação"
        },
      ],
      drawer: false,
    };
  },
  methods: {
    deleteCard(option) {
      const index = this.profileOptions.findIndex(item => item.cod === option.cod);
      if (index !== -1) {
        this.profileOptions.splice(index, 1);
      }
    },
    cardClicked(option) {
      // Implemente a lógica desejada quando um card for clicado
      console.log("Card clicado:", option);
    },
  },
};
</script>

<style src="./style.css" scoped></style>