<template>
  <div class="home">
    <Topbar></Topbar>
    <Swiper></Swiper>
    <Footer></Footer>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Footer from "@/components/Footer.vue";
import Swiper from "@/components/Swiper.vue";

export default {
  name: "Home",
  components: {
    Topbar,
    Footer,
    Swiper
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.bg {
  padding-top: 100px;
}
</style>
