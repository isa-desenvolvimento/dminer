<template>
  <widget-layout-home
    layout="icon-folder-notification"
    class="mt-3 cursor-move"
    title="notificações"
    classContent="folder__notification__content"
    :onClick="openModal"
  >
    <ul>
      <li v-for="item in getNotifications" :key="item">
        <Title>
          {{ item.notification }}
        </Title>
      </li>
    </ul>
  </widget-layout-home>

  <transition name="modal">
    <widget-modal
      v-if="showModal"
      layout="icon-modal-folder"
      :title="'cadastro de enquete'"
      @close="showModal = false"
    >
      <template v-slot:body>
        <div class="form_container">
          <div class="form_container_text">
            <fild-input
              :text="'Notificação'"
              v-model="value.notification"
              :value="value.notification"
              required
              :isError="isError && !value.notification"
            />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <send
          :isLoading="isLoading"
          :isSuccess="isSuccess"
          :isError="isError"
          @click="sendForm"
        ></send>
      </template>
    </widget-modal>
  </transition>
</template>

<script>
import WidgetModal from '@/components/widget/WidgetModal.vue'
import WidgetLayoutHome from '@/components/widget/WidgetLayoutHome.vue'
import Send from '@/components/button/Send.vue'
import FildInput from '@/components/input/Fild.vue'
import IconBase from '@/components/icons/IconBase.vue'
import Title from '@/components/title/Title.vue'

import useNotification from '@/composables/useNotification'

export default {
  data() {
    return {
      showModal: false,
      value: {
        notification: '',
        userId: ''
      },
      isLoading: false,
      isSuccess: false,
      isError: false
    }
  },
  setup() {
    const { getNotifications, create } = useNotification()

    return { getNotifications, create }
  },
  methods: {
    sendForm() {
      this.isLoading = true
      if (this.validForm()) {
        let result
        if (this.isEdit) {
          result = this.create(this.value)
        } else {
          result = this.create(this.value)
        }

        this.isLoading = false
        if (result) {
          this.isSuccess = true
          setTimeout(() => {
            this.isSuccess = false
            this.$emit('close')
          }, 3000)
        }
      } else {
        this.isLoading = false
        this.isError = true
        setTimeout(() => {
          this.isError = false
        }, 3000)
      }
    },
    validForm() {
      return Object.values(this.value).every((item) => !!item)
    },
    openModal() {
      this.showModal = true
    }
  },
  components: {
    Title,
    WidgetLayoutHome,
    IconBase,
    Send,
    WidgetModal,
    FildInput
  }
}
</script>

<style scoped>
.folder__notification__content {
  width: 108%;
  margin-left: -12px;
}

ul {
  list-style-type: none;
  display: grid;
  grid-gap: 3rem;
  margin-top: -0.5rem;
}

li {
  text-align: unset;
}

li:nth-child(even) {
  text-align: left;
}

.form_container {
  display: grid;

  width: 100%;
  height: 100%;
  margin: auto;
  justify-items: stretch;
  padding: 2rem;

  width: 80%;
  margin: auto;
}

.form_container_text {
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10%;
}
</style>
