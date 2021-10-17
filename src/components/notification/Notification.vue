<template>
  <div class="container__notification">
    <div
      class="notification__title"
      :style="{ 'margin-left': position === 'left' ? '0' : 'auto' }"
    >
      <slot name="title" />
      <slot />
    </div>
    <div class="notification__item"></div>
  </div>
</template>

<script>
export default {
  props: {
    position: { type: String, required: false, default: 'left' }
  }
}
</script>

<style scoped>
.container__notification {
  margin-top: 2rem;
}

.notification__title {
  background-color: #aaff48;
  width: 75%;
  border: solid 1px;
  border-radius: 0.3rem;
  text-align: center;
  padding: 0.5rem;
}
</style>
