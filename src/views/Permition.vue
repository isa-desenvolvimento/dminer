<template>
  <folder title="permissões" classWrapper="folder_documents" hasButton="false">
    <ul>
      <li v-for="(item, key) in list" :key="key">
        <h4>{{ item.fullname }}</h4>
        <div class="permition_select">
          <label>permitir:</label>
          <Select />
        </div>
      </li>
    </ul>
  </folder>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Title from '@/components/title/Title.vue'

import useDocument from '@/composables/useDocument'
import Select from '@/components/Select.vue'

export default {
  data() {
    const list = [
      {
        fullname: 'teste',
        content:
          'dkuhaskudhksauhdkhsadkuhsadkuhaskduhsakudhaskdhukusahdkasuhdkahudkahudskahudukahdkahusdksauhdkashudkashdkasuhdkashdkua'
      },
      {
        fullname: 'teste2',
        content:
          'dkuhaskudhksauhdkhsadkuhsadkuhaskduhsakudhaskdhukusahdkasuhdkahudkahudskahudukahdkahusdksauhdkashudkashdkasuhdkashdkua'
      },
      {
        fullname: 'teste2',
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
    Select
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
  display: flex;
  align-items: center;
  border-top: 1px solid;
}

h4 {
  text-transform: uppercase;
}

.permition_select {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0.5rem;

  cursor: pointer;
}

.vue-select-header > .vue-input > input {
  cursor: pointer;
}

label {
  text-transform: uppercase;
  font-size: 0.5rem;
}

a {
  text-decoration: none;
}
</style>
