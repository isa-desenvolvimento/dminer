<template>
  <folder
    class="mt-3 cursor-move"
    title="aniversário"
    classContent="folder__user__content"
  >
    <ul>
      <li
        class="user_li"
        v-for="(item, key) in getUsersBirthday"
        :key="key"
        :id="`user_li_${key}`"
      >
        <Avatar :user="user" />
        <Title>
          {{ item.name }}
        </Title>
        <div class="notices_footer">
          <span>
            <b>Data:</b>
            {{ dateHourFormart(item.dtBirthday) }}
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

import useUser from '@/composables/useUser.js'
import { dateHourFormart } from '@/util/date.js'
import Avatar from '@/components/avatar/Avatar.vue'

export default {
  setup() {
    const { getUsersBirthday } = useUser(1)

    return { getUsersBirthday, dateHourFormart }
  },
  components: {
    Folder,
    Notification,
    Title,
    Avatar
  }
}
</script>

<style scoped>
.folder__user__content {
  width: 108%;
  margin-left: -12px;
}
ul {
  list-style-type: none;
}
li {
  height: 38vh;
}

.user_footer {
  display: inline-grid;
  text-transform: uppercase;
}
</style>
