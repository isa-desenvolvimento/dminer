<template>
  <div class="container_input" @click="focus($event)">
    <div>
      <label v-if="text">{{ text }}:</label>
      <input
        :id="`container_input_${text}`"
        class="input_form"
        type="text"
        @change="changeInput"
        :required="required"
      />
      <div>
        <icon-base
          viewBox="0 0 500 58"
          width="100%"
          height="100%"
          class="fild_container_icon"
          :class="`container_input_${text}`"
        >
          <icon-line></icon-line>
        </icon-base>
      </div>
      <div v-if="isError" class="fild_container_error">campo obrigatório</div>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/icons/IconBase.vue'
import IconLine from '@/components/icons/IconLine.vue'

export default {
  mounted() {
    if (this.isError) {
      const circle = document.querySelector(
        `.container_input_${this.text} .icon__line > .st1`
      )
      circle.style.fill = 'red'
    }
  },
  components: { IconLine, IconBase },
  props: {
    text: { type: String, required: false },
    required: { type: Boolean, required: false, default: false },
    isError: { type: Boolean, required: false, default: false }
  },

  methods: {
    focus(e) {
      const input = document.getElementById(`container_input_${this.text}`)
      input.focus()
    },
    changeInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
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
  cursor: text;
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

.fild_container_error {
  font-size: 0.5rem;
  color: red;
  text-align: start;
  margin-top: -0.7rem;
}
</style>
