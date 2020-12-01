<template>
  <div id="app">
    <router-view />
    <MsgPush />
  </div>
</template>

<script>
  import MsgPush from '@/components/msgPush'
  export default {
    name: 'App',
    components: {
      MsgPush,
    },
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
