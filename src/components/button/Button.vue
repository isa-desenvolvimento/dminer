<template>
  <button :disabled="disabled" class="container__button" :onclick="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: { type: String, required: false, default: 'submit' },
    disabled: { type: Boolean, required: false, default: false },
    onClick: { type: Function, required: false }
  }
}
</script>

<style scoped>
.container__button {
  width: 50%;
  height: 100%;
  border: var(--fine-border);
  border-radius: 3px;
  background-color: var(--sidebar-green-ligth);
  padding: 0.5rem;

  cursor: pointer;
}

.container__button:hover {
  opacity: 0.8;
}

.container__button:disabled {
  background-color: var(--background-color--disabled);
  border-color: var(--border-color--disabled);
}

@media only screen and (max-width: 1080px) {
}
</style>
