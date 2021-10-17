<script>
import Sidebar from '@/components/sidebar/Sidebar'
import Banner from '@/components/banner/Banner'
import Content from '@/components/content/Content'

export default {
  components: { Sidebar, Banner, Content }
}
</script>
<template>
  <Sidebar />
  <Banner />

  <Content />
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

  --gray: #60645c;

  --sidebar-border: 2px solid var(--gray);
  --fine-border: 1px solid var(--gray);

  --avatar-border-left-right: 81px solid var(--sidebar-green-medium);
  --avatar-border-bottom-top: 30px solid transparent;
  --sidebar-item-active: var(--sidebar-green-opacity);
  --sidebar-item-hover: var(--sidebar-green-opacity);
  --sidebar-bg-color: linear-gradient(
    var(--sidebar-green-ligth),
    var(--sidebar-green-dark)
  );
}

body {
  margin: 0;
}

:focus-visible {
  outline: none;
}

#app {
  font-family: 'Swis721_LtEx_BT_Light', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  overflow: hidden;
}
</style>
