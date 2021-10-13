<template>
  <transition name="fade">
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
  </transition>
</template>

<script>
import { sidebarWidth } from '@/components/sidebar/state'

export default {
  setup() {
    return { sidebarWidth }
  },
  data() {
    return {
      previewImage: null
    }
  },

  props: { toggleSidebar: Boolean },
  methods: {
    selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.container {
  width: 100%;
  background-color: red;
  position: fixed;
  top: 0;
  height: 10rem;
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
