<template>
  <transition name="modal">
    <widget-modal
      v-if="showModal"
      layout="icon-modal-folder"
      :title="'cadastro de benefícios'"
    >
      <template v-slot:body>
        <div class="form_container">
          <upload-image v-model="value.image" :propsImage="value.image" />
          <div class="form_container_text">
            <fild-input
              :text="'Título'"
              v-model="value.title"
              :value="value.title"
              required
              :isError="isError && !value.title"
            />
            <fild-input
              :text="'Conteúdo'"
              v-model="value.content"
              :value="value.content"
              required
              :isError="isError && !value.content"
            />

            <fild-select
              :text="'Permissão'"
              v-model="value.permission"
              :value="value.permission"
              required
              :isError="isError && !value.permission"
              :options="getPermission"
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
import FildSelect from '@/components/input/FildSelect.vue'
import IconBase from '@/components/icons/IconBase.vue'
import Send from '@/components/button/Send.vue'
import WidgetModal from '@/components/widget/WidgetModal.vue'
import UploadImage from '@/components/UploadImage.vue'

import useBenefit from '@/composables/useBenefit'
import usePermission from '@/composables/usePermission'

export default {
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      isError: false
    }
  },
  components: {
    FildInput,
    IconBase,
    Send,
    WidgetModal,
    FildSelect,
    UploadImage
  },
  props: {
    showModal: { type: Boolean, required: true },
    isEdit: false,
    value: {
      type: Object,
      required: false,
      default: {
        title: '',
        content: '',
        permissions: 0,
        image: null
      }
    }
  },
  setup() {
    const { create } = useBenefit()
    const { getPermission } = usePermission()

    return { create, getPermission }
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
    }
  }
}
</script>

<style scope>
.form_container {
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 2rem;

  width: 80%;
  margin: auto;
  gap: 1rem;
  justify-content: center;
}

.form_container_text {
  display: grid;
}
</style>
