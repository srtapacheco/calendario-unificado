<template>
  <v-app>
    <HeaderComponent />

    <v-main>
      <div class="external">
        <div class="container">
          <div class="code-container">
            <h2> {{ discipline.codigo }} </h2>
            <v-btn v-if="userType === 'Professor'" class="edit-button" icon @click="editDiscipline">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
          <h2 class="custom-name-title">{{ discipline.nome }}</h2>
          <h3>Cursos ofertados</h3>
          <ul>
            <li v-for="curso in discipline.cursos" :key="curso.id">{{ curso.nome }}</li>
          </ul>
          <h3>Provas</h3>
          <span class="warn-null-exam" v-if="discipline.provas === null">Nenhuma prova marcada</span>
          <ul>
            <li v-for="examDate in discipline.provas" :key="examDate.id" >
              <span class="custom-description-exam">{{ examDate.nome }} &nbsp;</span>
              <span>{{ formatDate(examDate.data) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '../../components/HeaderComponent.vue';
import DisciplinaService from '@/services/disciplinaService';
import moment from 'moment'

export default {
  components: {
    HeaderComponent
  },
  created() {
    DisciplinaService.resgatarDetalhesDisciplina(this.codigoTurma)
      .then((response) => {
        this.discipline = response.data[0];
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  },
  data() {
    return {
      userType: window.localStorage.getItem('PERFIL'),
      discipline: [],
      codigoTurma: this.$route.params.codigoTurma,
    };
  },
  methods: { 
      formatDate(value){
         if (value) {
           return moment(String(value)).format('DD/MM/YYYY')
          }
      },
      editDiscipline(){
        this.$router.push({name: 'Editar Disciplina', params: { codigoTurma: this.codigoTurma }});
      }
   },
};
</script>

<style src="./style.css" scoped></style>
