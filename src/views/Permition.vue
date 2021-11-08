<template>
  <folder title="permissões" classWrapper="folder_documents" :hasButton="false">
    <ul>
      <li v-for="(item, key) in getAllUsers" :key="key">
        <h4>{{ item.name }}</h4>
        <div class="permition_select">
          <label>permitir:</label>
          <Select :options="getPermition" />
        </div>
      </li>
    </ul>
  </folder>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Title from '@/components/title/Title.vue'
import Select from '@/components/Select.vue'

import usePermition from '@/composables/usePermition'
import useUser from '@/composables/useUser'

export default {
  setup() {
    const { getPermition } = usePermition()
    const { getAllUsers } = useUser()

    return { getPermition, getAllUsers }
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
