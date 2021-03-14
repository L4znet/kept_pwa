<template>
  <header>
    <transition name="slide-fade">
      <div :class="[show ? VisibleClass: HiddenClass]">
        <a @click="show = !show">
          <i></i>
          <i></i>
          <i></i>
        </a>
      </div>
    </transition>
    <transition name="slide-fade">
      <nav v-if="show">
        <ul>
          <ul>
            <li-nav>
              <router-link to="/">Toutes</router-link>
            </li-nav>
            <li-nav>
              <router-link to="/add_picture">Ajouter une image</router-link>
            </li-nav>
            <li-nav>
              <router-link to="/add_tag">Ajouter un tag</router-link>
            </li-nav>
          </ul>
          <ul class="tags">
            <li-nav v-for="tag in tags" :key="tag.id">
              <router-link :to="{name: 'PicturesTags', params: {id: tag.id}}">{{ tag.name }}</router-link>
            </li-nav>
          </ul>
        </ul>
      </nav>
    </transition>
  </header>
</template>
<script>
  import LiNav from "./elements/LiNav"
  import axios from 'axios'
  export default {
    name: "navbar",
    components: {
      LiNav,
    },
    data() {
      return {
        show: false,
        HiddenClass: 'navHidden',
        VisibleClass: 'navVisible'
      }
    },
    methods: {
      viewPerTag(tagId) {
        this.$emit('viewTag', tagId)
      }
    },
    async mounted() {
      axios({
        method: "get",
        url: "https://apikept.charly-e.com/tags"
      })
        .then((res) => {
          this.tags = res.data;
        })
        .catch((error) => {
          console.log('Une erreur a été rencontrée', error)
        }).finally(() => {
        });
    },
  };
</script>
<style lang="scss">
  $bg_header:rgb(226, 135, 75);

  .slide-fade-enter-active {
    transition: all 0.1s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  header {
    width: 200px;


    .navHidden {
      width: 100%;
      height: 60px;
      min-width: 200px;

      display: flex;
      justify-content: center;

      a {
        width: 60px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        i {
          display: flex;
          width: 40px;
          height: 2px;
          background-color: #000;
          margin-top: 10px;
        }
      }
    }


    .navVisible {
      width: 100%;
      height: 60px;
      min-width: 200px;
      background-color: $bg_header;

      display: flex;
      justify-content: center;

      a {
        width: 60px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        i {
          display: flex;
          width: 40px;
          height: 2px;
          background-color: #FFF;
          margin-top: 10px;
        }
      }
    }

    .nav {
      width: 100%;
      height: 70px;
      min-width: 200px;

      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      a {
        width: 60px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        i {
          display: flex;
          width: 40px;
          height: 2px;
          background-color: #FFF;
          margin-bottom: 10px;
        }
      }
    }

    nav {
      background-color: $bg_header;
      height: 100vh;
      width: 100%;
      min-width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s;

      ul {
        ul {
          display: flex;
          flex-direction: column;

          li {
            width: 100%;
            height: 60px;
            background-color: $bg_header;

            a {
              color: #FFF;
              display: flex;
              text-decoration: none;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: 300;
              text-transform: uppercase;
            }

            &:hover {
              background-color: darken($bg_header, 5);
            }
          }
        }

        &:not(:first-child) {
          border-top: 2px solid lighten($bg_header, 5);
        }
      }

      .tags {
        margin-top: 40px;
      }
    }
  }


  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    header {
      position: absolute;
      z-index: 9999;
      height: 100px;
      width: 100%;

      nav {
        .tags {
          display: flex;
          height: 500px;
          flex-direction: column;
        }
      }
    }
  }

</style>
