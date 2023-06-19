<template>
  <div class="title">
    <i class="fa-solid fa-calendar-check fa calendar-icon"></i>
    <h1> Calendário Unificado</h1>
  </div>

  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="input-container">
        <i class="fa-solid fa-user user-icon"></i>
        <input type="text" v-model="user.username" placeholder="Digite seu usuário" required>
      </div>
      <div class="input-container">
        <i class="fa-solid fa-lock password-icon"></i>
        <input type="password" v-model="user.password" placeholder="Digite sua senha" required>
      </div>
      <div class="login-actions">
        <button type="submit" class="login-button">
          <i class="fas fa-sign-in-alt"></i> Entrar
        </button>
        <a href="#" class="forgot-password">Esqueci minha senha</a>
      </div>
    </form>
    <router-view></router-view>
  </div>
</template>

<script>
import User from '@/models/user';
import api from "@/plugins/vueAxios";

export default {
  data() {
    return {
      username: '',
      password: '',
      user: new User('', '')
    };
  },
  methods: {
    async login() {
      api
        .post('/sessions', this.user)
        .then((response) => {
          this.usuario = response.data.userReturn.user;

          this.email = this.usuario.email;
          this.nome = this.usuario.username;
          this.perfil = this.usuario.perfil;

          window.localStorage.setItem("NOME", this.nome)
          window.localStorage.setItem("EMAIL", this.email)
          window.localStorage.setItem("PERFIL", this.perfil)

          if (window.localStorage.getItem("PERFIL") == 'Aluno') {
            this.$router.push("./home")
          } else if (window.localStorage.getItem("PERFIL") == 'Professor') {
            this.$router.push('./professor')
          }
          console.log(response.data.userReturn.user);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    }

  }
};
</script>

<style src="./style.css"></style>