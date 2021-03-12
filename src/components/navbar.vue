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
  background-color: rgb(159, 154, 207);
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    ul {
      display: flex;
      flex-direction: column;
      border-top: 2px solid darken(rgb(159, 154, 207), 10);

      li {
        width: 100%;
        height: 60px;
        background-color: rgb(159, 154, 207);

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
          background-color: darken(rgb(159, 154, 207), 3);
        }
      }
    }
  }
}
</style>
