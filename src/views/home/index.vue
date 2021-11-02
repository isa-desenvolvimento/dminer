<template>
  <div class="view__documents">
    <section class="header__section">
      <inputDate />
    </section>
    <section class="container__section drag__inner__list">
      <component
        v-for="(folder, key) in listComponents"
        :key="key"
        :is="folder"
      ></component>
    </section>
  </div>
</template>

<script>
import InputDate from '@/components/input/InputDate.vue'

import birthday from '@/views/home/birthday.vue'
import calendar from '@/views/home/calendar.vue'
import notification from '@/views/home/notification.vue'
import notices from '@/views/home/notices.vue'
import remember from '@/views/home/remember.vue'
import quiz from '@/views/home/quiz.vue'

export default {
  data() {
    return {
      listComponents: [
        notification,
        calendar,
        birthday,
        notices,
        remember,
        quiz
      ]
    }
  },

  components: {
    InputDate
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

.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
.container__section {
  width: 100%;
  top: 0;
  display: grid;
  align-items: center;
  gap: 0.5rem;
  grid-template-columns: 34% 34% 34%;
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

.list-group-item {
  cursor: not-allowed;
}
</style>
