<template>
  <icon-base
    class="container__folder"
    icon-name="icon"
    :onClick="onClick"
    viewBox="0 0 500 500"
  >
    <icon-folder>
      <div class="wrapper__folder">
        <div class="folder__head">
          <h2>{{ title }}</h2>
        </div>
        <div
          class="folder__content"
          :style="{ 'max-heitemplateht': !isExpanded && '18rem' }"
        >
          <slot />
        </div>
        <div class="folder__footer">
          <icon-base
            viewBox="0 0 1024 1024"
            icon-name="icon"
            class="edit-icon"
            :onClick="onClick"
            width="70"
            height="70"
          >
            <icon-button />
          </icon-base>
        </div>
      </div>
    </icon-folder>
  </icon-base>
</template>

<script>
import IconButton from '@/components/icons/IconButton'
import IconFolder from '@/components/icons/IconFolder'
import IconBase from '@/components/icons/IconBase'

export default {
  props: {
    title: { type: String, required: true },
    isExpanded: { type: Boolean, required: false, default: false },
    onClick: { type: Function, required: false }
  },
  components: {
    IconBase,
    IconButton,
    IconFolder
  }
}
</script>

<style scoped>
.container__folder {
  width: 100%;
  height: 100%;
}

.wrapper__folder {
  display: grid;
  grid-auto-rows: 1fr 4.1fr 1fr;
  padding: 0 1rem;
}

.folder__head {
  display: flex;
  justify-content: flex-end;
}

.folder__content {
  overflow-y: auto;
}

.folder__footer {
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-top: 5px;
}

h2 {
  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
}
</style>
