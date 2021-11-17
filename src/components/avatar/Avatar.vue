<template>
  <div>
    <div
      class="hex"
      @click="selectImage"
      :style="{
        'background-image': `url(${previewImage})`,
        cursor: isClicked ? 'pointer' : 'default',
        width: width,
        height: height
      }"
    >
      <input ref="fileInput" type="file" @input="pickFile" class="imageInput" />
    </div>

    <h2>{{ username }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return { isLoading: true, previewImage: null }
  },
  updated() {
    this.isLoading = true
    this.previewImage = this.avatar
  },
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'src/assets/widget/avatar.svg'
    },
    username: { type: String, required: false, default: '' },
    isClicked: { type: Boolean, default: false, required: false },
    width: { type: String, required: false, default: '8rem' },
    height: { type: String, required: false, default: '9rem' }
  },
  setup(props) {
    const fileInput = ref(props.avatar)
    const previewImage = ref(props.avatar || 'src/assets/widget/avatar.svg')

    return { fileInput, previewImage }
  },

  methods: {
    selectImage() {
      if (this.isClicked) this.fileInput.click()
    },
    pickFile() {
      let input = this.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage = e.target.result
          localStorage.avatar = e.target.result
          this.$emit('update:modelValue', e.target.result)
        }
        reader.readAsDataURL(file[0])
      }
    }
  }
}
</script>

<style scoped>
.hex {
  display: flex;
  justify-content: center;
  position: relative;

  min-width: 3rem;
  min-height: 5rem;

  background-color: transparent;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  background-size: cover;
  background-position: center;
  background-repeat: repeat;
}

.imageInput {
  display: none;
}

h2 {
  font-family: var(--font-family--title);
  color: black;
  font-weight: 300;
  text-transform: uppercase;
}
</style>
