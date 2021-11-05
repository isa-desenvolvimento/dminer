<template>
  <div class="view__home">
    <section class="header__section">
      <form action="#" @submit.prevent="handleSuubmit">
        <inputDate v-model="search" />
      </form>
    </section>
    <section class="container__section">
      <draggable :list="listComponents" :move="log">
        <div v-for="(folder, key) in listComponents" :key="key">
          <component :is="folder"></component>
        </div>
      </draggable>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import InputDate from '@/components/input/InputDate.vue'

import birthday from '@/views/home/birthday.vue'
import calendar from '@/views/home/calendar.vue'
import notification from '@/views/home/notification.vue'
import notices from '@/views/home/notices.vue'
import reminder from '@/views/home/reminder.vue'
import quiz from '@/views/home/quiz.vue'

import { VueDraggableNext } from 'vue-draggable-next'

import useSearch from '@/composables/useSearch'

export default {
  data() {
    return {
      listComponents: [],
      enabled: true,
      dragging: false,
      inputValue: ''
    }
  },
  mounted() {
    if (localStorage.position_components_home) {
      this.listComponents = JSON.parse(localStorage.position_components_home)
    } else {
      this.listComponents = [
        notification,
        calendar,
        birthday,
        notices,
        reminder,
        quiz
      ]
    }
  },
  setup() {
    const search = ref('')
    const { getSearch, setSearch } = useSearch()

    return {
      search,
      handleSuubmit(e) {
        setSearch(search.value)
        const result = getSearch
        console.log(result)
      }
    }
  },

  components: {
    InputDate,
    draggable: VueDraggableNext
  },
  methods: {
    log(event) {
      //TODO: salvar a posição dos folders
      // localStorage.position_components_home = JSON.stringify(
      //   this.listComponents
      // )
    },
    submit(event) {
      console.log(this.inputValue)

      if (this.inputValue) {
        console.log(this.inputValue)
      }
    }
  }
}
</script>

<style scoped>
.view__home {
  /* display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  height: 100%;
  padding: 0 6rem; */

  display: grid;
  padding: 0 6rem;
}

.container__section > div {
  width: 100%;
  top: 0;
  display: grid;
  align-items: center;
  gap: 0.5rem;
  grid-template-columns: 34% 34% 34%;
}

@media only screen and (max-width: 1080px) {
  .view__home {
    grid-gap: 1rem;
    padding: 0 4rem;
  }
  .container__section > div {
    display: contents;
    padding: 0.5rem;
    overflow-y: auto;
  }
}

.list-group-item {
  cursor: not-allowed;
}
</style>
