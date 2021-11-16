<template>
  <widget-layout-home
    layout="icon-folder-reminder"
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
          {{ item.reminder }}
        </Title>
      </li>
    </ul>
  </widget-layout-home>
</template>

<script>
import WidgetLayoutHome from '@/components/widget/WidgetLayoutHome.vue'
import Title from '@/components/title/Title.vue'

import useReminder from '@/composables/useReminder.js'
import { dateHourFormart } from '@/util/date.js'

export default {
  setup() {
    const { getReminders } = useReminder()

    return { getReminders, dateHourFormart }
  },
  components: {
    WidgetLayoutHome,
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
  height: 13vh;
  margin-bottom: 1.6rem;
  width: 90%;
}

.reminder_footer {
  display: inline-grid;
  text-transform: uppercase;
}
</style>
