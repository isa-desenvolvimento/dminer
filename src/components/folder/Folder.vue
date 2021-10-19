<template>
  <div class="container__folder">
    <div class="folder__head">
      <h2>{{ title }}</h2>
    </div>
    <div
      class="folder__content"
      :style="{ 'max-height': !isExpanded && '18rem' }"
    >
      <slot />
    </div>
    <div class="folder__footer">
      <icon-base
        viewBox="0 0 1024 1024"
        icon-name="icon"
        class="edit-icon"
        :onClick="() => onClick()"
      >
        <icon-button />
      </icon-base>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/icons/IconButton'
import IconBase from '@/components/icons/IconBase'

export default {
  props: {
    title: { type: String, required: true },
    isExpanded: { type: Boolean, required: false, default: false }
  },
  components: {
    IconBase,
    IconButton
  },
  methods: {
    onClick() {
      console.log('teste')
    }
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

  background-image: url('~@/assets/widget/folder.svg');
}

.folder__head {
  position: relative;
}

.folder__content {
  overflow-y: auto;
}

.folder__footer {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}

h2 {
  position: absolute;
  right: 1.5rem;
  bottom: -0.7rem;

  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
}

.icon {
  width: 40px;
  height: 40px;
}
</style>
