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
            <button class="btn btn-primary">修改</button>
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
export default {
  data() {
    return {
      orderList: {},
      pagination: {}
    };
  },
  filters: {
    // 價格千分號
    currency: function(num) {
      const n = Number(num);
      return `¥${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency =
          i && c !== "." && (a.length - i) % 3 === 0
            ? `, ${c}`.replace(/\s/g, "")
            : c;
        return currency;
      })}`;
    }
  },
  methods: {
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
/* * {
  font-size: 14px;
} */
</style>
