<template>
  <div class="pictures">
    <load-pictures :pictures="pictures"></load-pictures>
  </div>
</template>

<script>
  import LoadPictures from '../components/LoadPictures'
  import axios from 'axios'
  export default {
    name: 'Home',
    components: {
      LoadPictures
    },
    inject: ['picturesData'],
    async mounted() {
      axios({
        method: "get",
        url: "https://pwaapikept.cleverapps.io/pictures"
      })
        .then((res) => {

          this.pictures = res.data;
          console.log(this.pictures)

        })
        .catch((error) => {
          console.log('Une erreur a été rencontrée', error)
        }).finally(() => {
        });
    },
    data() {
      return {
        pictures: this.pictures
      }
    },
  }
</script>

<style lang="scss">
  .pictures {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
  }

</style>
