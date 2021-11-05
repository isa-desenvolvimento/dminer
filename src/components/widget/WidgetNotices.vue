<template>
  <icon-base
    class="container__notices"
    icon-name="icon"
    :onClick="onClick"
    viewBox="0 0 500 500"
  >
    <icon-notices>
      <div class="wrapper__notices">
        <div class="notices__head">
          <h2>{{ title }}</h2>
        </div>
        <div
          :class="classContent"
          class="notices__content"
          :style="{ 'max-heitemplateht': !isExpanded && '18rem' }"
          :id="id"
        >
          <slot />
        </div>
        <div class="notices__footer">
          <icon-base
            viewBox="0 0 1024 1024"
            icon-name="icon"
            class="edit-icon"
            :onClick="onClick"
            width="70"
            height="70"
            :styles="onClick && 'cursor: pointer;'"
          >
            <icon-button />
          </icon-base>
        </div>
      </div>
    </icon-notices>
  </icon-base>
</template>

<script>
import IconButton from '@/components/icons/IconButton.vue'
import IconNotices from '@/components/icons/IconNotices.vue'
import IconBase from '@/components/icons/IconBase.vue'

export default {
  props: {
    title: { type: String, required: true },
    isExpanded: { type: Boolean, required: false, default: false },
    onClick: { type: Function, required: false },
    classContent: { type: String, required: false },
    id: { type: String, required: false }
  },
  components: {
    IconBase,
    IconButton,
    IconNotices
  }
}
</script>

<style scoped>
.container__notices {
  width: 100%;
  height: 100%;
}

.wrapper__notices {
  display: grid;
  grid-auto-rows: 1fr 4.1fr 1fr;
  padding: 0 1rem;
}

.notices__head {
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
}

.notices__content {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 300px;
}

.notices__footer {
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
