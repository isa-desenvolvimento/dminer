<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

import IconBase from '@/components/icons/IconBase.vue'
import IconTutoriais from '@/components/icons/IconTutoriais.vue'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  components: { IconBase, IconTutoriais },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }
}
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <icon-base icon-name="tutoriais"><icon-tutoriais /></icon-base>
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: black;
  text-decoration: none;
  grid-gap: 1rem;
}

.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link.active {
  background-color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
