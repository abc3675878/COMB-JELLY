<template>
  <div>
    <topbar></topbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="row slider-container">
            <input type="radio" id="control-1" name="control" checked />
            <input type="radio" id="control-2" name="control" />
            <input type="radio" id="control-3" name="control" />
            <input type="radio" id="control-4" name="control" />
            <input type="radio" id="control-5" name="control" />
            <input type="radio" id="control-6" name="control" />

            <div class="col-12 col-xl-6 mb-3 slider">
              <img class="img-fluid" :src="product.imageUrl" alt="" />
            </div>
            <div class="col-12 col-xl-6 mb-3 slider">
              <img class="img-fluid" :src="product.imageUrl2" alt="" />
            </div>
            <div class="col-12 col-xl-6 mb-3 slider">
              <img class="img-fluid" :src="product.imageUrl3" alt="" />
            </div>
            <div class="col-12 col-xl-6 mb-3 slider">
              <img class="img-fluid" :src="product.imageUrl4" alt="" />
            </div>
            <div class="col-12 col-xl-6 mb-3 slider">
              <img class="img-fluid" :src="product.imageUrl5" alt="" />
            </div>
            <div class="col-12 col-xl-6 mb-3 slider">
              <img class="img-fluid" :src="product.imageUrl6" alt="" />
            </div>

            <!-- 左右導航按鈕 -->
            <div class="navigator slide-1">
              <label for="control-6">
                <i class="fas fa-chevron-left"></i>
              </label>
              <label for="control-2">
                <i class="fas fa-chevron-right"></i>
              </label>
            </div>
            <!-- 2 -->
            <div class="navigator slide-2">
              <label for="control-1">
                <i class="fas fa-chevron-left"></i>
              </label>
              <label for="control-3">
                <i class="fas fa-chevron-right"></i>
              </label>
            </div>
            <!-- 3 -->
            <div class="navigator slide-3">
              <label for="control-2">
                <i class="fas fa-chevron-left"></i>
              </label>
              <label for="control-4">
                <i class="fas fa-chevron-right"></i>
              </label>
            </div>
            <!-- 4 -->
            <div class="navigator slide-4">
              <label for="control-3">
                <i class="fas fa-chevron-left"></i>
              </label>
              <label for="control-5">
                <i class="fas fa-chevron-right"></i>
              </label>
            </div>
            <!-- 5 -->
            <div class="navigator slide-5">
              <label for="control-4">
                <i class="fas fa-chevron-left"></i>
              </label>
              <label for="control-6">
                <i class="fas fa-chevron-right"></i>
              </label>
            </div>
            <!-- 6 -->
            <div class="navigator slide-6">
              <label for="control-5">
                <i class="fas fa-chevron-left"></i>
              </label>
              <label for="control-1">
                <i class="fas fa-chevron-right"></i>
              </label>
            </div>

            <div class="controls-visible">
              <label for="control-1"></label>
              <label for="control-2"></label>
              <label for="control-3"></label>
              <label for="control-4"></label>
              <label for="control-5"></label>
              <label for="control-6"></label>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 text_area">
          <div class="title">{{ product.title }}</div>
          <div
            :class="{ sale: product.origin_price !== product.price }"
            class="price"
          >
            {{ product.price | currency }}
          </div>
          <div v-if="product.origin_price !== product.price" class="sale_price">
            {{ product.origin_price | currency }}
          </div>
          <div class="description">
            {{ product.description }}
          </div>
          <div class="button d-flex justify-content-between">
            <select v-model="productSize" name="SIZE" id="SIZE">
              <option value="" selected disabled>
                SELECT SIZE
              </option>
              <option v-for="size in product.size" :key="size" :value="size">{{
                size
              }}</option>
            </select>
            <button :class="{ 'cart-active': cart_loading }" @click="addToCart">
              <div class="cartBtn" v-if="!cart_loading">
                {{ cart_text }}
              </div>
              <div
                v-else
                class="spinner-border text-light"
                style="width: 1.5rem; height: 1.5rem;"
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </div>

          <input style="display:none;" type="checkbox" id="details_toggler" />
          <input style="display:none;" type="checkbox" id="details_toggler2" />

          <label
            style="cursor:pointer;"
            for="details_toggler"
            class="details_toggler details_toggler1"
          >
            <div class="details_title">DETAILS</div>
            <div class="details_button details_button1">
              <span></span>
              <span></span>
            </div>
          </label>

          <div class="details" v-html="product.content">
            <!-- {{ product.content }} -->
          </div>

          <label
            style="cursor:pointer;"
            for="details_toggler2"
            class="details_toggler details_toggler2"
          >
            <div class="details_title">SHIPPING TIPS</div>
            <div class="details_button details_button2">
              <span></span>
              <span></span>
            </div>
          </label>

          <div class="shopping_tips">
            運送細節
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Topbar,
    Footer
  },
  data() {
    return {
      product: [],
      productSize: "",
      cart: {},
      cart_loading: false,
      cart_text: "ADD TO CART"
    };
  },
  filters: {
    // 價格千分號
    currency: function(num) {
      const n = Number(num);
      return `¥ ${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency =
          i && c !== "." && (a.length - i) % 3 === 0
            ? `, ${c}`.replace(/\s/g, "")
            : c;
        return currency;
      })}`;
    }
  },
  methods: {
    addToCart() {
      this.cart_loading = true;
      const id = this.product.id;
      const api = `${process.env.VUE_APP_API}api/abc3675878/cart`;

      // 篩選購物車中是否含有一樣的商品
      // const cartFilter = this.cart.data.carts.some(
      //   item => id == item.product.id
      // );

      // 若尺寸不等於空，才加購物車
      if (this.productSize != "") {
        const cart = {
          product_id: id,
          product_size: this.productSize,
          qty: 1
        };
        this.$http.post(api, { data: cart }).then(res => {
          console.log(res.data);
          this.cart_loading = false;
        });
      } else {
        this.cart_loading = false;
        this.cart_text = "請先選擇尺寸!";
        setTimeout(() => {
          this.cart_text = "ADD TO CART";
        }, 3000);
      }
    }
  },
  created() {
    const id = this.$route.params.id;
    const api = `${process.env.VUE_APP_API}api/abc3675878/product/${id}`;
    this.$http.get(api).then(res => {
      console.log(res.data);
      this.product = res.data.product;
    });

    const api_cart = `${process.env.VUE_APP_API}api/abc3675878/cart`;
    this.$http.get(api_cart).then(res => {
      console.log("取得購物車列表", res.data);
      this.cart = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid black;
  overflow: hidden;
}

.container-fluid {
  position: absolute;
  top: 100px;
  padding: 12px;

  .col-xl-6 {
    padding-right: 0px;
  }
}

.text_area {
  position: fixed;
  right: 0;
  background-color: transparent;
  z-index: 10;

  .title {
    font-size: 22px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 20px;
  }

  .price {
    font-size: 14px;
  }

  .sale {
    color: #ff0000;
  }

  .sale_price {
    font-size: 14px;
    text-decoration: line-through;
  }

  .description {
    margin-top: 20px;
    font-size: 12px;
    margin-bottom: 40px;
    word-wrap: break-word;
  }

  .button {
    margin-bottom: 40px;
    height: 40px;
    font-size: 14px;

    select {
      width: 45%;
      border: 1px solid black;
      text-align-last: center;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: #000;
        color: white;
      }
    }

    button {
      width: 45%;
      border: 1px solid black;
      background-color: transparent;
      transition: all 0.3s;
      &:hover {
        background-color: #000;
        color: white;
      }
    }

    .cart-active {
      background-color: black;
    }

    .cartBtn {
      transition: color 0.3s;
      width: 100%;
      height: 100%;
      line-height: 40px;
      &:hover {
        color: white;
      }
    }
  }

  .details_title {
    font-size: 12px;
  }

  .details_toggler {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .details_button {
      position: relative;
      width: 10px;
      span {
        display: inline-block;
        position: absolute;
        height: 1px;
        width: 10px;
        background-color: #181818;
        top: 50%;
        transform: translateY(-50%);

        &:nth-child(2) {
          transition: all 0.2s ease-in-out;
          transform: rotate(90deg);
          transform-origin: center;
        }
      }
    }
  }

  .details {
    word-wrap: break-word;
    font-size: 12px;
    transform: scaleY(0);
    transform-origin: 50% 0;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    height: 0;
  }

  #details_toggler:checked ~ .details {
    transform: scaleY(1);
    transform-origin: 50% 0;
    opacity: 1;
    height: initial;
    margin-bottom: 10px;
  }

  // + - 按鈕
  #details_toggler:checked
    ~ .details_toggler1
    .details_button1
    span:nth-child(2) {
    transform: rotate(180deg);
  }

  .shopping_tips {
    word-wrap: break-word;
    font-size: 12px;
    transform: scaleY(0);
    transform-origin: 50% 0;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    height: 0;
  }

  #details_toggler2:checked ~ .shopping_tips {
    transform: scaleY(1);
    transform-origin: 50% 0;
    opacity: 1;
    height: initial;
  }

  #details_toggler2:checked
    ~ .details_toggler2
    .details_button2
    span:nth-child(2) {
    transform: rotate(180deg);
  }
}

