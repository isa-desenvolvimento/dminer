<template>
  <div class="teste">
    <FullCalendar />
  </div>
</template>

<script>
import FullCalendar from '../components/calendar/FullCalendar.vue'

export default {
  data() {
    return {
      notificationList: ['Teste 1', 'Teste 2', 'Teste 3'],
      showModal: false,
      showDate: new Date()
    }
  },
  components: {
    FullCalendar
  },
  methods: {
    clickCalendar() {
      this.showModal = true
    },
    setShowDate(d) {
      this.showDate = d
    }
  }
}
</script>

<style scoped>
.teste {
  width: 100%;
}
.view__documents {
  /* display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  height: 100%;
  padding: 0 6rem; */

  display: grid;
  padding: 0 6rem;
}

.container__section {
  /* Take full size */
  width: 100%;

  /* Stick to the top */
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

@media only screen and (max-width: 1080px) {
  .view__documents {
    grid-gap: 1rem;
  }
  .container__section {
    display: contents;
    padding: 0.5rem;
    overflow-y: auto;
  }
}
</style>
