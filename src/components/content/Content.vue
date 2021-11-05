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
      <feed>
        <publication
          v-for="(post, key) in PostList"
          :key="key"
          :content="post.content"
        />
      </feed>
    </div>
  </div>
</template>

<script>
import { sidebarWidth, collapsed } from '@/components/sidebar/state.js'

import Feed from '@/components/feed/Feed.vue'
import Publication from '@/components/publication/Publication.vue'
import useFeed from '@/composables/useFeed.js'

export default {
  components: { Feed, Publication },

  setup() {
    const { getFeeds } = useFeed()

    const PostList = getFeeds

    return {
      sidebarWidth,
      PostList,
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
}
</style>
