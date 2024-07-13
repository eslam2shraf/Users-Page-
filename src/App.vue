<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>

import AllUsers from './components/AllUsers.vue';

export default {
  name: 'App',
  components: {
    AllUsers,
  },
};
</script>

<style>
#app{
  height: 100vh;
  width: 100%;
}
body {
  height: 100vh;
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>
