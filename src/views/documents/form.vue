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
              v-model="value.contentLink"
              :value="value.contentLink"
              required
              :isError="isError && !value.contentLink"
            />
            <fild-select
              :text="'Permissão'"
              v-model="value.permission"
              :value="value.permission"
              required
              :isError="isError && !value.permission"
              :options="getPermission"
            />

            <fild-select
              :text="'Categoria'"
              v-model="value.category"
              :value="value.category"
              required
              :isError="isError && !value.category"
              :options="getCategories"
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

import useDocument from '@/composables/useDocument'
import useCategory from '@/composables/useCategory'
import usePermission from '@/composables/usePermission'

export default {
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      isError: false
    }
  },
  components: { FildInput, IconBase, Send, WidgetModal, FildSelect },
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
        contentLink: ''
      }
    }
  },
  setup() {
    const { create } = useDocument()

    const { getCategories } = useCategory()
    const { getPermission } = usePermission()

    return { create, getCategories, getPermission }
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
