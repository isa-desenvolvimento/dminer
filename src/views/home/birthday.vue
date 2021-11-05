<template>
  <folder title="aniversário" classContent="folder__user__content">
    <ul>
      <li
        class="user_li"
        v-for="(item, key) in getReminders"
        :key="key"
        :id="`user_li_${key}`"
      >
        <Avatar :user="user" />

        <div class="notices_footer">
          <Title>Fernando</Title>
          <span>
            <b>Data:</b>
            {{ dateHourFormart(item.dtBirthday) }}
          </span>
        </div>
      </li>
    </ul>
  </folder>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Notification from '@/components/notification/Notification.vue'
import Title from '@/components/title/Title.vue'

import { dateHourFormart } from '@/util/date.js'
import Avatar from '@/components/avatar/Avatar.vue'
import useReminder from '@/composables/useReminder'
import IconBase from '@/components/icons/IconBase.vue'
import IconCountQuiz from '@/components/icons/IconCountQuiz.vue'

export default {
  setup() {
    const { getReminders } = useReminder(1)

    return { getReminders, dateHourFormart }
  },
  components: {
    Folder,
    Notification,
    Title,
    Avatar,
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
  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: start;
  align-content: stretch;
  border: 1px solid;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  margin-right: 1rem;
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
}
.icon_quiz_count {
  position: absolute;
  z-index: 2;
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
