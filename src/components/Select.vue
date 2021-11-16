<template>
  <vue-select v-model="value" :options="options" close-on-select></vue-select>
</template>
<script>
import { reactive, ref } from 'vue'
import VueSelect from 'vue-next-select'

import 'vue-next-select/dist/index.min.css'

export default {
  props: { optionsProps: { type: Array, required: true, default: [] } },
  setup(props) {
    const value = ref(0)
    const options = reactive(props.optionsProps)
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
  outline: 0;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: none;
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
