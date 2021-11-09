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
export default {
  data() {
    return {
      previewImage: null
    }
  },
  props: {
    avatar: { type: String, required: true, default: null },
    username: { type: String, required: false, default: '' },
    isClicked: { type: Boolean, default: true, required: false },
    width: { type: String, required: false, default: '8rem' },
    height: { type: String, required: false, default: '9rem' }
  },
  mounted() {
    this.previewImage =
      this.avatar || localStorage.avatar || 'src/assets/widget/avatar.svg'
  },

  methods: {
    selectImage() {
      if (this.isClicked) this.$refs.fileInput.click()
    },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImage = e.target.result
          localStorage.avatar = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
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

  min-width: 5rem;
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
