<template>
  <div>
    <Topbar></Topbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 d-none d-sm-block">
          <div style="position: fixed">
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
              <li
                @click.prevent="filterCategory(category)"
                class="categories_nav"
                v-for="category in categories"
                :key="category"
              >
                <a href="#">
                  {{ category }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-9 col-12">
          <loading
            :active.sync="isLoading"
            :is-full-page="false"
            :opacity="0.8"
            :can-cancel="true"
            loader="bars"
          ></loading>
          <div class="row h-100">
            <div
              style="height: 500px;"
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
                <div class="d-flex">
                  <div
                    style="color: #ff0000;"
                    v-if="product.price !== product.origin_price"
                    class="price mr-2"
                  >
                    {{ product.price | currency }}
                  </div>
                  <div
                    class="price"
                    :class="{
                      deleteLine: product.price !== product.origin_price
                    }"
                  >
                    {{ product.origin_price | currency }}
                  </div>
                </div>
              </div>
            </div>
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
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    Topbar,
    Footer,
    Loading
  },
  data() {
    return {
      products: [],
      copyProducts: [],
      categories: ["ALL", "OUTERWEAR", "TOP", "BOTTOM", "DRESS", "SALE"],
      search: "",
      isLoading: false
    };
  },
  computed: {
    filterProducts() {
      let products = this.products;
      // 若搜尋欄為空 就顯示全部商品
      if (this.search === "") {
        return products.reverse();
      } else {
        return products
          .reverse()
          .filter(product => product.title.match(this.search));
      }
    }
  },
  methods: {
    // 點擊後轉到商品頁面
    toProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    getProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/abc3675878/products/all`;
      this.$http.get(api).then(res => {
        this.isLoading = false;
        console.log(res.data);
        this.products = res.data.products;
      });
    },
    filterCategory(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/abc3675878/products/all`;
      this.$http.get(api).then(res => {
        this.isLoading = false;
        if (item === "ALL") {
          this.products = res.data.products;
        } else if (item === "SALE") {
          this.products = res.data.products
            .reverse()
            .filter(product => product.origin_price !== product.price);
        } else {
          this.products = res.data.products
            .reverse()
            .filter(product => product.category.match(item));
        }
      });
    }
  },
  created() {
    this.getProducts();
    document.title = this.$route.meta.title;
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
  margin-bottom: 10px;
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
  font-size: 12px !important;
  width: 125px;
  height: 30px;
}

// 最後一個 li 中的 a
.categories_nav:nth-last-child(1) > a {
  color: #ff0000;
}

.deleteLine {
  text-decoration: line-through;
}

// RWD
@media (max-width: 768px) {
  .product_hover:nth-child(odd) {
    padding-right: 7.5px;
  }

  .product_hover:nth-child(even) {
    padding-left: 7.5px;
  }
}
</style>
