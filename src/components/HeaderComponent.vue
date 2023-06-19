<template>
  <header>
    <div class="containter">
      <v-btn v-if="hasBackButton" icon @click="goBack" class="icon">
        <v-icon class="custom-icon-arrow-left">mdi-arrow-left</v-icon>
      </v-btn>
      <div v-else class="div-vazia"></div>
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
  props: {
    hasBackButton: {
      type: Boolean,
      default: true
    },
    hasLogoutButton: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    goBack(){
      this.$router.push('/home');
    },
    logout(){
      this.$router.push('/');
    },

  }
}
</script>

<style scoped>
 header {
    background-color: #010B40;
    padding: .5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 999;
  }

  .containter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .custom-icon-calendar-check {
    font-size: 2.5em;
  }
  
  .custom-icon-logout,
  .custom-icon-arrow-left {
    font-size: 1.5em;
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