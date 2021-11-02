<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

import IconBase from '@/components/icons/IconBase.vue'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: Element, required: true },
    isIconLink: { type: Boolean, required: false },
    isPower: { type: Boolean, required: false }
  },
  components: { IconBase },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }
}
</script>

<template>
  <router-link
    :to="to"
    class="link"
    :class="{ active: isActive }"
    :style="{
      'border-top': collapsed || isIconLink ? 'none' : '1px solid #60645c',
      'justify-content': isIconLink || isPower ? 'center' : ''
    }"
  >
    <icon-base icon-name="icon">
      <slot />
    </icon-base>
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
    <div
      class="circle"
      :style="{ display: collapsed || isIconLink ? 'none' : 'block' }"
    />
  </router-link>
</template>

<style>
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

  font-family: 'Swis721_LtEx_BT_Light', Helvetica, Arial;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.8em 0;
  /* border-radius: 0.25em; */

  color: black;
  text-decoration: none;

  width: 100%;
  gap: 0.2rem;
}

.circle {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  z-index: 8;
  position: absolute;
  border: var(--fine-border);
  transition: 0.3s ease;
  top: -8%;
  left: -5%;
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
