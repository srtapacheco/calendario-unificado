import api from "@/plugins/vueAxios";

export default class DisciplinaService {

    static async resgatarDisciplinas(nomeUsuario) {
        return await api.get('/disciplina', { params: { username: nomeUsuario, } });
    }

    static async removerDisciplinaAluno(disciplinaUsuario) {
        return await api.delete('/aluno/disciplina', { data: JSON.stringify(disciplinaUsuario) });
    }

    static async removerDisciplina(turma) {
        return await api.delete('/disciplina', { data: JSON.stringify(turma) });
    }

}
