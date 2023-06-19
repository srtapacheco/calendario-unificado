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
        <div class="year">{{currentViewYear}}</div>
        <div class="month">
          <v-icon @click="stepMonth(-1)" class="month-icon">mdi-chevron-left</v-icon>
          <h2>{{ months[currentViewMonth].name }}</h2>
          <v-icon @click="stepMonth(1)" class="month-icon">mdi-chevron-right</v-icon>
        </div>
      </div>

      <div class="calendar-container">
        <div class="week-days" v-for="weekDay in weekDays" :key="weekDay.order" ><p>{{ weekDay.abrev }}</p></div>

        <div class="calendar-day" :class="{inactive: !day.isCurrentMonth}" :key="day" v-for="day in daysInCalendarView"><p class="day-of-month">{{day.day}}</p><div class="exams"></div></div>
        
      </div>

    </main>
  </div>
</template>

<script>
import { subDays, getDate, getDay, getYear, getMonth, getDaysInMonth, addMonths } from 'date-fns'
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
      ],
      months: [
        {
          name: "Janeiro",
          order: 0
        },
        {
          name: "Fevereiro",
          order: 1
        },
        {
          name: "Março",
          order: 2
        },
        {
          name: "Abril",
          order: 3
        },
        {
          name: "Maio",
          order: 4
        },
        {
          name: "Junho",
          order: 5
        },
        {
          name: "Julho",
          order: 6
        },
        {
          name: "Agosto",
          order: 7
        },
        {
          name: "Setembro",
          order: 8
        },
        {
          name: "Outubro",
          order: 9
        },
        {
          name: "Novembro",
          order: 10
        },
        {
          name: "Dezembro",
          order: 11
        }
      ],
      currentViewDate: new Date(),
      currentViewMonth: getMonth(new Date()),
      currentViewYear: getYear(new Date()),
      daysInCalendarView: []
    }
  },
  methods: {
    toggle(event) {
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
    loadCalendarDaysInMonth(currentMonth1stDay) {
      const daysInCurrentMonth = []

      for(let i = 1; i <= getDaysInMonth(currentMonth1stDay); i++) {
        daysInCurrentMonth.push({
          day: i,
          isCurrentMonth: true
        })
      }

      const firstWeekDayInMonth = getDay(subDays(currentMonth1stDay, getDate(currentMonth1stDay) - 1))
      const lastDayOfPreviousMonth = getDate(subDays(currentMonth1stDay, getDate(currentMonth1stDay)))

      if (firstWeekDayInMonth > 0) {
        for(let i = 0; i < firstWeekDayInMonth; i++) {
          daysInCurrentMonth.unshift({
            day: lastDayOfPreviousMonth-i,
            isCurrentMonth: false
          })
        }
      }

      const daysOfNextMonthInCurrentMonthList = 35 - daysInCurrentMonth.length

      for(let i = 1; i <= daysOfNextMonthInCurrentMonthList; i++) {
        daysInCurrentMonth.push({
          day: i,
          isCurrentMonth: false
        })
      }

      this.daysInCalendarView = daysInCurrentMonth
    },
    stepMonth(step) {
      if (step < 0 && this.currentViewMonth === 0) {
        this.currentViewMonth = 11
      }
      else if (step > 0 && this.currentViewMonth === 11) {
        this.currentViewMonth = 0
      }
      else {
        this.currentViewMonth += step
      }

      this.currentViewDate = addMonths(this.currentViewDate, step)
      this.currentViewYear = getYear(this.currentViewDate)

      console.log(this.currentViewDate)
      this.loadCalendarDaysInMonth(this.currentViewDate)
    },
  },
  mounted() {
    this.loadCalendarDaysInMonth(this.currentMonth)
  },
};
</script>

<style scoped>
.container {
  margin: 8rem 0 2rem;
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
  width: 50%;
  text-align: center;
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
  height: 6rem;
  background-color: var(--transparent-green);
  border-radius: 8px;
  padding: .4rem .6rem;
}

.calendar-day.inactive {
  background-color: var(--transparent-gray);
}

/* Estilos para telas de celular */
@media (max-width: 767px) {
  .container {
    margin: 6rem 0 2rem;
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