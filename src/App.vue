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
    background-color: rgb(236, 236, 236);
    display: flex;
  }

  #app {
    display: flex;
    width: 100%;
  }

</style>
