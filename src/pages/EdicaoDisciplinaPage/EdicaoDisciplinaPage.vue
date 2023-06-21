<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <div class="external">
        <div class="container">
          <div class="code-container">
            <h2 v-if="!isEditingCod">{{ discipline.codigo != null ? discipline.codigo : "" }}</h2>
            <v-text-field v-else v-model="discipline.codigo" label="Código da disciplina"></v-text-field>
            <v-btn class="edit-button" icon @click="editCodDiscipline">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
          <div class="code-container">
            <h2 v-if="!isEditingName" class="custom-name-title">{{ discipline.nome != null ? discipline.nome : "" }}</h2>
            <v-text-field v-else v-model="discipline.nome" label="Nome da disciplina"></v-text-field>
            <v-btn class="edit-button" icon @click="editNameDiscipline">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>

          <h3>Cursos ofertados</h3>
          <ul>
            <li v-for="course in discipline.cursos" :key="course.id">
              <span>{{ course.nome }}</span>
              <v-icon class="delete-icon" @click="deleteCourse(course.id)">
                mdi-trash-can-outline
              </v-icon>
            </li>
          </ul>

          <div class="code-container">
            <v-autocomplete v-model="newCourse" :items="availableCourses" item-title="nome" item-value="id"
              label="Buscar curso" clearable></v-autocomplete>
            <v-btn class="edit-button" icon @click="addCourse">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>

          <h3>Provas</h3>
          <ul>
            <li v-for="examDate in discipline.provas" :key="examDate.id">
              <span class="custom-description-exam">{{ examDate.description }}</span>
              <span>{{ examDate.date }}</span>
              <v-icon class="delete-icon" @click="deleteExamDate(examDate.id)">
                mdi-trash-can-outline
              </v-icon>
            </li>
          </ul>
          <div class="code-container">
            <v-btn class="add-exam-button" @click="openAddExamModal">
              <v-icon>mdi-plus-circle-outline</v-icon>
              Adicionar prova
            </v-btn>
          </div>

          <v-btn class="add-exam-button" @click="createDiscipline">
            <v-icon>mdi-plus-circle-outline</v-icon>
            Salvar
          </v-btn>
        </div>
      </div>
      <ModalNewExam v-model="showModal" @add-exam="addExam" @close-modal="closeAddExamModal" />
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent.vue';
import ModalNewExam from '@/components/ModalNewExam.vue';
import DisciplinaService from "@/services/disciplinaService";

export default {
  components: {
    HeaderComponent,
    ModalNewExam
  },
  data() {
    return {
      codigoTurma: this.$route.params.codigoTurma,
      isEditingCod: false,
      isEditingName: false,
      discipline: {
        codigo: null,
        nome: null,
        cursos: [],
        provas: [],
      },
      filteredCourses: [],
      newCourse: null,
      showModal: false,
      examDateIdCounter: 3, // Contador para gerar identificadores únicos para as datas de prova
    };
  },
  computed: {
    availableCourses() {
      const registeredCourseNames = this.discipline.cursos.map(course => course.nome);
      return this.filteredCourses.filter(course => !registeredCourseNames.includes(course.nome));
    },
  },
  created() {
    DisciplinaService.resgatarCursos('')
      .then((response) => {
        this.filteredCourses = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });

    DisciplinaService.resgatarDetalhesDisciplina(this.codigoTurma)
      .then((response) => {
        this.discipline = response.data[0];
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });

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
    createDiscipline() {
      if (this.codigo === 'new'){
        DisciplinaService.criarDisciplina(this.discipline)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
      } else {
        DisciplinaService.atualizarDisciplina(this.discipline)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
      }
      
      this.$router.push("/disciplinas");
    }
  },
};
</script>
<style src="./style.css" scoped></style>
