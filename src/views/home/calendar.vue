<template>
  <folder
    class="mt-3 cursor-move"
    title="calendário"
    id="show-modal"
    :onClick="() => clickCalendar()"
  >
    <div class="container__calendar">
      <calendar />
    </div>
  </folder>
  <transition name="modal">
    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:body>
        <EventCalendar />
      </template>
    </modal>
  </transition>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Calendar from '@/components/calendar/Calendar.vue'
import EventCalendar from '@/components/calendar/EventCalendar.vue'
import Modal from '@/components/modal/Modal.vue'

export default {
  data() {
    return {
      showModal: false,
      showDate: new Date()
    }
  },
  components: {
    Folder,
    Calendar,
    EventCalendar,
    Modal,
    EventCalendar
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
.container__calendar {
  padding: 0 1.5rem;
}
</style>
