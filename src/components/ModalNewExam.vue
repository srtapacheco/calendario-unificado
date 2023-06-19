<template>
  <v-dialog v-model="addExamModal" max-width="500px">
    <v-card class="custom-modal-new-exam">
      <v-icon @click="closeAddExamModal" class="close-icon">mdi-close</v-icon>
      <v-card-title class="custom-title-modal">
        Marcar Prova
      </v-card-title>
      <v-card-text>
        <v-icon class="clipboard-icon">mdi-clipboard-outline</v-icon>
        <span class="label">Nome da prova</span>
        <v-text-field
          v-model="newExamName"
          label="Nome da prova"
          :error-messages="nameErrors"
          @input="clearNameErrors"
        ></v-text-field>
        <v-icon class="calendar-icon">mdi-calendar</v-icon>
        <span class="label">Data</span>
        <v-text-field
          v-model="newExamDate"
          label="Data da prova"
          placeholder="DD/MM/AAAA"
          :error-messages="dateErrors"
          @input="clearDateErrors"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="modal-new-exam-actions">
        <v-btn class="add-button-new-exam" @click="addExam">
          <v-icon>mdi-plus-circle-outline</v-icon>
          Adicionar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      newExamName: '',
      newExamDate: '',
      nameErrors: [],
      dateErrors: []
    };
  },
  methods: {
    addExam() {
      if (!this.newExamName) {
        this.nameErrors = ['Por favor, insira o nome da prova.'];
      }
      if (!this.newExamDate) {
        this.dateErrors = ['Por favor, insira a data da prova.'];
      }
      
      if (this.newExamName && this.newExamDate) {
        this.$emit('add-exam', {
          description: this.newExamName,
          date: this.newExamDate
        });
        this.closeAddExamModal();
      }
    },
    emitCloseModal() {
      this.$emit('close-modal');
    },
    closeAddExamModal() {
      this.addExamModal = false;
      this.$emit('close-modal');
    },
    clearNameErrors() {
      this.nameErrors = [];
    },
    clearDateErrors() {
      this.dateErrors = [];
    }
  }
};
</script>

<style scoped>
.custom-modal-new-exam {
  width: 410px;
  height: 450px;
  padding: 30px;
  border-radius: 21px !important;
  background: #FFFFFF;
}

.custom-title-modal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 2rem;
  line-height: 60px;
  color: #17BF60;
  margin-bottom: 1rem;
}

.close-icon {
  color: #F2295F;
  cursor: pointer;
  margin-left: auto;
}

.clipboard-icon,
.calendar-icon {
  color: #F2295F;
  margin-right: 0.5rem;
}

.label {
  font-size: 1.3rem;
  font-weight: 700;
  color: #4F5873;
}
::deep(.v-messages__message){
  line-height: 85px !important;
}

.modal-new-exam-actions{
  justify-content: center;
}

.add-button-new-exam {
  background: #1ED96F;
  border-radius: 213px;
  color: #FFFFFF;
}
</style>
