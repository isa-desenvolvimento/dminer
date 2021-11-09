<template>
  <folder
    title="equipe"
    folder="icon-modal-folder"
    :hasButton="false"
    viewbox="0 0 700 500"
  >
    <ul>
      <li v-for="(item, key) in getAllUsers" :key="key">
        <div class="team_container">
          <div class="team_avatar">
            <Avatar width="90%" height="80%" :avatar="item.avatar" isBirthday />
          </div>
          <div class="team_container_text">
            <div class="team_container_name">
              {{ item.name }} • {{ item.area }}
            </div>
            <div class="team_container_email">
              {{ item.email }}
            </div>
            <div class="team_container_span">
              {{ dayMounthFormart(item.dtBirthday) }}
              <a :href="item.linkedin" target="_blank">linkedin</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </folder>
</template>

<script>
import Folder from '@/components/folder/Folder.vue'
import Title from '@/components/title/Title.vue'
import Avatar from '@/components/avatar/Avatar.vue'

import useAllUsers from '@/composables/useAllUsers'
import { dayMounthFormart } from '@/util/date.js'

export default {
  setup() {
    const { getAllUsers } = useAllUsers()

    return { getAllUsers, dayMounthFormart }
  },
  components: {
    Folder,
    Title,
    Avatar
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  display: grid;
  grid-template-columns: 50% 50%;
  width: 90%;
  justify-items: center;
}

li {
  display: grid;
  background-image: url(@/assets/widget/frame-team.svg);
  background-repeat: no-repeat;
  background-size: contain;

  width: 100%;
  height: 100%;
}

.team_container {
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 1rem;
  padding-left: 2rem;
}

.team_container_text {
  font-size: 0.6rem;
  justify-self: start;
  align-self: center;
  text-align: start;
  margin-top: -1.5rem;

  text-transform: uppercase;
}

.team_container_name {
  font-family: var(--font-family--title);
  font-size: 0.7rem;
  font-weight: var(--font-weight);
}

a {
  text-decoration: none;
}
</style>
