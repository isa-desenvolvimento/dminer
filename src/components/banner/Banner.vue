<template>
  <div
    class="container"
    :style="{
      'margin-left': sidebarWidth
    }"
  >
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    ></div>
    <input ref="fileInput" type="file" @input="pickFile" class="imageInput" />
  </div>
</template>

<script>
import { ref } from 'vue'

import { sidebarWidth } from '@/components/sidebar/state'

export default {
  props: { propsImage: { type: String, required: false, default: null } },
  setup(props) {
    const fileInput = ref([])
    const previewImage = ref([])

    previewImage.value = props.propsImage
    fileInput.value = props.propsImage

    return { fileInput, previewImage, sidebarWidth }
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
          localStorage.banner = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  background-color: red;
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
</style>
