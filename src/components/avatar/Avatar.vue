<template>
  <div>
    <div
<<<<<<< HEAD
      id="hexagono"
      :style="{ 'background-image': `url(${previewImage})` }"
=======
      :class="{ hexagono: !isBGWhite, hexagono_white: isBGWhite }"
      :style="{
        'background-image': `url(${previewImage})`,
        cursor: isClicked ? 'pointer' : 'default'
      }"
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
      @click="selectImage"
    ></div>

    <input ref="fileInput" type="file" @input="pickFile" class="imageInput" />

<<<<<<< HEAD
    <h2>{{ username }}</h2>
=======
    <h2>{{ user.name }}</h2>
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null
    }
  },
<<<<<<< HEAD
  mounted() {
    if (localStorage.avatar) {
      this.previewImage = localStorage.avatar
    }
  },

  props: { username: { type: String, required: false } },
  methods: {
    selectImage() {
      this.$refs.fileInput.click()
=======
  props: {
    user: {
      type: String,
      required: false,
      default: { avatar: null, name: '' }
    },
    isClicked: { type: Boolean, default: true, required: false },
    isBGWhite: { type: Boolean, default: false, required: false }
  },
  mounted(props) {
    if ((localStorage.avatar, !props?.user.avatar)) {
      this.previewImage = localStorage.avatar
    } else if (props?.user.avatar) {
      this.previewImage = props?.user.avatar
    }
  },

  methods: {
    selectImage() {
      if (this.isClicked) this.$refs.fileInput.click()
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
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
<<<<<<< HEAD
#hexagono {
=======
.hexagono {
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  width: 10rem;
  height: 10rem;

  background-size: cover;
  background-position: center center;
  position: relative;

  cursor: pointer;
}
<<<<<<< HEAD
#hexagono:before {
=======
.hexagono:before {
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
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
<<<<<<< HEAD
#hexagono:after {
=======
.hexagono:after {
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
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

<<<<<<< HEAD
=======
.hexagono_white:before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0;
  height: 0;
  border-left: var(--avatar-border-left-right-white);
  border-right: var(--avatar-border-left-right-white);
  border-bottom: var(--avatar-border-bottom-top);
}
.hexagono_white:after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 0;
  height: 0;
  border-left: var(--avatar-border-left-right-white);
  border-right: var(--avatar-border-left-right-white);
  border-top: var(--avatar-border-bottom-top);
}

>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
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

h2 {
  font-family: var(--font-family--title);
  color: black;
  font-weight: 300;
  text-transform: uppercase;
}
</style>
