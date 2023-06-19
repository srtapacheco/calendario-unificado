<template>
  <HeaderComponent />
  <div class="container">
    <main>
      <h1>Calendário dos Cursos ministrados por você</h1>
      <div class="filtro">
        <v-icon class="filter-icon icon">mdi-filter-variant</v-icon>
        <div class="toggle-buttons-container green">
          <v-icon class="icon" @click="toggleParent">mdi-calendar-account-outline</v-icon>
          <button class="toggle green selected" value="tete1" @click="toggle">
            Agendadas por você
          </button>
        </div>
        <div class="toggle-buttons-container pink">
          <v-icon class="icon" @click="toggleParent">mdi-calendar-blank-outline</v-icon>
          <button class="toggle pink" value="teste2" @click="toggle">
            Agendadas por outros
          </button>
        </div>
      </div>
      <div class="calendar-header">
        <div class="year">2023</div>
        <div class="month">
          <v-icon class="month-icon">mdi-chevron-left</v-icon>
          <h2>ABRIL</h2>
          <v-icon class="month-icon">mdi-chevron-right</v-icon>
        </div>
      </div>
      <div class="calendar-container">
        <div class="week-days" v-for="weekDay in weekDays" :key="weekDay.order" ><p>{{ weekDay.abrev }}</p></div>
        <div class="calendar-day" :key="day" v-for="day in 35"></div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
  data () {
    return {
      toggleMultiple: [],
      weekDays: [
        {
          name: "Segunda",
          abrev: "SEG", 
          order: 0
        },
        {
          name: "Terça",
          abrev: "TER",
          order: 1
        },
        { 
          name: "Quarta",
          abrev: "QUA",
          order: 2
        },
        { 
          name: "Quinta",
          abrev: "QUI", 
          order: 3
        },
        {
          name: "Sexta",
          abrev: "SEX", 
          order: 4
        },
        { 
          name: "Sábado",
          abrev: "SÁB", 
          order: 5
        },
        { 
          name: "Domingo",
          abrev: "DOM",
          order: 6
        }
      ]
    }
  },
  methods: {
    toggle: function (event) {
      const toggleBtnClass = event.target.classList

      const toggleBtnClassArray = Array.from(toggleBtnClass)

      const selected = toggleBtnClassArray.indexOf("selected") !== -1

      if (!selected) {
        toggleBtnClass.add("selected")
      }
      else {
        toggleBtnClass.remove("selected")
      }
    },
  }
};
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
  padding: 1rem 2rem;
}

main h1 {
  margin-bottom: 2rem;
}

.filtro {
  display: flex;
  align-items: center;
  width: 100%;
  padding: .8rem 0;
  border-top: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
}

.filtro .filter-icon {
  color: var(--text-gray);
  margin-right: .3rem;
}

.toggle-buttons-container {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.toggle-buttons-container.green .icon {
  color: var(--green-text)
}

.toggle-buttons-container.pink .icon {
  color: var(--negative-text)
}

.toggle {
  display: flex;
  align-items: center;
  margin-left: .5rem;
  padding: .5rem .8rem;
  border-radius: 50px;
  cursor: pointer;
  transition: .3s;
  font-weight: bold;
}

.toggle.pink {
  color: var(--negative-text);
  border: 1px solid var(--negative-color-bg);
}

.toggle.pink span {
  color: var(--negative-text);
}

.toggle.green span {
  color: var(--green-text);
}

.toggle span {
  font-weight: bold;
}

.toggle.green {
  color: var(--green-text);
  border: 1px solid var(--transparent-green);
}

.toggle.green.selected {
  background-color: var(--transparent-green);
}

.toggle.pink.selected {
  background-color: var(--negative-color-bg);
}

.calendar-header {
  margin-top: 2rem;
}

.year {
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  color: var(--light-gray-text);
}

.month {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: var(--green-text);
}

.month h2 {
  font-weight: 600;
}

.month .month-icon {
  font-weight: 500;
  font-size: 2.2rem;
}

.calendar-container {
  margin-top: 2rem;
  gap: .25rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.week-days {
  text-align: center;
  margin-bottom: 1rem;
}

.calendar-day {
  width: 100%;
  height: 5rem;
  background-color: var(--transparent-green);
  border-radius: 8px;
}

/* Estilos para telas de celular */
@media (max-width: 767px) {
  .container {
    margin-top: 1rem;
  }

  main {
    padding: 1rem 1rem;
  }

  .toggle {
    font-size: .7rem;
    padding: .5rem;
  }
  
  .icon {
    font-size: 1rem;
  }

  .filtro .filter-icon {
    margin-right: 0;
  }

  .toggle-buttons-container {
    margin-left: .5rem;
  }

  .calendar-day {
    height: 4rem;
    border-radius: 6px;
  }

}
</style>