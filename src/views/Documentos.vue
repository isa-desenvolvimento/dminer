<template>
  <div class="view__documents">
    <section class="container__section">
      <inputDate />
    </section>
    <section class="container__section">
      <folder title="Notificações">
        <notification
          :position="getPositionNotification()"
          v-for="item in notificationList"
          :key="item"
        >
          <template v-slot:title>
            <Title>
              {{ item }}
            </Title>
          </template>
        </notification>
      </folder>
      <folder title="Calendário">
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
</template>

<script>
import InputDate from '@/components/input/InputDate'
import Folder from '@/components/folder/Folder'
import Notification from '@/components/notification/Notification'
import Calendar from '@/components/calendar/Calendar'
import Title from '@/components/title/Title'

export default {
  data() {
    return {
      notificationList: ['Teste 1', 'Teste 2', 'Teste 3'],
      positionNotification: 'right'
    }
  },
  components: { InputDate, Folder, Notification, Calendar, Title },
  methods: {
    getPositionNotification() {
      this.positionNotification =
        this.positionNotification === 'right' ? 'left' : 'right'
      return this.positionNotification
    }
  }
}
</script>

<style scoped>
.view__documents {
  display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  height: 100%;
  padding: 0 3rem;
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

  padding: 0.5rem;
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
