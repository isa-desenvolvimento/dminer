<template>
  <div class="view__documents">
    <section class="container__section">
      <inputDate />
    </section>
    <section class="container__section">
      <folder title="Notificações">
        <notification v-for="item in notificationList" :key="item">
          <template v-slot:title>
            <Title>
              {{ item }}
            </Title>
          </template>
        </notification>
      </folder>
      <folder title="Calendário" id="show-modal" :onClick="clickCalendar">
        <calendar />
      </folder>
      <folder title="Aniversário">
        <notification v-for="item in notificationList" :key="item">
          <template v-slot:title>
            <Title>
              {{ item }}
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
      <template v-slot:header>
        <h3>custom header</h3>
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

export default {
  data() {
    return {
      notificationList: ['Teste 1', 'Teste 2', 'Teste 3'],
      showModal: false
    }
  },
  components: { InputDate, Folder, Notification, Calendar, Title, Modal },
  methods: {
    clickCalendar() {
      this.showModal = true
    }
  }
}
</script>

<style scoped>
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
