<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <icon-base
        class="container__folder"
        icon-name="icon"
        viewBox="0 0 500 350"
        width="70%"
        height="100%"
      >
        <icon-modal>
          <div class="modal-container">
            <div class="modal-header">
              <button class="modal-default-button" @click="$emit('close')">
                <icon-base
                  class="icon__feed"
                  icon-name="icon"
                  viewBox="0 0 500 500"
                  width="80%"
                  height="80%"
                >
                  <icon-button-close></icon-button-close>
                </icon-base>
              </button>
              <!-- <slot name="header">default header</slot> -->
            </div>

            <div class="modal-body">
              <slot name="body"></slot>
            </div>
          </div>
        </icon-modal>
      </icon-base>
    </div>
  </div>
</template>

<script>
import IconModal from '@/components/icons/IconModal.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconButtonClose from '@/components/icons/IconButtonClose.vue'

export default {
  components: {
    IconBase,
    IconModal,
    IconButtonClose
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;

  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
}

.modal-container {
  width: 300px;
  margin-left: auto;
  margin-right: 3rem;
  position: relative;
  margin-top: 3.5rem;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: -1.5rem;
  position: absolute;
  left: -100px;
  width: 10%;
  padding: 0rem;

  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
