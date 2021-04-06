<template>
  <div>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="500"
      class="container-fluid"
    >
      <div class="row">
        <div class="col">
          <img
            style="display:block; margin:auto;"
            width="50"
            src="../assets/images/logo.png"
            alt=""
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4 col-12 text-md-left text-center social_icon mt-3">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-weixin"></i>
          <i class="fab fa-weibo"></i>
        </div>
        <div class="col-md-4 col-12 text-center order-1 order-md-0 mt-3">
          <p>© 2021 COMB JELLY</p>
        </div>
        <div class="col-md-4 col-12 text-md-right text-center mt-3">
          <router-link to="/info">CONTACT US</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <marquee>
            <i class="fas fa-exclamation-triangle"></i>
            此網站為測試用途，僅供參考。 所有圖片和文字由 COMB JELLY
            授權使用，勿任意轉載。
            <a
              href="https://shop378064996.world.taobao.com/search.htm?spm=a312a.7700824.w5001-23260896675.3.42aeb7bfx8g5F2&search=y&scene=taobao_shop"
              >如需購買請點此</a
            >
            <i class="fas fa-exclamation-triangle"></i>
          </marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  // border: 1px solid black;
  font-size: 12px;
  color: #181818;
}
.container-fluid {
  padding: 0 12px;
  margin-top: 100px;
  margin-bottom: 10px;
  position: relative;
}

.social_icon {
  i {
    font-size: 16px;
  }

  i ~ i {
    margin-left: 15px;
  }
}

marquee {
  background-color: rgb(240, 240, 240);
  height: 30px;
  border-radius: 10px;
  line-height: 30px;
}
</style>
