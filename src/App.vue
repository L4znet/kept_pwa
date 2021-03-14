<template>
  <Navbar @viewTag="loadPicture"></Navbar>
  <Content>
    <router-view />
  </Content>
</template>

<script>
  import Navbar from './components/Navbar'
  import Content from './components/Content'
  import axios from 'axios'
  export default {
    components: {
      Navbar,
      Content
    },
    methods: {
      loadPicture(tagId) {
        axios({
          method: "get",
          url: `https://apikept.charly-e.com/tags/${tagId}/pictures`,
        })
          .then((res) => {
            this.picturesObject = res.data;
          })
          .catch((error) => {
            console.log('Une erreur a été rencontrée', error)
          }).finally(() => {
          });

      },
      data() {
        return {
          picturesObject: this.picturesObject
        }
      },
      provide() {
        return {
          picturesData: this.picturesObject
        }
      }
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

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    #app {
      overflow-x: hidden;
    }
  }

</style>
