<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <div class="external">
        <div class="container">
          <h2>Inscrição em disciplinas</h2>
          <h3>Disciplinas do seu curso</h3>
          <div>
            <v-text-field v-model="searchTerm" label="Busca por nome ou código" prepend-icon="mdi-magnify"></v-text-field>
            <v-card class="custom-card" elevation="0" v-for="course in filteredCourses" :key="course.id">
              <v-card-title>
                <div class="course-info">
                  <span class="course-code">{{ course.codigo }}</span>
                  <v-btn @click="enrollCourse(course)"
                    :class="course.isAlunoInscrito ? 'custom-enrolled-button' : 'custom-unenrolled-button'" small>
                    <v-icon>{{ course.isAlunoInscrito ? 'mdi-check-circle-outline' : 'mdi-plus-circle-outline' }}</v-icon>
                    {{ course.isAlunoInscrito ? 'Inscrito' : 'Inscrever-se' }}
                  </v-btn>
                </div>
              </v-card-title>
              <v-card-text>
                <p class="course-name">{{ course.nome }}</p>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent.vue';
import DisciplinaService from "@/services/disciplinaService";

export default {
  components: {
    HeaderComponent
  },
  data() {
    return {
      searchTerm: '',
      courses: [],
      username: window.localStorage.getItem('NOME'),
      turmasInscrito: []
    };
  },
  computed: {
    filteredCourses() {
      if (this.searchTerm) {
        const searchTermLower = this.searchTerm.toLowerCase();
        return this.courses.filter(course =>
          course.nome.toLowerCase().includes(searchTermLower) ||
          course.codigo.toLowerCase().includes(searchTermLower)
        );
      }
      return this.courses;
    }
  },
  created() {
    DisciplinaService.buscarDisciplinas(this.username)
      .then((response) => {
        this.courses = response.data;
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });

    return this.courses;
  },
  methods: {
    enrollCourse(course) {
      if (course.isAlunoInscrito) {
        console.log('Curso já está inscrito:', course);
        return;
      }
      const alunoDisciplina = { username: this.username, disciplinaId: course.id };

      DisciplinaService.adicionarDisciplinaAoAluno(alunoDisciplina)
        .then(() => {
          course.isAlunoInscrito = true;
          console.log('Inscrição na disciplina:', course.nome);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });

    },
  }
};
</script>


<style scoped src="./style.css"></style>
