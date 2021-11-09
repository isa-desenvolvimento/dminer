<template>
  <icon-base
    icon-name="icon"
    viewBox="0 0 500 500"
    width="100%"
    height="100%"
    classe="send"
  >
    <component
      :is="buttonComponent"
      @click="$emit('send')"
      id="send"
      class="send"
    >
      <svg viewBox="0 0 90.594 59.714" id="svgbtn">
        <polyline
          class="check"
          fill="none"
          stroke="#000000"
          stroke-width="10"
          stroke-miterlimit="10"
          points="1.768,23.532 34.415,56.179 88.826,1.768"
        />
      </svg>
      <span id="span_send">Enviar</span>
      <div class="out">
        <icon-base
          viewBox="0 0 32 32"
          icon-name="icon"
          width="20%"
          height="20%"
          class="icon_close"
        >
          <icon-close />
        </icon-base>
      </div>

      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </component>
  </icon-base>
</template>

<script>
import IconBase from '@/components/icons/IconBase.vue'

export default {
  data() {
    return {
      buttonComponent: 'icon-button-send'
    }
  },
  components: {
    IconBase
  },
  emits: ['send']
}
</script>

<style scoped>
.button__primary {
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #231f20;
  outline: none;
  width: 100%;
  color: #231f20;
  font-family: var(--font-family--text);
  font-weight: var(--font-weight--text);
}

.send {
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  font-family: var(--font-family--text);
  position: relative;

  margin-top: -13px;
  color: black;
}

#svgbtn {
  width: 0;
  height: 0;
}

.is-loading {
  animation: pulse 1.5s infinite;
  margin: auto;
}

.is-loading #svgbtn {
  width: 15px;
  height: 15px;
}

.is-success {
  margin: auto;
}

.is-error .send {
  display: none;
  margin-top: -15%;
}

.is-error {
  display: flex;
  justify-content: center;
}

.out {
  display: none;
}

.icon_close {
  width: 20%;
  height: 20%;
  margin-top: -20px;
  margin-bottom: 35px;
  color: #f21d1d;
}

.is-error .out {
  display: block;
  margin-top: -15%;
}

.is-success #svgbtn {
  width: 20%;
  height: 20%;
}

.check {
  stroke-dasharray: 130px 130px;
  stroke-dashoffset: 130px;
  transition: stroke-dashoffset 500ms ease-in-out;
}

.is-none {
  display: none;
}

.is-loading .lds-ellipsis {
  display: block;
}

.is-success .check {
  stroke-dashoffset: 0px;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(69, 152, 27, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(69, 152, 27, 0);
  }
}

#reset {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: none;
  border: 1px solid white;
  font-size: 14px;
  color: white;
  padding: 5px 20px;
}

.lds-ellipsis {
  display: none;
  position: relative;
  top: -50px;
  left: 40%;
}

.lds-ellipsis div {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;

  background: #000000;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 4px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 4px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
