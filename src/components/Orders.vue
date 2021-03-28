<template>
  <div>
    <h1 class="mb-4">訂單列表</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">訂單編號</th>
          <th scope="col">會員帳號</th>
          <th scope="col">下單日期</th>
          <th scope="col">總金額</th>
          <th scope="col">付款</th>
          <th scope="col">訂單</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderList.orders" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.user.email }}</td>
          <td>{{ new Date(item.create_at * 1000).toLocaleDateString() }}</td>
          <td>{{ item.total | currency }}</td>
          <td>{{ item.is_paid }}</td>
          <td>
            <button
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#updateOrder"
              @click="openModal(item)"
            >
              詳情
            </button>
            <!-- Modal -->
            <!-- Modal -->
            <!-- Modal -->
            <!-- Modal -->
            <!-- Modal -->
            <div
              class="modal fade"
              id="updateOrder"
              tabindex="-1"
              role="dialog"
            >
              <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="updateOrder">
                      修改訂單
                    </h5>
                    <button type="button" class="close" data-dismiss="modal">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="row mb-3">
                        <div class="col">訂單編號: {{ order.id }}</div>
                        <div class="col text-right">
                          下單日期:
                          {{
                            new Date(
                              order.create_at * 1000
                            ).toLocaleDateString()
                          }}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <div class="row">
                            <div class="col-12 mb-3">
                              <label>Email</label>
                              <input
                                class="form-control"
                                type="text"
                                v-model="order.user.email"
                              />
                            </div>
                            <div class="col-12 mb-3">
                              <label>Name</label>
                              <input
                                class="form-control"
                                type="text"
                                v-model="order.user.name"
                              />
                            </div>
                            <div class="col-12 mb-3">
                              <label>Address</label>
                              <input
                                class="form-control"
                                type="text"
                                v-model="order.user.address"
                              />
                            </div>
                            <div class="col-12 mb-3">
                              <label>Tel</label>
                              <input
                                class="form-control"
                                type="text"
                                v-model="order.user.tel"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-lg-8 mt-3 mt-lg-0">
                          訂單商品
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">圖片</th>
                                <th scope="col">品名</th>
                                <th scope="col">尺寸</th>
                                <th scope="col">數量</th>
                                <th scope="col">單價</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(product, key, index) in order.products"
                                :key="product.id"
                              >
                                <th scope="row">{{ index + 1 }}</th>
                                <td style="width:80px;">
                                  <img
                                    class="w-100"
                                    :src="product.product.imageUrl"
                                    alt=""
                                  />
                                </td>
                                <td>{{ product.product.title }}</td>
                                <td>{{ product.product_size }}</td>
                                <td>{{ product.qty }}</td>
                                <td>{{ product.total | currency }}</td>
                              </tr>
                              <tr>
                                <td colspan="4"></td>
                                <td>應付總價</td>
                                <td>{{ order.total | currency }}</td>
                              </tr>
                              <tr>
                                <td colspan="4"></td>
                                <td>付款狀態</td>
                                <td>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="customSwitch1"
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
                                      >未付款</label
                                    >
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      關閉
                    </button>
                    <button
                      @click="updateOrder()"
                      type="button"
                      class="btn btn-primary"
                    >
                      確認修改
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <!-- 分頁 -->
    <!-- 分頁 -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li
          :class="{ disabled: !pagination.has_pre }"
          @click.prevent="getOrders(pagination.current_page - 1)"
          class="page-item"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in pagination.total_pages"
          :key="page"
          :class="{ active: pagination.current_page === page }"
          @click.prevent="getOrders(page + 1)"
          class="page-item"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li
          @click.prevent="getOrders(pagination.current_page + 1)"
          :class="{ disabled: !pagination.has_next }"
          class="page-item"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      orderList: {},
      pagination: {},
      order: {
        user: {
          order: ""
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
    openModal(item) {
      this.order = Object.assign({}, item);
    },
    updateOrder() {
      const id = this.order.id;
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/order/${id}`;
      this.$http.put(api, { data: this.order }).then(res => {
        console.log("更新訂單資訊", res.data);
        if (res.data.success) {
          $("#updateOrder").modal("hide");
          this.getOrders();
        }
      });
    },
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/orders?page=${page}`;
      this.$http.get(api).then(res => {
        console.log("取得訂單列表", res.data);
        this.orderList = res.data;
        this.pagination = res.data.pagination;
      });
    }
  },
  created() {
    this.getOrders();
  }
};
</script>

<style scoped>
*:not(h1) {
  font-size: 14px;
}
</style>
