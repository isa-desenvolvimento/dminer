<template>
  <div class="view__documents">
    <section class="container__section">
      <InputDate />
    </section>
    <section class="container__section">
      <Folder />
      <Folder />
      <Folder />
    </section>
    <section class="container__section">
      <Folder />
      <Folder />
      <Folder />
    </section>
  </div>
</template>

<script>
import InputDate from '@/components/input/InputDate'
import Folder from '@/components/folder/Folder'

export default {
  data() {},
  components: { InputDate, Folder }
}
</script>

<style scoped>
.view__documents {
  display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  height: 100%;
}

.container__section {
  /* Take full size */
  width: 100%;

  /* Stick to the top */
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
}
</style>
