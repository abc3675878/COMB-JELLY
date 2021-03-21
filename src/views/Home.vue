<template>
  <div class="home">
    <Topbar></Topbar>
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Topbar from "@/components/Topbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Topbar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
