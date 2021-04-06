<template>
  <div class="home">
    <Topbar></Topbar>
    <Swiper></Swiper>
    <div class="container-fluid mt-5">
      <h1 class="ml-1">
        <router-link to="/products">shop now.</router-link>
      </h1>
      <div class="row special_products">
        <div class="col-6 col-md-3">
          <router-link to="/products/-MWxn7DIhKeJccVj-Ex8"
            ><img src="../assets/images/home_01.jpg" alt=""
          /></router-link>
        </div>
        <div class="col-6 col-md-3 order-1 order-md-0">
          <div class="row">
            <div class="col-6">
              <router-link to="/products/-MWxn7DIhKeJccVj-Ex8"
                ><img src="../assets/images/002.jpg" alt=""
              /></router-link>
            </div>
            <div class="col-6">
              <router-link to="/products/-MWxgObrXmSfZBPYBwwW"
                ><img src="../assets/images/007.jpg" alt=""
              /></router-link>
            </div>
            <div class="col-6">
              <router-link to="/products/-MWxiUhQSa9w-m726Rpb"
                ><img src="../assets/images/006.jpg" alt=""
              /></router-link>
            </div>
            <div class="col-6">
              <router-link to="/products/-MWxn7DIhKeJccVj-Ex8"
                ><img src="../assets/images/001.jpg" alt=""
              /></router-link>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <router-link to="/products/-MWxZQF465HqGawgltLv"
            ><img src="../assets/images/003.jpg" alt=""
          /></router-link>
        </div>
        <div class="col-6 col-md-3 order-1 order-md-0">
          <div class="row">
            <div class="col-6">
              <router-link to="/products/-MWxZQF465HqGawgltLv"
                ><img src="../assets/images/004.jpg" alt=""
              /></router-link>
            </div>
            <div class="col-6">
              <router-link to="/products/-MWxlRVPdAVIDWbvpOBJ"
                ><img src="../assets/images/009.jpg" alt=""
              /></router-link>
            </div>
            <div class="col-6">
              <router-link to="/products/-MWxq838uiBEl_-w4xf3"
                ><img src="../assets/images/010.jpg" alt=""
              /></router-link>
            </div>
            <div class="col-6">
              <router-link to="/products/-MWxWyU_TLv_omvGr1z2"
                ><img src="../assets/images/008.jpg" alt=""
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
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

img {
  width: 100%;
  border: 1px solid white;
  // padding: 5px;
}

.special_products {
  a {
    border: none;
    display: inline;
  }
}
</style>
