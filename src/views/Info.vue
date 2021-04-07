<template>
  <div>
    <Topbar></Topbar>
    <div class="container-fluid p-0 m-0">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="bg d-flex align-items-center justify-content-center">
            <div>
              <p>漆黑一片的大海深處</p>
              <p>透明的身軀閃耀著虹彩霓光</p>
              <p>彷彿於外太空中，與群星同游</p>
              <p>虛極靜篤，與光同塵</p>
              <p>COMB JELLY 同名 “櫛水母”</p>
              <p>生活在海下 7200 米超深淵帶的稀有生物</p>
              <p>也是地球上迄今為止最古老的物種</p>
              <p>品牌巧取 COMB JELLY</p>
              <p>是有溫度的色彩拼接出少女的模樣</p>
              <p>是自由設計的皺褶浸淫出未來的神秘</p>
              <p>也是混搭的青春解構出朋克的靈魂</p>
              <p>更是不曾和不能被定義的你、我</p>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-md-4 px-4 py-3 py-sm-0 d-flex align-content-center flex-column justify-content-end"
        >
          <p style="font-size:20px;">CONTACT US</p>

          <div class="w-100 mt-3">
            <ValidationProvider
              rules="required|email"
              v-slot="{ failed, errors }"
            >
              <label class="d-flex justify-content-between p-0 m-0" for="Email">
                <p>Email *</p>
                <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
              </label>
              <input type="text" id="Email" class="w-100" />
            </ValidationProvider>
          </div>
          <div class="w-100 mt-3">
            <ValidationProvider
              name="Full Name"
              rules="required"
              v-slot="{ failed, errors }"
            >
              <label
                class="d-flex justify-content-between p-0 m-0"
                for="fullName"
              >
                <p>Full Name *</p>
                <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
              </label>
              <input type="text" id="fullName" class="w-100" />
            </ValidationProvider>
          </div>
          <div class="w-100 mt-3">
            <ValidationProvider
              name="Phone Number"
              rules="digits:10|required"
              v-slot="{ failed, errors }"
            >
              <label
                class="d-flex justify-content-between p-0 m-0"
                for="Phone Number"
              >
                <p>Phone Number *</p>
                <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
              </label>
              <input
                type="text"
                maxlength="10"
                id="Phone Number"
                class="w-100"
              />
            </ValidationProvider>
          </div>
          <div class="w-100 mt-3">
            <label for="Special Instructions">Message</label>
            <textarea
              id="Special Instructions"
              cols="30"
              rows="5"
              class="w-100"
            ></textarea>
          </div>
          <div class="w-100 mt-3 d-flex justify-content-end">
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
    Topbar
  }
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid black;
  font-size: 12px;
  overflow: hidden;
}

input,
textarea {
  border: 1px solid #b1b1b1;
  text-indent: 15px;
}

input {
  height: 40px;
}

button {
  height: 40px;
  width: 50%;
  background-color: #000;
  color: white;
  border: none;
  transition: all 0.3s;
  &:hover {
    background-color: rgb(104, 104, 104);
    color: white;
  }
}

.bg {
  height: 1000px;
  background: url(../assets/images/DV32.png) no-repeat left top/cover;
  // filter: brightness(50%);

  p {
    color: white;
    font-size: 14px;
    text-align: center;
  }
}

// .container-fluid {
//   padding-top: 100px !important;
// }
</style>
