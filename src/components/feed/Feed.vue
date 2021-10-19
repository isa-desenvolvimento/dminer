<template>
  <div
    class="container__feed"
    :style="{ 'background-image': `url(${feedSVG})` }"
  >
    <div class="feed__head">
      <h2>{{ title.toUpperCase() }}</h2>
    </div>
    <div class="feed__content">
      <slot />
    </div>
    <div class="feed__footer">
      <div class="feed__button">
        <v-button type="button">Carregar mais</v-button>
      </div>
      <div class="feed__footer__buttons">
        <icon-base
          viewBox="0 0 1024 1024"
          class="icon"
          :onClick="() => onClick()"
        >
          <icon-feed-view />
          <slot />
        </icon-base>
        <icon-base
          viewBox="0 0 1024 1024"
          class="icon"
          :onClick="() => onClick()"
        >
          <icon-feed-new />
          <slot />
        </icon-base>
        <icon-base
          viewBox="0 0 1024 1024"
          class="icon"
          :onClick="() => onClick()"
        >
          <icon-feed-save />
          <slot />
        </icon-base>
      </div>
    </div>
  </div>
</template>

<script>
import feedSVG from '@/assets/widget/feed.svg'
import notificationSVG from '@/assets/widget/notification.svg'
import IconFeedView from '@/components/icons/IconFeedView'
import IconFeedSave from '@/components/icons/IconFeedSave'
import IconFeedNew from '@/components/icons/IconFeedNew'

import IconBase from '@/components/icons/IconBase'
import VButton from '@/components/button/Button'

export default {
  components: { IconBase, IconFeedView, IconFeedSave, IconFeedNew, VButton },

  props: {
    title: { type: String, required: true }
  },
  data() {
    return { feedSVG, notificationSVG }
  },
  methods: {
    onClick() {
      console.log('teste')
    }
  }
}
</script>

<style scoped>
.container__feed {
  display: grid;
  grid-template-rows: 0.1fr 0.9fr 0.1fr;

  height: 97vh;
  position: absolute;
  width: 75%;
  right: 0;
  bottom: 0;
  top: -3rem;
  background-repeat: no-repeat;
  background-size: contain;
}

.feed__head {
  position: relative;
}

.feed__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.feed__footer__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;
}

h2 {
  position: absolute;
  right: 1.5rem;
  bottom: -0.7rem;

  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
}

.icon {
  height: 100%;
  width: 100%;
}

.feed__button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
</style>
