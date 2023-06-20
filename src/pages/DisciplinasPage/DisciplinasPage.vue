<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <div class="external">
        <div class="container">
          <h2>Suas disciplinas</h2>
          <div class="card-container" v-for="turma in turmasInscrito" :key="turma.codigo">
            <v-card elevation="0" class="custom-card" @click="detalhesDisciplina(turma.codigo)">
              <div class="card-content">
                <v-card-title class="custom-title-card">{{ turma.codigo }}</v-card-title>
                <div class="delete-icon-container">
                  <v-icon class="custom-delete-icon" @click.stop="toggleDeleteConfirmation(turma)"
                    :class="{ 'disabled': turma.showDeleteConfirmation }">mdi-trash-can-outline</v-icon>
                </div>
              </div>
              <v-card-subtitle class="custom-subtitle-card">{{ turma.nome }}</v-card-subtitle>
              <v-card-text class="custom-courses-card">{{ turma.courses }}</v-card-text>
            </v-card>
          </div>
        </div>
      </div>
      <ModalConfirmation :show-modal="showModal" @confirm-delete="deleteCardConfirmation()" />
      <v-btn class="add-button" icon>
        <v-icon class="custom-icon-add" @click="addTurma()">mdi-plus</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>


<script>
import HeaderComponent from '../../components/HeaderComponent.vue';
import ModalConfirmation from '@/components/ModalConfirmation.vue';
import DisciplinaService from "@/services/disciplinaService";
import DisciplinaUsuario from '@/models/disciplinaUsuario.js'
import Turma from '@/models/turma.js'

export default {
  components: {
    HeaderComponent,
    ModalConfirmation
  },
  data() {
    return {
      username: window.localStorage.getItem('NOME'),
      perfil: window.localStorage.getItem('PERFIL'),
      turmasInscrito: [],
      drawer: false,
      showModal: false,
      selectedDiscipline: null,
      isModalVisible: false,
    };
  },
  created() {
    DisciplinaService.resgatarDisciplinas(this.username)
      .then((response) => {
        this.turmasInscrito = response.data;
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  },
  methods: {
    deleteCard(turma) {
      this.selectedDiscipline = turma;
      this.showModal = true;
    },
    cancelDeleteCard() {
      if (this.selectedDiscipline) {
        this.selectedDiscipline.showDeleteConfirmation = false;
        this.selectedDiscipline = null;
      }
      this.showModal = false;
    },
    toggleDeleteConfirmation(turma) {
      if (!turma.showDeleteConfirmation) {
        turma.showDeleteConfirmation = true;
        this.selectedDiscipline = turma;
        this.showModal = true;

      } else {
        turma.showDeleteConfirmation = false;
        this.cancelDeleteCard();
      }
    },
    deleteCardConfirmation() {
      const index = this.turmasInscrito.findIndex(item => item.codigo === this.selectedDiscipline.codigo);
      if (index !== -1) {
        this.turmasInscrito.splice(index, 1);
      }
      this.showModal = false;

      if (this.perfil === "Aluno") {
        const disciplinaUsuario = new DisciplinaUsuario(this.username, this.selectedDiscipline.id);
        console.log(disciplinaUsuario);

        DisciplinaService.removerDisciplinaAluno(disciplinaUsuario)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.response.data.message);
          });
      } else {
        const turma = new Turma(this.selectedDiscipline.codigo);
        console.log(turma);

        DisciplinaService.removerDisciplina(turma)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.response.data.message);
          });
      }
    },
    addTurma() {
      if (this.perfil === "Aluno") {
        this.$router.push("/disciplinas/inscricao")
      } else {
        this.$router.push("/disciplinas/edicao")
      }
    },
    detalhesDisciplina(codigoTurma) {
      this.$router.push({
        name: 'Detalhes Disciplina', params: { codigoTurma: codigoTurma }
      })
    },
  }
};
</script>

<style src="./style.css" scoped></style>