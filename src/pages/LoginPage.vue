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
        <input type="text" v-model="user" placeholder="Digite seu usuário" required>
      </div>
      <div class="input-container">
        <i class="fa-solid fa-lock password-icon"></i>
        <input type="password" v-model="password" placeholder="Digite sua senha" required>
      </div>
      <div class="login-actions">
        <button type="submit" class="login-button">
          <i class="fas fa-sign-in-alt"></i> Entrar
        </button>
        <a href="#" class="forgot-password">Esqueci minha senha</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Lógica para autenticação do usuário
      // Pode ser uma chamada a uma API, validação de credenciais, etc.
      if (this.user === 'user@example.com' && this.password === '123456') {
        // Login bem-sucedido, redirecionar para a página principal
        this.$router.push('/dashboard');
      } else {
        // Exibir mensagem de erro ou tratar a falha no login
        console.log('Credenciais inválidas');
      }
    }
  }
};
</script>

<style src="./style.css"></style>