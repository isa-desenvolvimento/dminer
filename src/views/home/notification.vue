<template>
  <widget-layout-home
    layout="icon-folder-notification"
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
  </widget-layout-home>
</template>

<script>
import WidgetLayoutHome from '@/components/widget/WidgetLayoutHome.vue'
import Title from '@/components/title/Title.vue'

import { fetchAllNotification } from '@/api/notification.js'

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
    Title,
    WidgetLayoutHome
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
