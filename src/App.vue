<script>
import Sidebar from '@/components/sidebar/Sidebar'
import Banner from '@/components/banner/Banner'

import { sidebarWidth } from '@/components/sidebar/state'

export default {
  components: { Sidebar, Banner },
  setup() {
    return { sidebarWidth }
  }
}
</script>
<template>
  <Sidebar />
  <Banner />
  <div
    :style="{
      'margin-left': sidebarWidth,
      'margin-top': '10rem',
      height: 'calc(100vh - 10rem)'
    }"
  >
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
