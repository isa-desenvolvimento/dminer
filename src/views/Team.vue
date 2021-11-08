<template>
  <folder title="equipe" classWrapper="folder_documents" :hasButton="false">
    <ul>
      <li v-for="(item, key) in list" :key="key">
        <image-details :image="item.avatar">
          <template v-slot:title>{{ item.name }} • {{ item.area }}</template>
          <template v-slot:content>
            {{ item.email }}
            <br />
            {{ item.dtBirthday }}
            <a :href="item.linkedin" target="_blank">linkedin</a>
          </template>
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
        name: 'teste',
        area: 'area',
        email: 'email@email',
        dtBirthday: '00/00',
        linkedin:
          'https://br.web.img3.acsta.net/newsv7/19/05/15/17/35/0837341.jpg',
        avatar:
          'https://br.web.img3.acsta.net/newsv7/19/05/15/17/35/0837341.jpg'
      },
      {
        name: 'teste2',
        area: 'area',
        email: 'email@email',
        dtBirthday: '00/00',
        linkedin:
          'https://1.bp.blogspot.com/-U-4jKAotb3U/XzigweF2LbI/AAAAAAAAQsY/V2LDI5Jz2go0QEERdGwvhgJHAec_f6ysACLcBGAsYHQ/s600/rick+and+morty+the+other+five.png',
        avatar:
          'https://1.bp.blogspot.com/-U-4jKAotb3U/XzigweF2LbI/AAAAAAAAQsY/V2LDI5Jz2go0QEERdGwvhgJHAec_f6ysACLcBGAsYHQ/s600/rick+and+morty+the+other+five.png'
      },
      {
        name: 'teste2',
        area: 'area',
        email: 'email@email',
        dtBirthday: '00/00',
        linkedin:
          'https://1.bp.blogspot.com/-U-4jKAotb3U/XzigweF2LbI/AAAAAAAAQsY/V2LDI5Jz2go0QEERdGwvhgJHAec_f6ysACLcBGAsYHQ/s600/rick+and+morty+the+other+five.png',
        avatar:
          'https://1.bp.blogspot.com/-U-4jKAotb3U/XzigweF2LbI/AAAAAAAAQsY/V2LDI5Jz2go0QEERdGwvhgJHAec_f6ysACLcBGAsYHQ/s600/rick+and+morty+the+other+five.png'
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
  grid-template-columns: 50% 50%;
}

li {
  width: 100%;
}

a {
  text-decoration: none;
}
</style>
