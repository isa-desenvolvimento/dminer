<template>
  <folder title="tutoriais" classWrapper="folder_documents" :hasButton="false">
    <ul>
      <li v-for="(item, key) in list" :key="key">
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

import useDocument from '@/composables/useDocument'
import ImageDetails from '@/components/ImageDetails.vue'

export default {
  data() {
    const list = [
      {
        title: 'teste',
        category: 'categoria',
        image:
          'https://br.web.img3.acsta.net/newsv7/19/05/15/17/35/0837341.jpg',
        content:
          'dkuhaskudhksauhdkhsadkuhsadkuhaskduhsakudhaskdhukusahdkasuhdkahudkahudskahudukahdkahusdksauhdkashudkashdkasuhdkashdkua'
      },
      {
        title: 'teste2',
        category: 'categoria',
        image:
          'https://1.bp.blogspot.com/-U-4jKAotb3U/XzigweF2LbI/AAAAAAAAQsY/V2LDI5Jz2go0QEERdGwvhgJHAec_f6ysACLcBGAsYHQ/s600/rick+and+morty+the+other+five.png',
        content:
          'dkuhaskudhksauhdkhsadkuhsadkuhaskduhsakudhaskdhukusahdkasuhdkahudkahudskahudukahdkahusdksauhdkashudkashdkasuhdkashdkua'
      },
      {
        title: 'teste2',
        category: 'categoria',
        image:
          'https://1.bp.blogspot.com/-U-4jKAotb3U/XzigweF2LbI/AAAAAAAAQsY/V2LDI5Jz2go0QEERdGwvhgJHAec_f6ysACLcBGAsYHQ/s600/rick+and+morty+the+other+five.png',
        content:
          'dkuhaskudhksauhdkhsadkuhsadkuhaskduhsakudhaskdhukusahdkasuhdkahudkahudskahudukahdkahusdksauhdkashudkashdkasuhdkashdkua'
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
