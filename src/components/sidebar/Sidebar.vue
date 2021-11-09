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

import {
  collapsed,
  toggleSidebar,
  sidebarWidth,
  SIDEBAR_WIDTH_COLLAPSED
} from './state'

export default {
  props: {
    user: null
  },
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
  setup(props) {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
      SIDEBAR_WIDTH_COLLAPSED
    }
  },
  methods: {
    getIniciais(fullName) {
      const name = fullName.split(' ')
      return `${name[0].substring(0, 1)} \n${name[1].substring(0, 1)}`
    }
  }
}
</script>

<template>
  <div
    class="sidebar"
    :class="{
      'sidebar-closed': collapsed
    }"
    :style="{ width: sidebarWidth }"
  >
    <div class="container-avatar">
      <span v-if="collapsed" class="username">
        <div>{{ getIniciais('D Miner') }}</div>
      </span>
      <div v-else>
        <icon-base icon-name="icon" class="edit-icon">
          <icon-edit />
        </icon-base>
        <Avatar :avatar="user.avatar" :username="user.name" />
      </div>
    </div>
    <div class="menu" :style="{ display: collapsed ? 'block' : 'grid' }">
      <div
        :style="{
          display: collapsed ? 'block' : ' flex',
          'justify-content': 'center'
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
      <SidebarLink to="/power" icon="power" isPower>
        <icon-power />
      </SidebarLink>
    </div>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
    <hr
      :style="{
        top: collapsed ? '28%' : '25%',
        left: collapsed ? '80%' : '94%',
        width: collapsed ? '25px' : '35px'
      }"
    />
    <div
      class="circle"
      :style="{
        top: collapsed ? '29.4%' : '26.7%',
        left: collapsed ? '68%' : '91%'
      }"
    />
    <div
      class="circle"
      :style="{
        top: collapsed ? '29%' : '25.2%',
        left: collapsed ? '148%' : '119%'
      }"
    />
    <hr
      :style="{
        top: collapsed ? '29%' : '25.7%',
        left: collapsed ? '100%' : '100%',
        width: collapsed ? '25px' : '35px'
      }"
    />
  </div>
</template>

<style scoped>
.sidebar {
  color: white;
  background-image: var(--sidebar-bg-color);
  border-right: var(--sidebar-border);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
  box-shadow: 2px 10px 4px #888888;
}

.sidebar::before {
  content: '';
  height: 100%;
  width: 220px;
  position: absolute;
  left: 0;
  bottom: 68%;
  background: var(--sidebar-green-medium);
  transform: skewY(-25deg);
  border-right: var(--sidebar-border);
  transition: 0.2s linear;
  box-shadow: 1px -6px 4px var(--gray);

  transition: 0.3s ease;
}

.sidebar-closed::before {
  width: 70px !important;
  transition: 0.2s linear;
}

.menu {
  justify-content: center;
  margin-top: 10%;
  overflow-y: scroll;
}

h1 {
  z-index: 2;
}

.container-avatar {
  display: flex;
  justify-content: center;
  transition: 0.3s ease;
  transition-delay: 0.3s;
  z-index: 0;
}

.circle {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  z-index: 8;
  position: absolute;
  border: var(--fine-border);
  transition: 0.3s ease;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

hr {
  background: var(--gray);
  position: absolute;
  transform: skewY(336deg);
  box-shadow: 4px 2px 4px var(--gray);
}

.edit-icon {
  position: absolute;
  right: 0;
  top: 2rem;
  height: 1.5rem;
}

.username {
  font-size: 3rem;
  margin-bottom: 2rem;
}
</style>
