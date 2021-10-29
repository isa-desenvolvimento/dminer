<template>
  <icon-base
    class="icon__feed"
    icon-name="icon"
    viewBox="0 0 250 500"
    width="100%"
    height="100%"
  >
    <icon-feed>
      <div class="feed__head">
        <h2>Feed</h2>
      </div>
      <div class="feed__content">
        <slot />
      </div>
    </icon-feed>
  </icon-base>
</template>

<script>
import IconBase from '@/components/icons/IconBase'
import IconFeed from '@/components/icons/IconFeed'

export default {
  components: { IconFeed, IconBase }
}
</script>

<style scoped>
.icon__feed {
  height: 105%;
  width: 138%;
  position: absolute;
  top: -50px;
  right: -25px;
}

.feed__head {
  display: flex;
  justify-content: center;
  margin-left: 50%;
  text-transform: uppercase;
}
.feed__content {
  overflow-y: auto;
}

h2 {
  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
}

@media only screen and (max-width: 1080px) {
  .icon__feed {
    width: 100%;
    position: initial;
  }
}
</style>
