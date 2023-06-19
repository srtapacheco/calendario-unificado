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
            <li v-for="course in discipline.courses" :key="course.id">
              <span>{{ course.name }}</span>
              <v-icon v-if="userType === 'professor'" class="delete-icon" @click="deleteCourse(course.id)">
                mdi-trash-can-outline
              </v-icon>
            </li>
          </ul>

          <div class="code-container">
            <v-autocomplete v-model="newCourse" :items="availableCourses" item-title="name" item-value="id"
              label="Buscar curso" clearable></v-autocomplete>
            <v-btn v-if="userType === 'professor'" class="edit-button" icon @click="addCourse">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>

          <h3>Provas</h3>
          <ul>
            <li v-for="examDate in discipline.examDates" :key="examDate.id">
              <span class="custom-description-exam">{{ examDate.description }}</span>
              <span>{{ examDate.date }}</span>
              <v-icon v-if="userType === 'professor'" class="delete-icon" @click="deleteExamDate(examDate.id)">
                mdi-trash-can-outline
              </v-icon>
            </li>
          </ul>
          <div class="code-container">
            <v-btn v-if="userType === 'professor'" class="add-exam-button" @click="openAddExamModal">
              <v-icon>mdi-plus-circle-outline</v-icon>
              Adicionar prova
            </v-btn>
          </div>
        </div>
      </div>

      <ModalNewExam v-model="showModal" @add-exam="addExam" @close-modal="closeAddExamModal" />
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent.vue';
import ModalNewExam from '@/components/ModalNewExam.vue';

export default {
  components: {
    HeaderComponent,
    ModalNewExam
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
      filteredCourses: [
        { id: 3, name: "Engenharia Mecânica" },
        { id: 4, name: "Engenharia Elétrica" },
        { id: 5, name: "Ciência da Computação" },
        { id: 6, name: "Engenharia Eletrônica e de Computação" },
      ],
      newCourse: null,
      showModal: false,
      examDateIdCounter: 3, // Contador para gerar identificadores únicos para as datas de prova
    };
  },
  methods: {
    editCodDiscipline() {
      this.isEditingCod = !this.isEditingCod;
    },
    editNameDiscipline() {
      this.isEditingName = !this.isEditingName;
    },
    addCourse() {
      if (this.newCourse) {
        const selectedCourse = this.filteredCourses.find(course => course.id === this.newCourse);
        if (selectedCourse) {
          this.discipline.courses.push(selectedCourse);
          this.newCourse = null;
        }
      }
    },
    deleteCourse(courseId) {
      this.discipline.courses = this.discipline.courses.filter(course => course.id !== courseId);
    },
    deleteExamDate(examDateId) {
      this.discipline.examDates = this.discipline.examDates.filter(examDate => examDate.id !== examDateId);
    },
    openAddExamModal() {
      this.showModal = true;
    },
    closeAddExamModal() {
      this.showModal = false;
    },
    addExam(newExam) {
      newExam.id = this.examDateIdCounter++; // Atribui um identificador único para a nova data de prova
      this.discipline.examDates.push(newExam);
      this.closeAddExamModal();
    },
  },
};
</script>
<style src="./style.css" scoped></style>
