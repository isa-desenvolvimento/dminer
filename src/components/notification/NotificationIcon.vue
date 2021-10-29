<template>
  <icon-base
    class="icon__notification"
    icon-name="icon"
    viewBox="0 0 250 50"
    width="112%"
    height="33%"
  >
    <icon-notification>
      <div class="notification__head">
        <slot name="title" />
      </div>
      <div class="notification__content">
        <slot />
      </div>
    </icon-notification>
  </icon-base>
</template>

<script>
import IconBase from '@/components/icons/IconBase'
import IconNotification from '@/components/icons/IconNotification'

export default {
  components: { IconNotification, IconBase }
}
</script>

<style scoped>
.icon__notification {
  margin-left: -22px;
}

.icon__notification:nth-child(even) {
  transform: rotateY(180deg);
}

.notification__head {
  display: flex;
  justify-content: center;
  margin: auto;
  text-transform: uppercase;
}

.notification__content {
  overflow-y: auto;
}

h2 {
  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
}

@media only screen and (max-width: 1080px) {
  .icon__notification {
    width: 100%;
    position: initial;
  }
}
</style>
