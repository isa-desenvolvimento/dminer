<template>
  <folder
    class="mt-3 cursor-move"
    title="enquete"
    classContent="folder__notification__content"
  >
    <notification v-for="item in notificationList" :key="item">
      <template v-slot:title>
        <Title>
          {{ item.notificationDescrible }}
        </Title>
      </template>
    </notification>
  </folder>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Notification from '@/components/notification/Notification.vue'
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
    Folder,
    Notification,
    Title
  }
}
</script>

<style scoped>
.folder__notification__content {
  width: 108%;
  margin-left: -12px;
}
</style>
