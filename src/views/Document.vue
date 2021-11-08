<template>
  <folder title="d-guide" classWrapper="folder_documents" :hasButton="false">
    <ul>
      <li v-for="(item, key) in list" :key="key">
        <a :href="item.link" target="_blank">
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
  data() {
    const list = [
      {
        title: 'teste',
        link: 'https://br.web.img3.acsta.net/newsv7/19/05/15/17/35/0837341.jpg'
      },
      {
        title: 'teste2',
        link: 'https://1.bp.blogspot.com/-U-4jKAotb3U/XzigweF2LbI/AAAAAAAAQsY/V2LDI5Jz2go0QEERdGwvhgJHAec_f6ysACLcBGAsYHQ/s600/rick+and+morty+the+other+five.png'
      },
      {
        title: 'teste2',
        link: 'https://1.bp.blogspot.com/-U-4jKAotb3U/XzigweF2LbI/AAAAAAAAQsY/V2LDI5Jz2go0QEERdGwvhgJHAec_f6ysACLcBGAsYHQ/s600/rick+and+morty+the+other+five.png'
      }
    ]
    return { list }
  },
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
