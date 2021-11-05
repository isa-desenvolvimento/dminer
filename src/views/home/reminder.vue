<template>
  <WidgetReminder
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
      </li>
    </ul>
  </WidgetReminder>
</template>

<script>
import WidgetReminder from '@/components/widget/WidgetReminder.vue'
import Title from '@/components/title/Title.vue'

import useReminder from '@/composables/useReminder.js'
import { dateHourFormart } from '@/util/date.js'

export default {
  setup() {
    const { getReminders } = useReminder()

    return { getReminders, dateHourFormart }
  },
  components: {
    WidgetReminder,
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
  border: 3px solid #60645c;
  border-radius: 0.5rem;
  height: 15vh;
  margin-bottom: 1.5rem;
  width: 90%;
}

.reminder_footer {
  display: inline-grid;
  text-transform: uppercase;
}
</style>
