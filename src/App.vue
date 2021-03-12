<template>
  <Navbar></Navbar>
  <Content>
    <router-view />
  </Content>
</template>

<script>
  import Navbar from './components/Navbar';
  import Content from './components/Content';
  export default {
    components: {
      Navbar,
      Content
    },
  }
</script>

<style lang="scss">
  body {
    background-color: rgb(228, 228, 228);
    display: flex;
  }

  #app {
    display: flex;
  }

</style>
