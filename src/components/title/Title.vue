<template>
  <div class="container__title">
    <h2><slot /></h2>
  </div>
</template>

<style scoped>
h2 {
  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
  text-transform: uppercase;
  padding: 1rem;
}
</style>
