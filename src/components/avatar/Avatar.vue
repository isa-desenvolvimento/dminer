<template>
  <div>
    <div
      id="hexagono"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    ></div>

    <input ref="fileInput" type="file" @input="pickFile" class="imageInput" />

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
  mounted() {
    if (localStorage.avatar) {
      this.previewImage = localStorage.avatar
    }
  },

  props: { username: { type: String, required: false } },
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
#hexagono {
  width: 10rem;
  height: 10rem;

  background-size: cover;
  background-position: center center;
  position: relative;

  cursor: pointer;
}
#hexagono:before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0;
  height: 0;
  border-left: var(--avatar-border-left-right);
  border-right: var(--avatar-border-left-right);
  border-bottom: var(--avatar-border-bottom-top);
}
#hexagono:after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 0;
  height: 0;
  border-left: var(--avatar-border-left-right);
  border-right: var(--avatar-border-left-right);
  border-top: var(--avatar-border-bottom-top);
}

/* .container {
  width: 100%;
  background-color: red;
  position: fixed;
  top: 0;
  height: 5rem;
  transition: 0.2s linear;
} */

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
