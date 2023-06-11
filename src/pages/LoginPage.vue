<template>
  <div class="titulo">
    <i class="fa-solid fa-calendar-check fa-3x"></i>
    <h1> Calendário Unificado</h1>
  </div>

  <div class="login">
    <h2 class="login-title">Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="user" placeholder="Digite seu usuário" required>
      <input type="password" v-model="password" placeholder="Digite sua senha" required>
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

<style>
html,
body {
  align-items: center;
  justify-content: center;
  background: #010B40;
  /* Cor de fundo Dark Blue */
}

.titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1ED96F;
}

.titulo i {
  margin-right: 0.5em; /* Espaço entre o ícone e o título */
}

.login {
  max-width: 880px;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
  background: #F4F7F9;
  border-radius: 21px;
  padding-top: 2%;
}

@media (max-width: 767px) {
  .login {
    max-width: 300px;
    padding: 20px;
  }
}

@media (min-width: 768px) {
  .login {
    max-width: 400px;
  }
}

.login-title {
  color: #17BF60;
  font-weight: 700;
  font-size: 2rem;
  text-align: left;
}

.login-actions {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.login-button {
  padding: 10px;
  background: rgba(242, 41, 95, 0.1);
  color: #F2295F;
  border-radius: 213px;
  cursor: pointer;
  border: none;
  margin-right: 10px;
}

.login-button i {
  color: #F2295F;
}

.forgot-password {
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  color: #F2295F;
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  box-sizing: border-box;
  background: #FFFFFF;
  margin-bottom: 10px;
  padding: 20px;
  border: 2px solid rgba(79, 88, 115, 0.1);
  border-radius: 213px;
}

button {
  padding: 10px;
  background: rgba(242, 41, 95, 0.1);
  color: #F2295F;
  border-radius: 213px;
  cursor: pointer;
  border: none;
}
</style>