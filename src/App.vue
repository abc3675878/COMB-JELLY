<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
  // created() {
  //   const api = `${process.env.VUE_APP_API}api/abc3675878/products`;
  //   this.axios.get(api).then(res => {
  //     console.log(res.data);
  //   });
  // }
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
