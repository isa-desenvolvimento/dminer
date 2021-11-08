<template>
  <vue-select v-model="value" :options="options" close-on-select></vue-select>
</template>
<script>
import { reactive, ref } from 'vue'
import VueSelect from 'vue-next-select'

import 'vue-next-select/dist/index.min.css'

export default {
  setup() {
    const value = ref(0)
    const options = reactive([0, 1, 2])
    return {
      value,
      options
    }
  },
  component: { VueSelect }
}
</script>

<style>
.vue-select {
  /* position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box; */
  outline: 0;
  width: 100%;
  background: var(--sidebar-green-ligth);
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0.2rem;
  padding: 0.3rem;
  font-size: var(--font-family--text);
  margin: 0.1rem;

  cursor: pointer;
}

.vue-dropdown-item.selected {
  background-color: var(--sidebar-green-ligth);
}

.vue-dropdown-item.highlighted {
  background-color: var(--sidebar-green-ligth);
}

.vue-dropdown-item.selected.highlighted {
  background-color: var(--sidebar-green-ligth);
}
</style>
