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
          <router-link to="/add">Ajouter</router-link>
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
* {
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

nav {
  background-color: rgb(207, 175, 154);
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    ul {
      display: flex;
      flex-direction: column;
      border-top: 1px solid rgb(179, 152, 134);

      li {
        width: 100%;
        height: 60px;
        background-color: rgb(207, 175, 154);

        a {
          color: rgb(0, 0, 0);
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
          background-color: darken(rgb(207, 161, 130), 3);
        }
      }
    }
  }
}
</style>
