<template>
  <div
    class="container__notification"
    :style="{
      'background-image': `url(${notificationSVG})`
    }"
  >
    <div class="notification__title">
      <slot name="title" />
      <slot />
    </div>
    <div class="notification__item"></div>
  </div>
</template>

<script>
import notificationSVG from '@/assets/widget/notification.svg'

export default {
  data() {
    return { notificationSVG }
  }
}
</script>

<style scoped>
.container__notification {
  background-repeat: no-repeat;
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
  align-items: center;

  cursor: pointer;
}

.container__notification:nth-of-type(odd) {
  transform: rotateY(180deg);
}

.container__notification:nth-of-type(odd) > .notification__title {
  transform: rotateY(180deg);
}
</style>
