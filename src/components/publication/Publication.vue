<template>
  <div class="container__publication">
    <div class="publication__title">
      <h3>{{ title }}</h3>
    </div>
    <div class="publication__item">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true }
  }
}
</script>

<style>
.container__publication {
  border: solid 1px;
  margin: 1rem 2rem;
}

.publication__title {
  font-family: var(--font-family-title);
}

.container__publication:nth-of-type(odd) {
  background-image: var(--gradient-linear-white-green);
  /* background-image: linear-gradient(to right, red , yellow); */
}
</style>
