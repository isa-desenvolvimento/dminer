<template>
  <div class="container__notification">
    <div class="container__notification_title">
      <div class="notification__title">
        <slot name="title" />
        <slot />
      </div>
    </div>
<<<<<<< HEAD
    <div class="notification__cable"></div>
=======
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  </div>
</template>

<style scoped>
.container__notification {
  display: flex;
  /* justify-content: space-evenly; */
<<<<<<< HEAD
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
=======
  align-items: center;
  margin-bottom: 1rem;

  cursor: pointer;
  height: 76%;
}
.container__notification_title {
  background-image: url('@/assets/widget/notification.svg');
  background-repeat: no-repeat;
  width: 90%;
  height: 40%;

  display: flex;
  justify-content: center;
  max-width: 30rem;
  text-overflow: ellipsis;
}

.container__notification_title:nth-child(even) {
  background-image: url('@/assets/widget/notification.svg');
  background-repeat: no-repeat;
  width: 90%;
  height: 30%;

  display: flex;
  justify-content: center;
  padding-right: 4rem;
  max-width: 30rem;
  text-overflow: ellipsis;
}

/* .container__notification:nth-child(even) {
  transform: rotateY(180deg);
}

.container__notification:nth-child(even)
  > .container__notification_title
  > .notification__title {
  transform: rotateY(180deg);
  padding-right: 4rem;
} */
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
</style>
