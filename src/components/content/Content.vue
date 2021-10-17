<template>
  <div
    class="container"
    :style="{
      'margin-left': sidebarWidth
    }"
  >
    <!-- Left content -->
    <div class="container__left"><router-view /></div>

    <!-- Right content -->
    <div class="container__right">...</div>
  </div>
</template>

<script>
import { sidebarWidth } from '@/components/sidebar/state'

export default {
  setup() {
    return { sidebarWidth }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 5rem;
  height: calc(100vh - 5rem);
}

.container__left {
  flex: 1;
  background-color: red;
}

.container__right {
  width: 25%;
  background-color: aqua;
}
</style>
