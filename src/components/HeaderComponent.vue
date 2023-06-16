<template>
  <header>
    <div class="containter">
      <v-btn icon @click="goBack" class="icon">
        <v-icon class="custom-icon-arrow-left">mdi-arrow-left</v-icon>
      </v-btn>
      <div class="logo">
        <v-icon class="custom-icon-calendar-check mr-2">mdi-calendar-check</v-icon>
      </div>
      <v-btn icon @click="logout" class="icon">
        <v-icon class="custom-icon-logout">mdi-logout</v-icon>
      </v-btn>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
 header {
    background-color: #010B40 !important;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .containter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .custom-icon-calendar-check {
    font-size: 3em;
  }
  
  .custom-icon-logout,
  .custom-icon-arrow-left {
    font-size: 2em;
  }
  
  .custom-icon-calendar-check,
  .custom-icon-logout,
  .custom-icon-arrow-left {
    color: #1ED96F;
    background-color: transparent;
  }

  .icon {
    background-color: transparent;
  }
</style>