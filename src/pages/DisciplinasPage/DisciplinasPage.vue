<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <div class="external">
        <div class="container">
          <h2>Suas disciplinas</h2>
          <div class="card-container">
            <v-card elevation="0" class="custom-card" v-for="option in profileOptions" :key="option.cod">
              <div class="card-content">
                <v-card-title class="custom-title-card">{{ option.cod }}</v-card-title>
                <div class="delete-icon-container">
                  <v-icon class="custom-delete-icon" @click="toggleDeleteConfirmation(option)"
                    :class="{ 'disabled': option.showDeleteConfirmation }">mdi-trash-can-outline</v-icon>
                </div>
              </div>
              <v-card-subtitle class="custom-subtitle-card">{{ option.name }}</v-card-subtitle>
              <v-card-text class="custom-courses-card">{{ option.courses }}</v-card-text>
            </v-card>
          </div>
        </div>
      </div>
      <ModalConfirmation :show-modal="showModal" @confirm-delete="deleteCardConfirmation" />
      <v-btn class="add-button" icon>
        <v-icon class="custom-icon-add">mdi-plus</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>


<script>
import HeaderComponent from '../../components/HeaderComponent.vue';
import ModalConfirmation from '@/components/ModalConfirmation.vue';

export default {
  components: {
    HeaderComponent,
    ModalConfirmation
  },
  data() {
    return {
      userName: window.localStorage.getItem('NOME'),
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
      showModal: false,
      selectedDiscipline: null,
      isModalVisible: false,
    };
  },

  methods: {
    deleteCard(option) {
      this.selectedDiscipline = option;
      this.showModal = true;
    },
    cardClicked(option) {
      // Implementar a lógica para quando um card for clicado
      console.log("Card clicado:", option);
    },
    deleteCardConfirmation() {
      const index = this.profileOptions.findIndex(item => item.cod === this.selectedDiscipline.cod);
      if (index !== -1) {
        this.profileOptions.splice(index, 1);
      }
      this.showModal = false;
    },

    cancelDeleteCard() {
      if (this.selectedDiscipline) {
        this.selectedDiscipline.showDeleteConfirmation = false;
        this.selectedDiscipline = null;
      }
      this.showModal = false;
    },
    toggleDeleteConfirmation(option) {
      if (!option.showDeleteConfirmation) {
        option.showDeleteConfirmation = true;
        this.selectedDiscipline = option;
        this.showModal = true;
      } else {
        option.showDeleteConfirmation = false;
        this.cancelDeleteCard();
      }
    },
  },
};
</script>

<style src="./style.css" scoped></style>