input[type="radio"] {
  display: none;
}

.navigator {
  display: none;
}

// RWD --------------------
// RWD --------------------
// RWD --------------------
// RWD --------------------
// RWD --------------------
// RWD --------------------
@media (max-width: 768px) {
  .slider-container {
    padding: 0;
    margin: 0;
    margin-bottom: 155%;
    width: 100%;
    height: 95%;
    position: relative;
  }
  .slider {
    padding: 0;
    margin: 0;
    width: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  input[type="radio"] {
    position: relative;
    z-index: 999;
    display: none;
  }

  .controls-visible {
    position: absolute;
    bottom: 10px;
    z-index: 999;
    width: 100%;
    text-align: center;

    label {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 5px;
      padding: 0;
      border-radius: 50%;
      background-color: rgb(189, 189, 189);
      &:hover {
        cursor: pointer;
        background-color: rgb(104, 104, 104);
      }
    }
  }

  // 當input選中後，將label背景顏色更改
  .slider-container
    input[type="radio"]:nth-of-type(1):checked
    ~ .controls-visible
    label:nth-of-type(1) {
    background-color: rgb(104, 104, 104);
  }
  .slider-container
    input[type="radio"]:nth-of-type(2):checked
    ~ .controls-visible
    label:nth-of-type(2) {
    background-color: rgb(104, 104, 104);
  }
  .slider-container
    input[type="radio"]:nth-of-type(3):checked
    ~ .controls-visible
    label:nth-of-type(3) {
    background-color: rgb(104, 104, 104);
  }
  .slider-container
    input[type="radio"]:nth-of-type(4):checked
    ~ .controls-visible
    label:nth-of-type(4) {
    background-color: rgb(104, 104, 104);
  }
  .slider-container
    input[type="radio"]:nth-of-type(5):checked
    ~ .controls-visible
    label:nth-of-type(5) {
    background-color: rgb(104, 104, 104);
  }
  .slider-container
    input[type="radio"]:nth-of-type(6):checked
    ~ .controls-visible
    label:nth-of-type(6) {
    background-color: rgb(104, 104, 104);
  }

  .slider:nth-of-type(2) {
    left: 110%;
  }
  .slider:nth-of-type(3) {
    left: 220%;
  }
  .slider:nth-of-type(4) {
    left: 330%;
  }
  .slider:nth-of-type(5) {
    left: 440%;
  }
  .slider:nth-of-type(6) {
    left: 550%;
  }

  .slider-container input[type="radio"]:nth-of-type(1):checked ~ .slider {
    transform: translateX(0%);
  }
  .slider-container input[type="radio"]:nth-of-type(2):checked ~ .slider {
    transform: translateX(-110%);
  }
  .slider-container input[type="radio"]:nth-of-type(3):checked ~ .slider {
    transform: translateX(-220%);
  }
  .slider-container input[type="radio"]:nth-of-type(4):checked ~ .slider {
    transform: translateX(-330%);
  }
  .slider-container input[type="radio"]:nth-of-type(5):checked ~ .slider {
    transform: translateX(-440%);
  }
  .slider-container input[type="radio"]:nth-of-type(6):checked ~ .slider {
    transform: translateX(-550%);
  }

  .text_area {
    position: relative;
  }

  // 圖片導航按鈕
  // 圖片導航按鈕
  // 圖片導航按鈕
  .navigator {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    display: none;

    i {
      font-size: 32px;
      color: rgb(189, 189, 189);
      &:hover {
        cursor: pointer;
        color: rgb(104, 104, 104);
      }
    }
  }

  .slider-container input[type="radio"]:nth-of-type(1):checked ~ .slide-1 {
    display: flex;
  }
  .slider-container input[type="radio"]:nth-of-type(2):checked ~ .slide-2 {
    display: flex;
  }
  .slider-container input[type="radio"]:nth-of-type(3):checked ~ .slide-3 {
    display: flex;
  }
  .slider-container input[type="radio"]:nth-of-type(4):checked ~ .slide-4 {
    display: flex;
  }
  .slider-container input[type="radio"]:nth-of-type(5):checked ~ .slide-5 {
    display: flex;
  }
  .slider-container input[type="radio"]:nth-of-type(6):checked ~ .slide-6 {
    display: flex;
  }
}
</style>
