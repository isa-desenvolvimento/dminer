<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
=======
    version="1.1"
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    role="presentation"
    :viewBox="viewBox"
<<<<<<< HEAD
    :style="{
      'enable-background': 'new 0 0 512 256',
      cursor: onClick ? 'pointer' : 'defaulf'
    }"
    xml:space="preserve"
    :onclick="onClick"
=======
    :style="styles"
    xml:space="preserve"
    :onclick="onClick"
    :class="classe"
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 40
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    viewBox: {
      type: String,
      default: '0 0 512 512'
    },
<<<<<<< HEAD
    onClick: { type: Function, required: false }
=======
    onClick: { type: Function, required: false },
    classe: { type: String, required: false },
    styles: {
      type: String || Object,
      required: false
    }
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
  z-index: 3;
}
<<<<<<< HEAD
=======

:not(svg) {
  transform-origin: 100px 100px !important;
}
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
</style>
