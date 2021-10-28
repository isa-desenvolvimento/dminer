<template>
  <div
    class="container__content"
    :style="{
      'margin-left': sidebarWidth
    }"
  >
    <resize-observer @notify="handleResize" :showTrigger="true" />

    <!-- Left content -->
    <div class="container__left"><router-view /></div>

    <!-- Right content -->
    <div class="container__right">
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
            <publication />
            <publication />
            <publication />
            <publication />
          </div>
        </icon-feed>
      </icon-base>
    </div>
  </div>
</template>

<script>
import { sidebarWidth, collapsed } from '@/components/sidebar/state'

import IconBase from '@/components/icons/IconBase'
import IconFeed from '@/components/icons/IconFeed'
import Publication from '@/components/publication/Publication'

export default {
  components: { IconFeed, IconBase, Publication },

  setup() {
    return {
      sidebarWidth,
      handleResize({ width }) {
        if (width < 1080) {
          collapsed.value = true
        } else {
          collapsed.value = false
        }
      }
    }
  }
}
</script>

<style scoped>
.container__content {
  display: flex;
  margin-top: 5rem;
  height: calc(100vh - 5rem);
  transition: all 0.3s ease 0s;
}

.container__left {
  flex: 1;
}

.container__right {
  width: 20%;
  position: relative;
}

.icon__feed {
  height: 110%;
  width: 138%;
  position: absolute;
  top: -50px;
  right: -25px;
}

.feed__head {
  display: flex;
  justify-content: center;
  margin-left: 50%;
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
  .container__content {
    display: grid;
    overflow-y: auto;
  }

  .container__left {
    margin-bottom: 5rem;
  }

  .container__right {
    width: 100%;
  }

  .icon__feed {
    width: 100%;
    position: initial;
  }
}
</style>
