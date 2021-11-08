<template>
  <folder title="benefícios" classWrapper="folder_documents" :hasButton="false">
    <ul>
      <li v-for="(item, key) in getBenefits" :key="key">
        <image-details :image="item.image">
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

import useBenefit from '@/composables/useBenefit'
import ImageDetails from '@/components/ImageDetails.vue'

export default {
  setup() {
    const { getBenefits } = useBenefit()

    return { getBenefits }
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
  width: 75%;
  justify-self: left;
}

li:nth-child(even) {
  justify-self: right;
}

a {
  text-decoration: none;
}
</style>
