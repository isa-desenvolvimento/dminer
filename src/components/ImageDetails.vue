<template>
  <div class="image_details_wrapper">
    <div
      class="image_details_image"
      :style="{ 'background-image': `url(${image})` }"
    ></div>
    <div class="image_details_content">
      <h2><slot name="title" /></h2>
      <span><slot name="content" /></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, required: true }
  }
}
</script>

<style scoped>
.image_details_wrapper {
  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: start;
  align-content: stretch;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  margin-right: 1rem;

  max-height: 10rem;
  word-wrap: break-word;
}

.image_details_image {
  width: 100%;
  height: 100%;
  max-width: 10rem;
  max-height: 10rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.image_details_content {
  display: grid;
  text-align: left;
  word-break: break-word;
  font-size: 0.5rem;
  text-overflow: ellipsis;
  padding: 0rem 1rem;
}

h2 {
  font-family: var(--font-family--text);
  color: var(--color-text);
  font-weight: 300;

  text-transform: capitalize;
}

@media only screen and (max-width: 1080px) {
  .icon__feed {
    width: 100%;
    position: initial;
  }
}
</style>
