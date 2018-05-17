<template>
  <v-app dark id="app" width="100vw">
    <div class="sidebar-left">
      <sidebar-left></sidebar-left>
    </div>
    <main class="main-content">
      <navbar></navbar>
      <app-main></app-main>
    </main>
    <div class="sidebar-right">
      <sidebar-right></sidebar-right>
    </div>
    <footer class="footer"></footer>
    
    
    <router-view/>
  </v-app>
</template>


<script>
import sidebarLeft from './components/SidebarLeft.vue';
import sidebarRight from './components/SidebarRight.vue';
import navbar from './components/Navbar.vue';
import appMain from './components/Main.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {sidebarLeft, navbar, sidebarRight, appMain},
  data: {

  },
  computed: {
    ...mapGetters(['getTheme'])
  }
}
</script>

<style>
.application--wrap { 
  display: flex;
  flex-direction: row;
}

.main-content {
  flex-grow: 1
}
</style>
