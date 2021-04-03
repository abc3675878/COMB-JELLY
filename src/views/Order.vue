<template>
  <div>
    <div class="container">
      <div class="row my-5">
        <div class="col-sm-12">
          <router-link
            style="display:block; margin:auto; text-decoration: none; border:none;"
            to="/"
          >
            <img
              style="display:block; margin:auto;"
              src="../assets/images/final logo white.png"
              width="200px"
            />
          </router-link>
        </div>
      </div>
      <div class="row bg-light p-3 p-sm-5">
        <div class="col-12 mb-5">
          <h3>ORDER CONFIRM<br />#{{ order.id }}</h3>
        </div>
        <div class="col-12 mb-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col">Title</th>
                <th scope="col">Size</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(product, key, index) in order.products"
                :key="product.id"
              >
                <th scope="row">{{ index + 1 }}</th>
                <td style="width:80px;">
                  <img class="w-100" :src="product.product.imageUrl" alt="" />
                </td>
                <td>{{ product.product.title }}</td>
                <td>{{ product.product_size }}</td>
                <td>{{ product.qty }}</td>
                <td>{{ product.total | currency }}</td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <td>Payable Amount</td>
                <td>{{ order.total | currency }}</td>
              </tr>
              <tr>
                <td colspan="4"></td>
                <td>Payment Status</td>
                <td>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customSwitch1"
                      disabled
                      v-model="order.is_paid"
                    />
                    <label
                      class="custom-control-label"
                      for="customSwitch1"
                      v-if="order.is_paid"
                      >已付款</label
                    >
                    <label
                      class="custom-control-label"
                      for="customSwitch1"
                      v-else
                    ></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12">
          <h6 class="mb-3">SHIPPING INFORMATION</h6>
          Email: {{ order.user.email }}
          <br />
          Name: {{ order.user.name }}
          <br />
          Address: {{ order.user.address }}
          <br />
          Tel: {{ order.user.tel }}
        </div>
      </div>
      <div class="row my-5">
        <div class="col text-center">
          <i class="fas fa-exclamation-triangle"></i>
          此網站為測試用途，僅供參考
          <i class="fas fa-exclamation-triangle"></i>
          <br />並無實際成立訂單 <br />如需購買請至

          <a
            href="https://shop378064996.world.taobao.com/search.htm?spm=a312a.7700824.w5001-23260896675.3.42aeb7bfx8g5F2&search=y&scene=taobao_shop"
            >官方淘寶商店</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {}
    };
  },
  methods: {
    getOrder() {
      const orderId = this.$route.params.id;
      const api = `${process.env.VUE_APP_API}api/abc3675878/order/${orderId}`;
      this.$http.get(api).then(res => {
        console.log("取得訂單", res.data);
        this.order = res.data.order;
      });
    }
  },
  created() {
    this.getOrder();
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

<style scoped>
*:not(h1, h2, h3, h4, h5, h6) {
  font-size: 12px;
}

h3 {
  word-wrap: break-word;
}

.table th,
.table td {
  vertical-align: inherit;
}
</style>
