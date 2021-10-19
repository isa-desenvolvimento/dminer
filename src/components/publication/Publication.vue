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
  background-repeat: no-repeat;
  background-size: cover;
  height: 20%;
  margin-left: auto;
  margin-right: 1.2rem;
  width: 80%;
  overflow: hidden;

  background-image: url('~@/assets/widget/publication.svg');
}

.publication__title {
  font-family: var(--font-family-title);
}

.container__publication:nth-of-type(odd) {
  background-image: url('~@/assets/widget/publication-p.svg');
}
</style>
