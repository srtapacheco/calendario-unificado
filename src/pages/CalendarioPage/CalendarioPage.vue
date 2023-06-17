<template>
  <HeaderComponent />
  <div class="container">
    <main>
      <h1>Calendário dos Cursos ministrados por você</h1>

    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
  components: {
    HeaderComponent
  },
}
</script>

<style scoped>
  .container {
    margin-top: 4rem;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  main {
    max-width: 1080px;
    height: 400px;
    padding: 1rem 2rem;
    background-color: #fff;
  }
 
</style>