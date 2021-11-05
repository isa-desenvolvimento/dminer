<template>
  <folder
    class="mt-3 cursor-move"
    title="lembrete"
    classContent="folder__reminder__content"
  >
    <ul>
      <li
        class="reminder_li"
        v-for="(item, key) in getReminders"
        :key="key"
        :id="`reminder_li_${key}`"
      >
        <Title>
          {{ item.reminderDescrible }}
        </Title>
        <div class="notices_footer">
          <span>
            <b>Data:</b>
            {{ dateHourFormart(item.dataHora) }}
          </span>
        </div>
      </li>
    </ul>
  </folder>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Notification from '@/components/notification/Notification.vue'
import Title from '@/components/title/Title.vue'

import useReminder from '@/composables/useReminder.js'
import { dateHourFormart } from '@/util/date.js'

export default {
  setup() {
    const { getReminders } = useReminder()

    return { getReminders, dateHourFormart }
  },
  components: {
    Folder,
    Notification,
    Title
  }
}
</script>

<style scoped>
.folder__reminder__content {
  width: 108%;
  margin-left: -12px;
}
ul {
  list-style-type: none;
}
li {
  height: 38vh;
}

.reminder_footer {
  display: inline-grid;
  text-transform: uppercase;
}
</style>
