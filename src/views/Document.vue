<template>
  <folder title="d-guide" classWrapper="folder_documents" :hasButton="false">
    <ul>
      <li v-for="(item, key) in getDocuments" :key="key">
        <a :href="item.content" target="_blank">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </folder>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Title from '@/components/title/Title.vue'

import useDocument from '@/composables/useDocument'

export default {
  setup() {
    const { getDocuments } = useDocument()

    return { getDocuments }
  },
  components: {
    Folder,
    Title
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  position: relative;
}
li {
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid;
  margin-right: 2rem;
}

a {
  text-decoration: none;
}
</style>
