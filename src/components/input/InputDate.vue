<template>
  <div class="container__provisorio">
    <input v-model="value" />
    <div class="container__date">
      <span>{{ date }}</span>
    </div>
  </div>
</template>

<script>
import { dateNowFormart } from '@/util/date'

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      date: dateNowFormart()
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style scoped>
.container__provisorio {
  padding: 0.5rem;

  display: flex;
}
input {
  width: 100%;
  border: none;
  height: 100%;
}

.container__date {
  flex: 20%;
}
</style>
