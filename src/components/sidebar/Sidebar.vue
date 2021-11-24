<template>
  <div
    class="sidebar"
    :class="{
      'sidebar-closed': collapsed
    }"
    :style="{ width: sidebarWidth }"
  >
    <span v-show="collapsed" class="username">
      {{ user?.usuario?.charAt(0) }}
    </span>
    <div class="container-avatar" v-show="!collapsed">
      <div>
        <icon-base icon-name="icon" class="edit-icon">
          <icon-edit />
        </icon-base>
        <Avatar
          :avatar="user.avatar"
          :username="user.usuario"
          isClicked
          v-model="user.avatar"
          @change="updateUser"
        />
      </div>
    </div>
    <div class="menu" :style="{ display: collapsed ? 'block' : 'grid' }">
      <div
        :style="{
          display: collapsed ? 'block' : ' flex',
          'justify-content': 'left'
        }"
      >
        <SidebarLink to="/email" icon="email" isIconLink>
          <icon-email />
        </SidebarLink>

        <SidebarLink to="/birthday" icon="birthday" isIconLink>
          <icon-birthday />
        </SidebarLink>
      </div>

      <SidebarLink to="/documentos" icon="documentos">
        <icon-document />
        DOCUMENTOS
      </SidebarLink>
      <SidebarLink to="/beneficios" icon="benefícios">
        <icon-benefits />
        BENEFÍCIOS
      </SidebarLink>
      <SidebarLink to="/equipe" icon="Equipe">
        <icon-team />
        EQUIPE
      </SidebarLink>
      <SidebarLink to="/tutoriais" icon="fas fa-image">
        <icon-tutoriais />
        TUTORIAIS
      </SidebarLink>
      <SidebarLink to="/permissoes" icon="fas fa-image">
        <icon-permissions />
        PERMISSÕES
      </SidebarLink>
      <div @click="logout()">
        <SidebarLink to="/power" icon="power" isPower>
          <icon-power />
        </SidebarLink>
      </div>
    </div>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    ></span>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import Avatar from '@/components/avatar/Avatar.vue'
import IconBenefits from '@/components/icons/IconBenefits.vue'
import IconPermissions from '@/components/icons/IconPermissions.vue'
import IconTeam from '@/components/icons/IconTeam.vue'
import IconDocument from '@/components/icons/IconDocument.vue'
import IconTutoriais from '@/components/icons/IconTutoriais.vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import IconBirthday from '@/components/icons/IconBirthday.vue'
import IconPower from '@/components/icons/IconPower.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconBase from '@/components/icons/IconBase.vue'

export default {
  props: { user: { type: Object, required: true } },

  components: {
    SidebarLink,
    Avatar,
    IconBenefits,
    IconDocument,
    IconPermissions,
    IconTeam,
    IconTutoriais,
    IconBirthday,
    IconEmail,
    IconPower,
    IconEdit,
    IconBase
  },

  computed: {
    collapsed() {
      return this.$store.state.sidebar.collapsed
    },
    sidebarWidth() {
      return this.$store.state.sidebar.sidebarWidth
    }
  },
  methods: {
    updateUser() {
      this.$emit('update:modelValue', this.user)
    },
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
    toggleSidebar() {
      this.$store.dispatch('sidebar/toggleSidebar')
    }
  }
}
</script>

<style scoped>
.sidebar {
  background-image: url(/src/assets/widget/sidebar.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* height: 100vh; */
  position: fixed;
  z-index: 9999;
  top: -1px;
  left: 0;
  bottom: 0;
  padding: 1.5em;
  display: flex;
  flex-direction: column;

  transition: all 0.5s 0s ease;
}

.menu {
  justify-content: left;
  margin-top: 10%;
  overflow-y: scroll;
  font-size: 0.8rem;
  font-family: var(--font-family--text);

  overflow-x: hidden;
}

h1 {
  z-index: 2;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 2px;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
  cursor: pointer;

  width: 100%;
}

.edit-icon {
  position: absolute;
  right: 1.5rem;
  top: 2rem;
  height: 1.5rem;
}

.username {
  font-size: 3rem;
  margin-bottom: 2rem;
}
</style>
