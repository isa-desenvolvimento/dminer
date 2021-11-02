<template>
  <div class="container mgY-5">
    <div class="box">
      <FullCalendar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FullCalendar from './components/FullCalendar.vue'

export default defineComponent({
  name: 'App',
  components: {
    FullCalendar
  }
})
</script>
