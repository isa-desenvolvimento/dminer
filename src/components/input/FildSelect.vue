<template>
  <div class="container_input" @click="focus($event)">
    <div>
      <label v-if="text">
        {{ text }}
        <span v-if="required">*</span>
        :
      </label>

      <vue-select
        :id="`container_input_${text}`"
        :options="options"
        close-on-select
        placeholder=""
        @update:modelValue="changeInput"
        :reduce="(item) => item.id"
        label-by="title"
      ></vue-select>

      <div>
        <icon-base
          viewBox="0 0 500 58"
          width="100%"
          height="100%"
          class="fild_container_icon"
          :class="`container_input_${text}`"
        >
          <icon-line></icon-line>
        </icon-base>
      </div>
      <div v-if="isError" class="fild_container_error">campo obrigatório</div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconLine from '@/components/icons/IconLine.vue'

import VueSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'

export default {
  setup(props) {
    const value = ref(0)
    const options = reactive(props.options)

    return {
      value,
      options
    }
  },
  mounted() {
    if (this.isError) {
      const circle = document.querySelector(
        `.container_input_${this.text} .icon__line > .st1`
      )
      circle.style.fill = 'red'
    }
  },
  components: { IconLine, IconBase, VueSelect },
  props: {
    text: { type: String, required: false },
    value: { type: String, required: false },
    required: { type: Boolean, required: false, default: false },
    isError: { type: Boolean, required: false, default: false },
    options: { type: Array, required: true, default: [] }
  },

  methods: {
    focus(e) {
      // const input = document.getElementById(`container_input_${this.text}`)
      // input.focus()
    },
    changeInput(e) {
      console.log(e)
      this.$emit('update:modelValue', e.id)
    }
  }
}
</script>

<style scoped>
.container_input {
  position: relative;
  cursor: text;
}

label {
  text-transform: capitalize;
  font-size: 0.5rem;
  font-family: var(--font-family--text);

  position: absolute;
  left: 0;

  grid-area: label;
  color: var(--color-text);
}

.fild_container_error {
  font-size: 0.5rem;
  color: red;
  text-align: start;
  margin-top: -0.7rem;
}

.vue-select {
  outline: 0;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: none;
  border-radius: 0.2rem;
  padding: 0.3rem;
  padding-bottom: 0;
  font-size: var(--font-family--text);
  margin: 0;
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
