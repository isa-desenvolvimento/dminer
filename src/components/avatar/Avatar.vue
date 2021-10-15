<template>
  <div>
    <div id="hexagono"></div>
    <h2>{{ username }}</h2>
  </div>
</template>

<script>
export default {
  props: { username: { type: String, required: false } }
}
</script>

<style scoped>
#hexagono {
  width: 10rem;
  height: 10rem;

  background: transparent
    url('https://images.uncyc.org/pt/thumb/2/29/Mr-bean-avatar.jpg/250px-Mr-bean-avatar.jpg')
    no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
}
#hexagono:before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0;
  height: 0;
  border-left: var(--avatar-border-left-right);
  border-right: var(--avatar-border-left-right);
  border-bottom: var(--avatar-border-bottom-top);
}
#hexagono:after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 0;
  height: 0;
  border-left: var(--avatar-border-left-right);
  border-right: var(--avatar-border-left-right);
  border-top: var(--avatar-border-bottom-top);
}
</style>
