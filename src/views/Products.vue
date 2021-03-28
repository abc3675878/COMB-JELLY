<template>
  <div>
    <Topbar></Topbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 d-none d-sm-block">
          <h1>CATEGORIES</h1>
          <ul>
            <li>ALL</li>
            <li>OUTERWEAR</li>
            <li>TOP</li>
            <li>BOTTOM</li>
            <li>DRESS</li>
            <li>ACCESSORIES</li>
            <li>SALE</li>
          </ul>
        </div>
        <div class="col-sm-9 col-12">
          <div class="row">
            <div
              class="col-6 col-sm-4 product_hover"
              v-for="product in products"
              :key="product.id"
              @click="toProduct(product.id)"
            >
              <img class="img-fluid" :src="product.imageUrl" alt="" />
              <div class="title mt-2 mb-4">
                <div class="product_title">{{ product.title }}</div>
                <div class="price">{{ product.price | currency }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";

export default {
  components: {
    Topbar
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    // 點擊後轉到商品頁面
    toProduct(id) {
      this.$router.push(`/products/${id}`);
    }
  },
  created() {
    const api = `${process.env.VUE_APP_API}api/abc3675878/products/all`;
    this.$http.get(api).then(res => {
      console.log(res.data);
      this.products = res.data.products;
    });
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
}

h1 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 15px;
}

ul li {
  font-size: 12px;
  margin-bottom: 15px;
}

.product_hover:hover {
  cursor: pointer;
}
</style>
