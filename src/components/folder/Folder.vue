<template>
  <div
    class="container__folder"
    :style="{ 'background-image': `url(${folderSVG})` }"
  >
    <div class="folder__head">
      <h2>{{ title.toUpperCase() }}</h2>
    </div>
    <div
      class="folder__content"
      :style="{ 'max-height': !is - expanded && '18rem' }"
    >
      <slot />
    </div>
    <div class="folder__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import folderSVG from '@/assets/widget/folder.svg'
import notificationSVG from '@/assets/widget/notification.svg'

export default {
  props: {
    title: { type: String, required: true },
    'is-expanded': { type: Boolean, required: false, default: false }
  },
  data() {
    return { folderSVG, notificationSVG }
  }
}
</script>

<style scoped>
.container__folder {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 0.2fr 0.7fr;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 1rem;
}

.folder__head {
  position: relative;
}

.folder__content {
  overflow-y: auto;
}

.folder__footer {
}

h2 {
  position: absolute;
  right: 1.5rem;
  bottom: -0.7rem;

  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
}
</style>
