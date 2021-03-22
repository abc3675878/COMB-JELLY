<template>
  <div>
    <div class="topbar">
      <div class="logo">
        <router-link style="border: 0px" to="/home"
          ><img src="../assets/images/final logo white.png" alt=""
        /></router-link>
      </div>
      <div class="navbar">
        <div class="nav">
          <li>
            <router-link to="/products">SHOP</router-link>
          </li>
          <li>SALE</li>
          <li>INFO</li>
          <li>SEARCH</li>
        </div>
        <div class="cart" @click.prevent="toggleCart">
          <a href="">CART</a>
        </div>
        <div
          class="side-cart d-flex flex-column justify-content-between"
          :class="{ toggle: this.openCart }"
        >
          <!-- 購物車頂部 -->
          <div class="cart-top d-flex justify-content-between">
            <div style="font-size:14px; font-weight:bold;" class="cart-title">
              CART
            </div>
            <div style="font-size:14px; cursor:pointer;" @click="toggleCart">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- 購物車內容 -->
          <div class="cart-content h-75">
            <div
              v-for="item in cart.data.carts"
              :key="item.id"
              class="cart-product d-flex mb-3"
            >
              <div class="cart-img">
                <img :src="item.product.imageUrl" alt="" />
              </div>
              <div
                class="cart-details d-flex flex-column justify-content-between"
              >
                <div style="font-weight:bold;" class="product-title">
                  {{ item.product.title }}
                </div>
                <div class="product-size">{{ item.product_size }}</div>
                <div class="product-bottom d-flex justify-content-between">
                  <div class="product-num d-flex">
                    <button>
                      <i class="fas fa-minus"></i>
                    </button>
                    <p class="text-center">1</p>
                    <button>
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <div class="product-price">
                    {{ item.product.price | currency }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 購物車底部 -->
          <div class="cart-bottom">
            <div class="cart-price d-flex justify-content-between">
              <p>Subtotal</p>
              <p>{{ cart.data.total | currency }}</p>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openCart: false,
      cart: {
        data: {
          carts: [],
          total: 0
        }
      }
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
    toggleCart() {
      this.openCart = !this.openCart;

      if (this.openCart) {
        this.getCart();
      }
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/abc3675878/cart`;
      this.$http.get(api).then(res => {
        console.log("取得購物車", res.data);
        this.cart = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

* {
  box-sizing: border-box;
  // border: 1px solid black;
  padding: 0;
  margin: 0;
}

.topbar {
  width: 100%;
  padding: 12px;
  padding-top: 24px;
  position: fixed;
  background-color: white;
  z-index: 9999;
}

.logo {
  img {
    width: 290px;
  }
  margin-bottom: 10px;
}

.navbar {
  width: 100%;
  font-size: $font3;

  .nav li {
    padding-right: 35px;
  }
}

.side-cart {
  height: 100vh;
  width: 300px;
  position: fixed;
  right: 0px;
  top: 0;
  padding: 15px;
  margin: 0;
  background-color: white;
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;
  font-size: 12px;
  // border-left: 1px solid black;
  // border-top: 1px solid black;
  // border-bottom: 1px solid black;
}

.toggle {
  transform: translateX(0%);
}

.cart-content {
  overflow: auto;
}

.cart-product {
  height: 80px;

  .cart-img {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  .cart-details {
    width: calc(100% - 80px);
    padding-left: 10px;
  }

  .product-num {
    width: 50%;
    border: 1px solid #e5e5e5;
    p {
      width: 50%;
    }
    button {
      width: 25%;
      border: none;
      background-color: transparent;
      &:nth-of-type(1) {
        border-right: 1px solid #e5e5e5;
      }
      &:nth-of-type(2) {
        border-left: 1px solid #e5e5e5;
      }
      i {
        padding-left: 1px;
        color: #000;
      }
    }
  }
}

.cart-bottom {
  button {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    font-size: 14px;
    border: 1px solid black;
    background: transparent;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #000;
      color: white;
    }
  }
}
</style>
