<template>
  <folder title="tutoriais" classWrapper="folder_documents" :hasButton="false">
    <ul>
      <li v-for="(item, key) in getTutorials" :key="key">
        <image-details :image="item.image" :category="item.category">
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:content>{{ item.content }}</template>
        </image-details>
      </li>
    </ul>
  </folder>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Title from '@/components/title/Title.vue'
import ImageDetails from '@/components/ImageDetails.vue'

import useTutorial from '@/composables/useTutorial'

export default {
  setup() {
    const { getTutorials } = useTutorial()

    return { getTutorials }
  },
  components: {
    Folder,
    Title,
    ImageDetails
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  display: grid;
}

li {
  width: 90%;
  border-top: 1px solid;
  margin-right: 1rem;
}

a {
  text-decoration: none;
}
</style>
