<template>
  <folder title="equipe" classWrapper="folder_documents" :hasButton="false">
    <ul>
      <li v-for="(item, key) in getAllUsers" :key="key">
        <div class="team_container">
          <div class="team_avatar">
            <Avatar
              width="100%"
              height="100%"
              :avatar="item.avatar"
              isBirthday
            />
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
  grid-gap: 2rem;
}

li {
  display: grid;
}

.team_container {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 1.5rem;
}
.team_avatar {
  width: 30%;
  height: 30%;
}

.team_container_text {
  font-size: 0.8rem;
  justify-self: start;
  align-self: center;
  text-align: start;
}

a {
  text-decoration: none;
}
</style>
