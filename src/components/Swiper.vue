<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <router-link to="/products">
        <img src="../assets/images/DV15.png" alt="" />
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/products">
        <img src="../assets/images/DV10.png" alt="" />
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/products">
        <img src="../assets/images/DV29.png" alt="" />
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-loop",
  title: "Loop mode / Infinite loop",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 600,
        grabCursor: true,
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style>
/* 不能用scoped swiper樣式會加不上去 */

.swiper {
  width: 100%;
  height: 100vh;
  --swiper-theme-color: black;
  --swiper-navigation-size: 30px;
}

.swiper img {
  object-fit: cover;
  object-position: 50% 20%;
  width: 100%;
  height: 100vh;
}

.swiper a {
  cursor: grab;
}

.swiper-pagination-bullet {
  border: 2px solid black;
  width: 12px;
  height: 12px;
  opacity: 1;
  background-color: #fff;
  transition: all 0.3s;
}

.swiper-pagination-bullet-active {
  background-color: black;
}

.swiper-button-prev {
  left: 30px;
}

.swiper-button-next {
  right: 30px;
}
</style>
