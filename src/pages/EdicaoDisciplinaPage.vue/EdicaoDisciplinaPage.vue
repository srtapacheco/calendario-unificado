<template>
  <v-app>
    <HeaderComponent />

    <v-main>
      <div class="external">
        <div class="container">
          <div class="code-container">
            <h2 v-if="!isEditingCod">{{ discipline.cod }}</h2>
            <v-text-field v-else v-model="discipline.cod"></v-text-field>
            <v-btn v-if="userType === 'professor'" class="edit-button" icon @click="editCodDiscipline">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
          <div class="code-container">
            <h2 v-if="!isEditingName" class="custom-name-title">{{ discipline.name }}</h2>
            <v-text-field v-else v-model="discipline.name"></v-text-field>
            <v-btn v-if="userType === 'professor'" class="edit-button" icon @click="editNameDiscipline">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
          
          
          <h3>Cursos ofertados</h3>
          <ul>
            <li v-for="course in discipline.courses" :key="course.id">{{ course.name }}</li>
          </ul>
          <h3>Provas</h3>
          <ul>
            <li v-for="examDate in discipline.examDates" :key="examDate.id">
              <span class="custom-description-exam">{{ examDate.description }}</span>
              <span>{{ examDate.date }}</span>
            </li>
          </ul>
        </div>
      </div>
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
      userType: 'professor',
      isEditingCod: false,
      isEditingName: false,
      discipline: {
        cod: "COS123",
        name: "Inteligencia Artificial",
        courses: [
          { id: 1, name: "Engenharia Eletrônica e de Computação" },
          { id: 2, name: "Engenharia de Computação e Informação" },
        ],
        examDates: [
          { id: 1, description: "P1", date: "22/05/2023" },
          { id: 2, description: "P2", date: "20/07/2023" },
        ],
      },
    };
  },
  methods: {
    editCodDiscipline() {
      this.isEditingCod = !this.isEditingCod;
    },
    editNameDiscipline() {
      this.isEditingName = !this.isEditingName;
    },
  },
};
</script>

<style src="./style.css" scoped></style>
