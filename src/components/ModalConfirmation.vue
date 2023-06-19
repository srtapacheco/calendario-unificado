<template>
    <v-dialog persistent v-model="showConfirmationModal" max-width="400">
        <v-card>
            <v-card-title class="headline">Confirmar exclusão</v-card-title>
            <v-card-text>
                Tem certeza de que deseja excluir esta disciplina?
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="cancelDelete">Cancelar</v-btn>
                <v-btn text @click="confirmDelete">Excluir</v-btn>
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
        },
        selectedDiscipline: {
            type: Object,
            default: null
        }
    },

    data() {
        return {
            showConfirmationModal: false
        };
    },
    watch: {
        showModal(value) {
            this.showConfirmationModal = value;
        }
    },
    methods: {
        cancelDelete() {
            this.showConfirmationModal = false;
        },
        confirmDelete() {
            this.$emit('confirm-delete');
            this.showConfirmationModal = false;
        }

    }
};

</script>
  