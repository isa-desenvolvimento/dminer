<template>
  <div class="container__folder">
    <div class="folder__head">
      <h3>{{ title.toUpperCase() }}</h3>
    </div>
    <div class="folder__content">
      <slot />
    </div>
    <div class="folder__footer"></div>
  </div>
</template>

<script>
export default {
  props: { title: { type: String, required: true } }
}
</script>

<style scoped>
.container__folder {
  background-color: white;
  width: 30%;
  height: 100%;

  display: grid;
  grid-template-rows: 0.2fr 2fr 0.3fr;
}

.folder__head {
  background-color: var(--sidebar-green-ligth);
  position: relative;
}

.folder__footer {
  background-color: var(--sidebar-green-ligth);
}

h3 {
  font-family: 'Cera_Stencil_PRO_Medium';
  color: black;
  font-weight: 300;
  position: absolute;
  right: 0.5rem;
  bottom: -2rem;
}
</style>
