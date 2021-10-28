<template>
  <icon-base icon-name="icon" viewBox="0 0 500 350" width="100%" height="100%">
    <icon-modal>
      <div class="view__calendar">
        <FullCalendar />
      </div>
    </icon-modal>
  </icon-base>
</template>

<script>
import FullCalendar from '../components/calendar/FullCalendar.vue'
import IconModal from '@/components/icons/IconModal'
import IconBase from '@/components/icons/IconBase'

export default {
  data() {
    return {
      notificationList: ['Teste 1', 'Teste 2', 'Teste 3'],
      showModal: false,
      showDate: new Date()
    }
  },
  components: {
    FullCalendar,
    IconBase,
    IconModal
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
.view__calendar {
  width: 69%;
  height: 50%;
  font-size: 0.5rem;
  margin-left: auto;
  margin-right: 1.5rem;
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
