<script>
import SidebarLink from './SidebarLink'
import Avatar from '@/components/avatar/Avatar'

import {
  collapsed,
  toggleSidebar,
  sidebarWidth,
  SIDEBAR_WIDTH_COLLAPSED
} from './state'

export default {
  props: {},
  components: { SidebarLink, Avatar },
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
      SIDEBAR_WIDTH_COLLAPSED
    }
  }
}
</script>

<template>
  <div
    :class="{
      sidebar: true,
      'sidebar-closed': collapsed
    }"
    :style="{ width: sidebarWidth }"
  >
    <div class="container-avatar">
      <span v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <Avatar v-else />
    </div>
    <div class="menu">
      <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
      <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
      <SidebarLink to="/analytics" icon="fas fa-chart-bar">
        Analytics
      </SidebarLink>
      <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
      <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink>
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
        top: collapsed ? '29.3%' : '25.2%',
        left: collapsed ? '148%' : '119%'
      }"
    />
    <hr
      :style="{
        top: collapsed ? '29.5%' : '25.7%',
        left: collapsed ? '100%' : '100%',
        width: collapsed ? '25px' : '35px'
      }"
    />
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;

  --sidebar-green-ligth: #aaff48;
  --sidebar-green-medium: #89f45f;
  --sidebar-green-dark: #43df94;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-image: linear-gradient(
    var(--sidebar-green-ligth),
    var(--sidebar-green-dark)
  );
  border-right: solid 2px black;

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
  border-right: solid 2px black;
  transition: 0.2s linear;
}

.sidebar-closed::before {
  width: 70px !important;
  transition: 0.2s linear;
}

.menu {
  margin-top: 70%;
  display: grid;
  justify-content: center;
}

h1 {
  z-index: 2;
}

.container-avatar {
  display: flex;
  justify-content: center;
  transition: 0.3s ease;
}
.circle {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  z-index: 8;
  position: absolute;
  border: solid 1px black;
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
  border-color: black;
  position: absolute;
  transform: skewY(-25deg);
}
</style>
