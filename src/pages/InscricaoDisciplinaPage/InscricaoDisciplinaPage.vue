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
                  <span class="course-code">{{ course.code }}</span>
                  <v-btn @click="enrollCourse(course)" :class="course.isEnrolled ? 'custom-enrolled-button' : 'custom-unenrolled-button'" small>
                    <v-icon>{{ course.isEnrolled ? 'mdi-check-circle-outline' : 'mdi-plus-circle-outline' }}</v-icon>
                    {{ course.isEnrolled ? 'Inscrito' : 'Inscrever-se' }}
                  </v-btn>
                </div>
              </v-card-title>
              <v-card-text>
                <p class="course-name">{{ course.name }}</p>
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

export default {
  components: {
    HeaderComponent
  },
  data() {
    return {
      searchTerm: '',
      courses: [
        { id: 1, name: 'Inteligência Artificial', code: 'COS123', isEnrolled: true },
        { id: 2, name: 'Introdução à Programação', code: 'COS124', isEnrolled: false },
        { id: 3, name: 'Banco de Dados', code: 'COS125', isEnrolled: true },
        { id: 4, name: 'Redes de Computadores', code: 'MAC112', isEnrolled: false },
        { id: 5, name: 'Algoritmos e Estruturas de Dados', code: 'EEL232', isEnrolled: true },
        { id: 6, name: 'Lógica Matemática', code: 'COS127', isEnrolled: false },
      ]
    };
  },
  computed: {
    filteredCourses() {
      if (this.searchTerm) {
        const searchTermLower = this.searchTerm.toLowerCase();
        return this.courses.filter(course => 
          course.name.toLowerCase().includes(searchTermLower) ||
          course.code.toLowerCase().includes(searchTermLower)
        );
      }
      return this.courses;
    }
  },
  methods: {
    enrollCourse(course) {
      // Verifica se o curso já está inscrito
      if (course.isEnrolled) {
        console.log('Curso já está inscrito:', course);
        return; // Não faz nada se já estiver inscrito
      }
      
      // Realiza a inscrição no curso - Implementar logica para envio dos dados de inscricao
      course.isEnrolled = true;
      console.log('Inscrição na disciplina:', course);
    }
  }
};
</script>


<style scoped src="./style.css"></style>
