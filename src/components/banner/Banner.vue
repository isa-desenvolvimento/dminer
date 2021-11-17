<template>
  <div
    class="container"
    :style="{
      'margin-left': sidebarWidth
    }"
  >
    <div class="container_text" @click="selectImage">
      <Title v-if="!previewImage">Banner (espaço para upload)</Title>
    </div>
    <div
      v-if="isLoading"
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    ></div>
    <input ref="fileInput" type="file" @input="pickFile" class="imageInput" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Title from '@/components/title/Title.vue'

import { sidebarWidth } from '@/components/sidebar/state'
import useUser from '@/composables/useUser'

export default {
  data() {
    return { isLoading: true, previewImage: null }
  },
  props: { propsImage: { type: String, required: false, default: null } },
  setup() {
    const { updateUser } = useUser()
    const fileInput = ref([])

    return { fileInput, sidebarWidth, updateUser }
  },
  updated() {
    this.isLoading = true
    this.previewImage = this.propsImage
  },

  methods: {
    selectImage() {
      this.fileInput.click()
    },
    pickFile() {
      let input = this.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage = e.target.result
          this.$emit('update:modelValue', e.target.result)
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    }
  },
  components: { Title }
}
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #60645c6e;
  position: fixed;
  top: 0;
  height: 5rem;
  transition: 0.2s linear;
}

.imagePreviewWrapper {
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
}

.imageInput {
  display: none;
}

.container_text {
  text-align: start;
  margin-left: 5rem;
  cursor: pointer;
}
</style>
