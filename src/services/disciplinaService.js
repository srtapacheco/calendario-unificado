import api from "@/plugins/vueAxios";

export default class DisciplinaService {

    static async resgatarDisciplinasUsuario(nomeUsuario) {
        return await api.get('/disciplina', { params: { username: nomeUsuario, } });
    }

    static async resgatarDetalhesDisciplina(codigoDisciplina) {
        return await api.get('/disciplina/detalhes', { params: { codigo: codigoDisciplina, } });
    }

    static async removerDisciplinaAluno(disciplinaUsuario) {
        return await api.delete('/aluno/disciplina', { data: disciplinaUsuario });
    }

    static async removerDisciplina(turma) {
        return await api.delete('/disciplina', { data: turma });
    }

    static async buscarDisciplinas(nomeUsuario) {
        return await api.get('/disciplina/lista', { params: { username: nomeUsuario, } });
    }

    static async adicionarDisciplinaAoAluno(disciplinaAluno) {
        return await api.post('/aluno/disciplina', disciplinaAluno);
    }

    static async resgatarCursos(nomeCurso) {
        return await api.get('/curso', { params: { nome: nomeCurso, } });
    }

    static async criarDisciplina(disciplina) {
        return await api.post('/disciplina', disciplina);
    }

}
