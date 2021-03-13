<template>
  <nav>
    <ul>
      <ul>
        <li-nav>
          <router-link to="/">Toutes</router-link>
        </li-nav>
      </ul>
      <ul>
        <li-nav>
          <router-link to="/about">About</router-link>
        </li-nav>
      </ul>
    </ul>
    <ul>
      <ul>
        <li-nav>
          <router-link to="/add_picture">Ajouter une image</router-link>
        </li-nav>
        <li-nav>
          <router-link to="/add_tag">Ajouter un tag</router-link>
        </li-nav>
      </ul>
    </ul>
  </nav>
</template>
<script>
  import LiNav from "./elements/LiNav";
  export default {
    name: "navbar",
    components: {
      LiNav,
    },
  };
</script>
<style lang="scss">
  $bg_header:rgb(226, 135, 75);

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  nav {
    background-color: $bg_header;
    height: 100vh;
    width: 200px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
            background-color: darken($bg_header, 3);
          }
        }
      }

      &:not(:first-child) {
        border-top: 2px solid lighten($bg_header, 5);
      }
    }
  }

</style>
