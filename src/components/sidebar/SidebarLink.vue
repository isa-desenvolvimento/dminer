<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
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
    :style="{ 'border-top': collapsed ? 'none' : '1px solid #60645c' }"
  >
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
    <div class="circle" :style="{ display: collapsed ? 'none' : 'block' }" />
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
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  /* border-radius: 0.25em; */
  height: 1.5em;

  color: white;
  text-decoration: none;

  width: 100%;
  border-top: var(--fine-border);
}

.circle {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  z-index: 8;
  position: absolute;
  border: var(--fine-border);
  transition: 0.3s ease;
  top: -10%;
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
