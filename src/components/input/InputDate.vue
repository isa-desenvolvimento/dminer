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
  padding: 1.5rem;
  display: flex;
  width: 100%;
  height: 90%;
  background-repeat: no-repeat;
  background-size: contain;
  gap: 15rem;

  background-image: url('~@/assets/widget/fild.svg');
}
input {
  width: 55%;
  border: none;
  height: 30%;
  background: transparent;
  margin: auto;
  margin-left: 2.5rem;

  font-family: var(--font-family--text);
  color: var(--color-title);
  font-weight: 300;
  font-size: 1rem;
}

.container__date {
  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
  font-size: 1.5rem;
  margin: auto;
  padding-top: 1rem;
}
</style>
