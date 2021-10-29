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
  right: 0.5rem;
  bottom: -2rem;
  text-transform: uppercase;
}
</style>
