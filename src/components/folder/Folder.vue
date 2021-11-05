<template>
<<<<<<< HEAD
  <div class="container__folder">
    <div class="folder__head">
      <h2>{{ title }}</h2>
    </div>
    <div
      class="folder__content"
      :style="{ 'max-height': !isExpanded && '18rem' }"
    >
      <slot />
    </div>
    <div class="folder__footer">
      <icon-base
        viewBox="0 0 1024 1024"
        icon-name="icon"
        class="edit-icon"
        :onClick="() => onClick()"
      >
        <icon-button />
      </icon-base>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/icons/IconButton'
import IconBase from '@/components/icons/IconBase'
=======
  <icon-base
    class="container__folder"
    icon-name="icon"
    :onClick="onClick"
    viewBox="0 0 500 500"
  >
    <icon-folder>
      <div class="wrapper__folder">
        <div class="folder__head">
          <h1>{{ title }}</h1>
        </div>
        <div
          :class="classContent"
          class="folder__content"
          :style="{ 'max-heitemplateht': !isExpanded && '18rem' }"
          :id="id"
        >
          <slot />
        </div>
        <div class="folder__footer">
          <icon-base
            viewBox="0 0 1024 1024"
            icon-name="icon"
            class="folder_button"
            :onClick="onClick"
            width="70"
            height="70"
            :styles="onClick && 'cursor: pointer;'"
          >
            <icon-button />
          </icon-base>
        </div>
      </div>
    </icon-folder>
  </icon-base>
</template>

<script>
import IconButton from '@/components/icons/IconButton.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import IconBase from '@/components/icons/IconBase.vue'
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5

export default {
  props: {
    title: { type: String, required: true },
<<<<<<< HEAD
    isExpanded: { type: Boolean, required: false, default: false }
  },
  components: {
    IconBase,
    IconButton
  },
  methods: {
    onClick() {
      console.log('teste')
    }
=======
    isExpanded: { type: Boolean, required: false, default: false },
    onClick: { type: Function, required: false },
    classContent: { type: String, required: false },
    id: { type: String, required: false }
  },
  components: {
    IconBase,
    IconButton,
    IconFolder
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  }
}
</script>

<style scoped>
.container__folder {
  width: 100%;
  height: 100%;
<<<<<<< HEAD

  display: grid;
  grid-template-rows: 0.2fr 0.7fr;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 1rem;

  background-image: url('~@/assets/widget/folder.svg');
}

.folder__head {
  position: relative;
=======
}

.wrapper__folder {
  display: grid;
  grid-auto-rows: 1fr 4.1fr 1fr;
  padding: 0 1rem;
}

.folder__head {
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
}

.folder__content {
  overflow-y: auto;
<<<<<<< HEAD
=======
  overflow-x: hidden;
  max-height: 300px;
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
}

.folder__footer {
  display: flex;
  justify-content: flex-end;
  align-items: end;
<<<<<<< HEAD
}

h2 {
  position: absolute;
  right: 1.5rem;
  bottom: -0.7rem;

=======
  margin-top: 5px;
}

h1 {
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
  font-family: var(--font-family--title);
  color: var(--color-title);
  font-weight: 300;
}

<<<<<<< HEAD
.icon {
  width: 40px;
  height: 40px;
=======
.folder_button:hover {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(69, 152, 27, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(69, 152, 27, 0);
  }
>>>>>>> 3c00bf038ce8e07b0fca646fa200513cea84c6a5
}
</style>
