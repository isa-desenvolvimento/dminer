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
          <h1>{{ title }}</h1>
        </div>
        <div
          :class="classContent"
          class="folder__content"
          :style="{ 'max-heitemplateht': !isExpanded && '18rem' }"
          :id="id"
        >
          <slot />
        </div>
        <div class="folder__footer" v-if="hasButton">
          <icon-base
            viewBox="0 0 1024 1024"
            icon-name="icon"
            class="folder_button"
            :onClick="onClick"
            width="70"
            height="70"
            :styles="onClick && 'cursor: pointer;'"
          >
            <icon-button />
          </icon-base>
        </div>
      </div>
    </icon-folder>
  </icon-base>
</template>

<script>
import IconButton from '@/components/icons/IconButton.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import IconBase from '@/components/icons/IconBase.vue'

export default {
  props: {
    title: { type: String, required: true },
    isExpanded: { type: Boolean, required: false, default: false },
    onClick: { type: Function, required: false },
    classContent: { type: String, required: false },
    id: { type: String, required: false },
    hasButton: { type: Boolean, required: false, default: true }
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

  margin-top: -0.5rem;
}

.folder__head {
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
}

.folder__content {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 300px;
}

.folder__footer {
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-top: 5px;
}

h1 {
  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
}

.folder_button:hover {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(69, 152, 27, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(69, 152, 27, 0);
  }
}
</style>
