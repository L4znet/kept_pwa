<template>
  <Navbar></Navbar>
  <Content>
    <router-view />
  </Content>
</template>

<script>
  import Navbar from './components/navbar';
  import Content from './components/content';
  export default {
    components: {
      Navbar,
      Content
    },
  }
</script>

<style lang="scss">
  body {
    background-color: rgb(240, 240, 240);
  }

</style>
