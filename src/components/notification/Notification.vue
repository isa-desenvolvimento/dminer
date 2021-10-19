<template>
  <div class="container__notification">
    <div class="container__notification_title">
      <div class="notification__title">
        <slot name="title" />
        <slot />
      </div>
    </div>
    <div class="notification__cable"></div>
  </div>
</template>

<style scoped>
.container__notification {
  display: flex;
  /* justify-content: space-evenly; */
  margin-left: auto;
  align-items: center;

  cursor: pointer;
}
.container__notification_title {
  background-image: url('~@/assets/widget/notification.svg');
  background-repeat: no-repeat;
  width: 90%;
  height: 30%;
}

.notification__cable {
  background-image: url('~@/assets/widget/cable.svg');
  background-repeat: no-repeat;
  width: 4rem;
  height: 2rem;
  margin-left: -0.2rem;
}

.container__notification:nth-of-type(odd) {
  transform: rotateY(180deg);
}

.container__notification:nth-of-type(odd) > .container__notification_title {
  transform: rotateY(180deg);
}
</style>
