<script>
import Sidebar from '@/components/sidebar/Sidebar.vue'
import Banner from '@/components/banner/Banner.vue'
import Content from '@/components/content/Content.vue'
import Avatar from '@/components/avatar/Avatar.vue'

import useUser from '@/composables/useUser'
import Login from '@/views/login/index.vue'

export default {
  components: { Sidebar, Banner, Content, Avatar, Login },
  setup() {
    const { getUser, setUser, update } = useUser(1)

    setUser()
    return { getUser, update }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },

  methods: {
    updateUser(e) {
      console.table(this.getUser)
      setTimeout(() => {
        this.update(this.getUser)
      }, 0)
    }
  }
}
</script>
<template>
  <transition v-if="loggedIn" name="fade">
    <div>
      <Sidebar :user="getUser" v-model="getUser.avatar" @change="updateUser" />
      <Banner
        :propsImage="getUser.banner"
        v-model="getUser.banner"
        @change="updateUser"
      />

      <Content />
    </div>
  </transition>
  <transition v-else name="fade">
    <Login />
  </transition>
</template>

<style>
@font-face {
  font-family: 'Swis721_LtEx_BT_Light';
  src: local('Swis721_LtEx_BT_Light'),
    url(./assets/fonts/Swis721_LtEx_BT_Light.ttf) format('truetype');
}

@font-face {
  font-family: 'Cera_Stencil_PRO_Medium';
  src: local('Cera_Stencil_PRO_Medium'),
    url(./assets/fonts/Cera_Stencil_PRO_Medium.otf) format('truetype');
}

:root {
  --sidebar-green-ligth: #aaff48;
  --sidebar-green-medium: #89f45f;
  --sidebar-green-dark: #43df94;
  --sidebar-green-opacity: #55e48663;
  --white: #ffffff;
  --black: #000000;

  --gray: #60645c;
  --rgbGray: 108, 117, 125;
  --bdColor: rgb(227, 228, 229);

  --sidebar-border: 2px solid var(--gray);
  --fine-border: 1px solid var(--gray);

  --avatar-border-left-right: 81px solid var(--sidebar-green-medium);
  --avatar-border-left-right-white: 81px solid white;
  --avatar-border-bottom-top: 30px solid transparent;
  --sidebar-item-active: var(--sidebar-green-opacity);
  --sidebar-item-hover: var(--sidebar-green-opacity);
  --sidebar-bg-color: linear-gradient(
    var(--sidebar-green-ligth),
    var(--sidebar-green-dark)
  );

  --gradient-linear-white-green: linear-gradient(
    to right,
    white,
    var(--sidebar-green-ligth)
  );

  --font-family--title: 'Cera_Stencil_PRO_Medium';
  --font-family--text: 'Swis721_LtEx_BT_Light';
  --font-weight--text: 300px;

  --color-title: var(--gray);
  --color-text: var(--black);

  --background-color: white;

  --background-color--disabled: white;

  scroll-behavior: smooth;
}

.vc-container {
  border: none !important;
}

/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  /* background: var(--background-color); */
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--sidebar-green-ligth);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--sidebar-green-dark);
}

body {
  margin: 0;
}

:focus-visible {
  outline: none;
}

#app {
  font-family: var(--font-family--text);
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100vw;
  overflow: hidden;
}

table {
  width: 100%;
  height: 100%;
}

input {
  font-family: var(--font-family--text);
  font-size: var(--font-size--text);
}
</style>
