<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    document.title = "COMB JELLY";
  }
};
</script>

<style lang="scss">
@import "./assets/all";

* {
  font-family: Helvetica, sans-serif;
  letter-spacing: 0.1em;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  color: #181818;
  font-weight: 300;
}

#app {
  // overflow: hidden;
}

html,
body {
  width: 100%;
}

a {
  display: inline-block;
  color: $text1;
  border-bottom: 1px solid transparent;
  transition: all 0.15s ease-in-out;

  &:hover {
    color: $text1;
    text-decoration: none;
    border-bottom: 1px solid $text1;
  }
}
</style>
