<template>
  <folder title="benefícios" classWrapper="folder_documents" hasButton="false">
    <ul>
      <li v-for="(item, key) in list" :key="key">
        <div
          class="image"
          :style="{ 'background-image': `url(${item.image})` }"
        ></div>
        <div class="benefit_content">
          <Title>{{ item.title }}</Title>
          {{ item.content }}
        </div>
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
        image:
          'https://br.web.img3.acsta.net/newsv7/19/05/15/17/35/0837341.jpg',
        content:
          'dkuhaskudhksauhdkhsadkuhsadkuhaskduhsakudhaskdhukusahdkasuhdkahudkahudskahudukahdkahusdksauhdkashudkashdkasuhdkashdkua'
      },
      {
        title: 'teste2',
        image:
          'https://1.bp.blogspot.com/-U-4jKAotb3U/XzigweF2LbI/AAAAAAAAQsY/V2LDI5Jz2go0QEERdGwvhgJHAec_f6ysACLcBGAsYHQ/s600/rick+and+morty+the+other+five.png',
        content:
          'dkuhaskudhksauhdkhsadkuhsadkuhaskduhsakudhaskdhukusahdkasuhdkahudkahudskahudukahdkahusdksauhdkashudkashdkasuhdkashdkua'
      },
      {
        title: 'teste2',
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
  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: start;
  align-content: stretch;
  border: 1px solid;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  margin-right: 1rem;

  max-height: 10rem;
  word-wrap: break-word;
}
.image {
  background-size: cover;
  width: 10rem;
  height: 10rem;
  background-repeat: no-repeat;
}

.benefit_content {
  font-size: 0.8rem;
  text-overflow: ellipsis;
  padding: 1rem;
  margin-top: -2rem;
}

a {
  text-decoration: none;
}
</style>
