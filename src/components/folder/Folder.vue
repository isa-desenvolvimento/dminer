<template>
  <div class="container__folder">
    <div class="folder__head">
      <h3>{{ title.toUpperCase() }}</h3>
    </div>
    <div class="folder__content">
      <slot />
    </div>
    <div class="folder__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: { title: { type: String, required: true } }
}
</script>

<style scoped>
.container__folder {
  border: var(--fine-border);
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 0.2fr 2fr 0.3fr;
}

.folder__head {
  background-color: var(--sidebar-green-ligth);
  position: relative;
}

.folder__content {
  overflow-y: auto;
  max-height: 18rem;

  margin-top: 0.5rem;
}

.folder__footer {
  background-color: var(--sidebar-green-ligth);
}

h3 {
  position: absolute;
  right: 0.5rem;
  bottom: -2rem;

  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
}
</style>
