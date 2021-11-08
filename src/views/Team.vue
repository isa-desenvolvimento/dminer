<template>
  <folder title="equipe" classWrapper="folder_documents" :hasButton="false">
    <ul>
      <li v-for="(item, key) in getAllUsers" :key="key">
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
import ImageDetails from '@/components/ImageDetails.vue'

import useUser from '@/composables/useUser'

export default {
  setup() {
    const { getAllUsers } = useUser()

    return { getAllUsers }
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
