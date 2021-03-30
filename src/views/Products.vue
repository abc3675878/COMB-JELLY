<template>
  <div>
    <Topbar></Topbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 d-none d-sm-block">
          <h1>SEARCH</h1>
          <div class="search">
            <i class="fas fa-search"></i>
            <input
              type="search"
              v-model="search"
              name=""
              id=""
              placeholder="Search products..."
            />
          </div>

          <h1>CATEGORIES</h1>
          <ul>
            <li>ALL</li>
            <li>OUTERWEAR</li>
            <li>TOP</li>
            <li>BOTTOM</li>
            <li>DRESS</li>
            <li>SALE</li>
          </ul>
        </div>
        <div class="col-sm-9 col-12">
          <div class="row h-100">
            <div
              v-if="this.filterProducts == ''"
              class="col d-flex align-items-center justify-content-center"
            >
              No products matching the search.
            </div>
            <div
              class="col-6 col-sm-4 product_hover"
              v-for="product in filterProducts"
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
      products: [],
      search: ""
    };
  },
  computed: {
    filterProducts() {
      let products = this.products;
      // 若搜尋欄為空 就顯示全部商品
      if (this.search === "") {
        return products;
      } else {
        return products.filter(product => product.title.match(this.search));
      }
    }
  },
  methods: {
    // 點擊後轉到商品頁面
    toProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/abc3675878/products/all`;
      this.$http.get(api).then(res => {
        console.log(res.data);
        this.products = res.data.products;
      });
    }
  },
  created() {
    this.getProducts();
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

.search {
  margin-bottom: 30px;
  border-bottom: 1px solid #181818;
  width: 150px;

  i {
    line-height: 30px;
    vertical-align: middle;
    margin-right: 5px;
  }
}

input {
  border: none;
  text-indent: 5px;
  // border-bottom: 1px solid #181818;
  // padding-bottom: 2px;
  font-size: 12px !important;
  width: 125px;
  height: 30px;
}
</style>
