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
    <div class="container__right">
      <folder title="Feed">
        <publication title="Teste"></publication>
        <publication title="Teste"></publication>
        <template v-slot:footer><button>Carregar mais</button></template>
      </folder>
    </div>
  </div>
</template>

<script>
import { sidebarWidth } from '@/components/sidebar/state'
import Publication from '@/components/publication/Publication'
import Folder from '@/components/folder/Folder.vue'

export default {
  components: { Publication, Folder },
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
  transition: all 0.3s ease 0s;
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
