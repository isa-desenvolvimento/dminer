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
              v-model="doc.title"
              :value="doc.title"
              required
              :isError="isError && !doc.title"
            />
            <fild-input
              :text="'Link'"
              v-model="doc.link"
              :value="doc.link"
              required
              :isError="isError && !doc.link"
            />
            <fild-input
              :text="'Permissão'"
              v-model="doc.permission"
              :value="doc.permission"
              required
              :isError="isError && !doc.permission"
            />
            <fild-input
              :text="'Categoria'"
              v-model="doc.category"
              :value="doc.category"
              required
              :isError="isError && !doc.category"
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
    doc: {
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
      this.docs[index] = value
    },
    sendForm() {
      this.isLoading = true
      if (this.validForm()) {
        let result
        if (this.isEdit) {
          result = this.create(this.doc)
        } else {
          result = this.create(this.doc)
        }

        this.isLoading = false
        if (result) {
          this.isSuccess = true
          setTimeout(() => {
            this.isSuccess = false
            this.$router.push('/documentos')
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
      return Object.values(this.doc).every((item) => !!item)
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
