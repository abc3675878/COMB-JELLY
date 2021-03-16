<template>
  <div class="home">
    <Topbar></Topbar>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Topbar from "@/components/Topbar.vue";

export default {
  name: "Home",
  components: {
    Topbar
  }
};
</script>
