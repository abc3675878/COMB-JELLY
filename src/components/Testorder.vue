<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h6" v-if="!item.origin_price">
                售價{{ item.price | currency }}
              </div>

              <del class="h6" v-if="item.origin_price"
                >原價{{ item.origin_price | currency }}</del
              >
              <div class="h5" v-if="item.origin_price">
                售價{{ item.price | currency }}
              </div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="status.loadingItem === item.id"
              ></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addToCart(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="status.loadingItem === item.id"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">
                {{ product.origin_price }} 元
              </div>
              <del class="h6" v-if="product.price"
                >原價 {{ product.origin_price }} 元</del
              >
              <div class="h4" v-if="product.price">
                現在只要 {{ product.price }} 元
              </div>
            </div>
            <!-- 把庫存的數量綁定進來必用v-for顯示 -->
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCart(product.id, product.num)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="product.id === status.loadingItem"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 購物車列表 -->
    <hr />
    <table class="table">
      <thead>
        <th></th>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th>
      </thead>
      <tbody>
        <tr v-for="item in cart.data.carts" :key="item.id">
          <td class="align-middle">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="deleteCart(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
          <td class="align-middle">
            {{ item.product.title }}
            <div class="text-success" v-if="item.coupon">
              已套用優惠券
            </div>
          </td>
          <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
          <td class="align-middle text-right">
            {{ item.final_total | currency }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-right">總計</td>
          <td class="text-right">{{ cart.data.total | currency }}</td>
        </tr>
        <tr v-if="!cart.data.total === cart.data.final_total">
          <td colspan="3" class="text-right text-success">折扣價</td>
          <td class="text-right text-success">
            {{ cart.data.final_total | currency }}
          </td>
        </tr>
      </tfoot>
    </table>
    <!-- 優惠碼 -->
    <div class="input-group mb-3 input-group-sm">
      <input
        v-model="coupon_code"
        type="text"
        class="form-control"
        placeholder="請輸入優惠碼"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="addCoupon"
        >
          套用優惠碼
        </button>
      </div>
    </div>
    <!-- 建立訂單頁面 -->
    <div class="my-5 row justify-content-center">
      <ValidationObserver v-slot="{ invalid }">
        <form class="col-md-6" @submit.prevent="createOrder">
          <div class="form-group">
            <ValidationProvider
              name="Email"
              class="form-group"
              rules="required|email"
              v-slot="{ failed, errors }"
              tag="div"
            >
              <label for="useremail">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="useremail"
                v-model="form.user.email"
                placeholder="請輸入 Email"
              />
              <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <ValidationProvider
              name="姓名"
              rules="required"
              v-slot="{ failed, errors }"
            >
              <label for="username">收件人姓名</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="username"
                v-model="form.user.name"
                placeholder="輸入姓名"
              />
              <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <ValidationProvider
              name="電話"
              rules="digits:10"
              v-slot="{ failed, errors }"
            >
              <label for="usertel">收件人電話</label>
              <input
                type="tel"
                class="form-control"
                id="usertel"
                v-model="form.user.tel"
                placeholder="請輸入電話"
              />
              <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <ValidationProvider
              name="地址"
              class="form-group"
              rules="required"
              v-slot="{ failed, errors }"
              tag="div"
            >
              <label for="useraddress">收件人地址</label>
              <input
                type="text"
                class="form-control"
                name="address"
                id="useraddress"
                v-model="form.user.address"
                placeholder="請輸入地址"
              />
              <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <label for="comment">留言</label>
            <textarea
              name=""
              id="comment"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-danger" :disabled="invalid">送出訂單</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      products: [],
      product: {},
      isLoading: false,
      status: {
        // 按查看更多時把id傳進來，v-if的id跟商品id一樣時就顯示讀取效果
        loadingItem: ""
      },
      cart: {},
      coupon_code: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  components: {
    Loading
  },
  filters: {
    // 價格千分號
    currency: function(num) {
      const n = Number(num);
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency =
          i && c !== "." && (a.length - i) % 3 === 0
            ? `, ${c}`.replace(/\s/g, "")
            : c;
        return currency;
      })}`;
    }
  },
  methods: {
    getProducts() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/abc3675878/products`;
      this.$http
        .get(api)
        .then(res => {
          console.log(res.data);
          vm.isLoading = false;
          vm.products = res.data.products;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 取單一筆資料
    getProduct(id) {
      const vm = this;
      vm.status.loadingItem = id;
      const api = `${process.env.VUE_APP_API}api/abc3675878/product/${id}`;
      this.$http
        .get(api)
        .then(res => {
          console.log(res.data);
          vm.status.loadingItem = "";
          // 資料讀進去後再打開modal
          vm.product = res.data.product;
          $("#productModal").modal("show");
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 加購物車的api 需要傳入 id 和 qty，預設為1
    addToCart(id, qty = 1) {
      const vm = this;
      vm.status.loadingItem = id;
      const api = `${process.env.VUE_APP_API}api/abc3675878/cart`;
      // 宣告一個物件將多個值包起來
      const cart = {
        product_id: id,
        qty
      };
      // post 到物件裡的 data 中
      this.$http
        .post(api, { data: cart })
        .then(res => {
          console.log(res.data);
          vm.status.loadingItem = "";
          $("#productModal").modal("hide");
          // 加到購物車後記得重新取得一次購物車
          vm.getCart();
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 取得購物車列表
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}api/abc3675878/cart`;
      vm.isLoading = true;
      this.$http.get(api).then(res => {
        console.log("成功取得購物車", res.data);
        vm.cart = res.data;
        vm.isLoading = false;
      });
    },
    deleteCart(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}api/abc3675878/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(api).then(res => {
        console.log("刪除購物車商品", res.data);
        vm.isLoading = false;
        vm.getCart();
      });
    },
    addCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}api/abc3675878/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then(res => {
        console.log("送出優惠碼", res.data);
        vm.isLoading = false;
        vm.coupon_code = "";
        vm.getCart();
        if (!res.data.success) {
          this.$bus.$emit("message:push", res.data.message, "danger");
        }
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}api/abc3675878/order`;
      const order = vm.form;
      vm.isLoading = true;
      this.$http.post(api, { data: order }).then(res => {
        console.log("送出訂單", res.data);
        vm.isLoading = false;
        vm.getCart();
        if (!res.data.success) {
          this.$bus.$emit("message:push", res.data.message, "danger");
        }
      });
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>
