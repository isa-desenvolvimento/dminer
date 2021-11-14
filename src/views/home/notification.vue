<template>
  <WidgetNotification
    class="mt-3 cursor-move"
    title="notificações"
    classContent="folder__notification__content"
  >
    <ul>
      <li v-for="item in notificationList" :key="item">
        <Title>
          {{ item.notificationDescrible }}
        </Title>
      </li>
    </ul>
  </WidgetNotification>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Title from '@/components/title/Title.vue'

import { fetchAllNotification } from '@/api/notification.js'
import WidgetNotification from '@/components/widget/WidgetNotification.vue'

export default {
  data() {
    return {
      notificationList: []
    }
  },
  mounted() {
    fetchAllNotification().then(
      (notifications) => (this.notificationList = notifications)
    )
  },
  components: {
    Folder,
    Title,
    WidgetNotification
  }
}
</script>

<style scoped>
.folder__notification__content {
  width: 108%;
  margin-left: -12px;
}

ul {
  list-style-type: none;
  display: grid;
  grid-gap: 3rem;
  margin-top: -0.5rem;
}

li {
  text-align: unset;
}

li:nth-child(even) {
  text-align: left;
}
</style>
