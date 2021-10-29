<template>
  <div class="container__notification">
    <div class="container__notification_title">
      <div class="notification__title">
        <slot name="title" />
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container__notification {
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  margin-bottom: 1rem;

  cursor: pointer;
}
.container__notification_title {
  background-image: url('~@/assets/widget/notification.svg');
  background-repeat: no-repeat;
  width: 90%;
  height: 30%;
}

.container__notification:nth-child(even) {
  transform: rotateY(180deg);
}

.container__notification:nth-child(even)
  > .container__notification_title
  > .notification__title {
  transform: rotateY(180deg);
}
</style>
