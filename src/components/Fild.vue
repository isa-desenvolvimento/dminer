<template>
  <div class="container_input">
    <div>
      <label v-if="text">{{ text }}:</label>
      <input class="input_form" type="text" @change="$emit('value')" />
      <div>
        <icon-base
          viewBox="0 0 500 58"
          width="100%"
          height="100%"
          class="fild_container_icon"
        >
          <icon-line></icon-line>
        </icon-base>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from './icons/IconBase.vue'
import IconLine from './icons/IconLine.vue'
export default {
  components: { IconLine, IconBase },
  props: {
    text: { type: String, required: false }
  }
}
</script>

<style scoped>
.container_input {
  /* display: grid;
  grid-template-areas:
    'label input input input input'
    'icon icon icon icon icon'; */
  /* width: 100%;
  text-overflow: ellipsis;
  z-index: 1;
  grid-template-columns: 25% auto; */
  position: relative;
}

label {
  text-transform: capitalize;
  font-size: 0.5rem;
  font-family: var(--font-family--text);

  position: absolute;
  left: 0;

  grid-area: label;
}

.fild_container_icon {
  /* position: absolute;
  bottom: 0;
  left: 0;
  /* width: fit-content;

  grid-area: icon;
  transform: rotateY(180deg); */

  transform: rotateY(180deg);
  margin-top: -30px;
  z-index: 3;
}

.input_form {
  /* background-color: red; */
  border: none;
  /* border-bottom: 1px solid #231f20; */
  outline: none;
  transition: none;
  width: 100%;
  font-size: 0.4rem;
  line-height: 0.5rem;
  color: var(--dp-text-color);
  box-sizing: border-box;
  text-overflow: ellipsis;
  z-index: 4;
  padding: 0;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}
</style>
