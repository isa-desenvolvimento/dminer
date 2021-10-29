<template>
  <div class="view__documents">
    <section class="container__section">
      <inputDate />
    </section>
    <section class="container__section">
      <folder title="Notificações" classContent="folder__notification__content">
        <notification v-for="item in notificationList" :key="item">
          <template v-slot:title>
            <Title>
              {{ item.notificationDescrible }}
            </Title>
          </template>
        </notification>
      </folder>
      <folder
        title="Calendário"
        id="show-modal"
        :onClick="() => clickCalendar()"
      >
        <calendar />
      </folder>
      <folder title="Aniversário">
        <notification v-for="item in notificationList" :key="item">
          <template v-slot:title>
            <Title>
              {{ item.notificationDescrible }}
            </Title>
          </template>
        </notification>
      </folder>
    </section>
    <section class="container__section">
      <folder title="Enquete" />
      <folder title="Avisos" />
      <folder title="Lembretes" />
    </section>
  </div>

  <!-- use the modal component, pass in the prop -->
  <transition name="modal">
    <modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <!-- <template v-slot:header>
        <h3>custom header</h3>
      </template> -->
      <template v-slot:body>
        <FullCalendar />
      </template>
    </modal>
  </transition>
</template>

<script>
import InputDate from '@/components/input/InputDate'
import Folder from '@/components/folder/Folder'
import Notification from '@/components/notification/Notification'
import Calendar from '@/components/calendar/Calendar'
import Title from '@/components/title/Title'

import Modal from '@/components/modal/Modal'

import FullCalendar from '../components/calendar/FullCalendar.vue'

import { fetchAllNotification } from '@/api/notification'

export default {
  data() {
    return {
      notificationList: [],
      showModal: false,
      showDate: new Date()
    }
  },
  mounted() {
    fetchAllNotification().then(
      (notifications) => (this.notificationList = notifications)
    )
  },
  components: {
    InputDate,
    Folder,
    Notification,
    Calendar,
    Title,
    Modal,
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

<style>
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

.folder__notification__content {
  width: 108%;
  margin-left: -12px;
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
