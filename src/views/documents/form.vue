<template>
  <transition name="modal">
    <widget-modal
      v-if="showModal"
      layout="icon-modal-folder"
      :title="'cadastro de documentos'"
    >
      <template v-slot:body>
        <div class="form_container">
          <div class="form_container_text">
            <fild-input
              :text="'Título'"
              v-model="value.title"
              :value="value.title"
              required
              :isError="isError && !value.title"
            />
            <fild-input
              :text="'Link'"
              v-model="value.link"
              :value="value.link"
              required
              :isError="isError && !value.link"
            />
            <fild-input
              :text="'Permissão'"
              v-model="value.permission"
              :value="value.permission"
              required
              :isError="isError && !value.permission"
            />
            <fild-input
              :text="'Categoria'"
              v-model="value.category"
              :value="value.category"
              required
              :isError="isError && !value.category"
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
import FildInput from '@/components/input/Fild.vue'
import IconBase from '@/components/icons/IconBase.vue'
import Send from '@/components/button/Send.vue'
import WidgetModal from '@/components/widget/WidgetModal.vue'

import useDocument from '@/composables/useDocument'

export default {
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      isError: false
    }
  },
  components: { FildInput, IconBase, Send, WidgetModal },
  props: {
    showModal: { type: Boolean, required: true },
    isEdit: false,
    value: {
      type: Object,
      required: false,
      default: {
        title: '',
        category: 0,
        permissions: 0,
        link: ''
      }
    }
  },
  setup() {
    const { create } = useDocument()

    return { create }
  },

  methods: {
    changeInput(index, value) {
      this.value[index] = value
    },
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
            this.$router.push('/valueumentos')
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
    }
  }
}
</script>

<style scope>
.form_container {
  /* display: grid;
  background-image: url(/src/assets/widget/frame-team.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  margin: auto;
  justify-items: stretch;
  padding: 2rem; */

  width: 80%;
  margin: auto;
}

.form_container_text {
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10%;
}
</style>
