<template>
  <folder title="enquete" classContent="folder__user__content">
    <ul>
      <li
        class="user_li"
        v-for="(item, key) in getQuizs"
        :key="key"
        :id="`user_li_${key}`"
      >
        <div class="container_quiz">
          <div class="quiz_question">
            <span>{{ item.question }}</span>
          </div>
          <div class="quiz_footer">
            <button type="button" class="first">
              <span>{{ item.optionA }}</span>
            </button>
            <button type="button" class="second">
              <span>{{ item.optionB }}</span>
            </button>
          </div>
        </div>

        <icon-base
          viewBox="0 0 300 500"
          icon-name="icon"
          class="icon_quiz_count"
          width="135%"
          height="30%"
        >
          <icon-count-quiz>
            <div class="quiz_count">
              <div @click="count(item.id, 'optionA')">2</div>
              <div @click="count(item.id, 'optionB')">3</div>
            </div>
          </icon-count-quiz>
        </icon-base>
      </li>
    </ul>
  </folder>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconCountQuiz from '@/components/icons/IconCountQuiz.vue'

import useQuiz from '@/composables/useQuiz'

export default {
  setup() {
    const { getQuizs, updateCount } = useQuiz()

    return { getQuizs, updateCount }
  },
  methods: {
    count(id, item) {
      this.updateCount(id, item)
      console.log(item)
    }
  },
  components: {
    Folder,
    IconBase,
    IconCountQuiz
  }
}
</script>

<style scoped>
.folder__user__content {
  width: 108%;
  margin-left: -12px;
}
ul {
  list-style-type: none;
  position: relative;
}
li {
  height: 38vh;
  display: flex;
}

.container_quiz {
  border: 1px solid;
  margin-bottom: 2.5rem;
  z-index: 4;
  background: white;
  border-radius: 7px;
  display: grid;
  grid-template-rows: 80% 20%;
  padding: 0.5rem;
  width: 75%;
}
.icon_quiz_count {
  position: absolute;
  z-index: 2;
  cursor: pointer;
}

.quiz_question {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family--text);
}
.quiz_footer {
  display: flex;
  justify-content: space-evenly;
}

.quiz_count {
  font-size: 5rem;
  color: white;
  font-family: var(--font-family--text);
}

button {
  width: 50%;
  background-color: #aaff48;
  border: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: var(--font-family--text);
  cursor: pointer;
  position: relative;
}

button > span {
  position: absolute;
  left: 40%;
  transform: translate(0, 50%);
}
.first {
  border-top: transparent;
  border-left: transparent;
  border-right: 8px solid transparent;
  border-bottom: 44px solid #aaff48;
  cursor: pointer;
  background-color: transparent;
}

.second {
  border-top: transparent;
  border-right: transparent;
  border-left: 8px solid transparent;
  border-bottom: 44px solid #aaff48;
  cursor: pointer;
  background-color: transparent;
  color: red;
}
</style>
