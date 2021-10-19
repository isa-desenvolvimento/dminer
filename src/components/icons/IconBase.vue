<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    role="presentation"
    :viewBox="viewBox"
    :style="{
      'enable-background': 'new 0 0 512 256',
      cursor: onClick ? 'pointer' : 'defaulf'
    }"
    xml:space="preserve"
    :onclick="onClick"
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
    onClick: { type: Function, required: false }
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
</style>
