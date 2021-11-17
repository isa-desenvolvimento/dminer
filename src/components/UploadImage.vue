<template>
  <div class="container">
    <div class="container_text" @click="selectImage" v-if="!previewImage">
      <Title>Imagem</Title>
    </div>

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
import Title from '@/components/title/Title.vue'

export default {
  props: { propsImage: { type: String, required: false, default: null } },
  components: { Title },
  setup(props) {
    const fileInput = ref([])
    const previewImage = ref(props.propsImage)
    return { fileInput, previewImage }
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

        this.$emit('update:modelValue', reader.result)
      }
    },
    toDataURL(url, callback) {
      var xhr = new XMLHttpRequest()
      xhr.onload = function () {
        var reader = new FileReader()
        reader.onloadend = function () {
          callback(reader.result)
        }
        reader.readAsDataURL(xhr.response)
      }
      xhr.open('GET', url)
      xhr.responseType = 'blob'
      xhr.send()
    }
  }
}
</script>

<style scoped>
.container {
  width: 8rem;
  background-color: #60645c6e;
  top: 0;
  height: 8rem;
  transition: 0.2s linear;
  position: relative;
}

.imagePreviewWrapper {
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  position: absolute;
}

.imageInput {
  display: none;
}

.container_text {
  text-align: center;
  cursor: pointer;
  font-size: 0.5rem;

  margin-top: 50%;
  transform: translate(0, -50%);
}
</style>
