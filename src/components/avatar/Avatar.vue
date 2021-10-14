<template>
  <div class="hexagon">
    <Avatar />
  </div>
</template>

<script>
import Avatar from 'vue-boring-avatars'

export default {
  components: {
    Avatar
  }
}
</script>

<style scoped>
.hexagon {
  position: relative;
  width: 150px;
  height: 80px;
  background-color: #64c7cc;
  margin: 86.6px 0;
}

.hexagon::before,
.hexagon::after {
  content: '';
  position: absolute;
  left: 0; /* added */
  width: 0;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
}

.hexagon::before {
  bottom: 100%;
  border-bottom: 40px solid #64c7cc;
}

.hexagon::after {
  top: 100%;
  width: 0;
  border-top: 40px solid #64c7cc;
}
</style>
