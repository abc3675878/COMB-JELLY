<template>
  <div>
    <p>
      <a
        class="btn btn-primary"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        新增優惠券
      </a>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        <form>
          <div class="form-row">
            <div class="col">
              <input
                class="form-control"
                type="text"
                placeholder="優惠券名稱"
                v-model="title"
              />
            </div>
            <div class="col-1">
              <input
                class="form-control"
                type="text"
                placeholder="折數"
                v-model="percent"
              />
            </div>
            <div class="col">
              <input
                class="form-control"
                type="text"
                placeholder="優惠券代碼"
                v-model="code"
              />
            </div>
            <div class="col-1 d-flex align-items-center justify-content-center">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customSwitch1"
                  v-model="is_enabled"
                />
                <label class="custom-control-label" for="customSwitch1"
                  >啟用</label
                >
              </div>
            </div>
            <div
              class="col d-flex align-items-center justify-content-center flex-column"
            >
              <input id="date" type="datetime-local" v-model="due_date" />
              <label for="date">到期日</label>
            </div>
            <div class="col-2">
              <button
                @click="createCoupon"
                type="submit"
                class="btn btn-primary w-100"
              >
                新增
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">優惠券名稱</th>
          <th scope="col">優惠券代碼</th>
          <th scope="col">折數(百分比)</th>
          <th scope="col">是否啟用</th>
          <th scope="col">到期時間</th>
          <th scope="col">修改</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.couponList.coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch2"
                v-model="item.is_enabled"
              />
              <label class="custom-control-label" for="customSwitch2"></label>
            </div>
          </td>
          <td>{{ item.due_date }}</td>
          <td>
            <button class="btn btn-primary">
              修改
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      is_enabled: 1,
      percent: 0,
      due_date: "",
      code: "",
      couponList: []
    };
  },
  computed: {
    changeDate() {
      return Date.parse(this.due_date) / 1000;
    }
  },
  methods: {
    createCoupon() {
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/coupon`;
      const discount_code = {
        title: this.title,
        is_enabled: this.is_enabled,
        percent: this.percent,
        due_date: this.changeDate,
        code: this.code
      };
      this.$http.post(api, { data: discount_code }).then(res => {
        console.log("新增優惠券", res.data);
        this.getCoupon();
      });
    },
    getCoupon() {
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/coupons?page=1`;
      this.$http.get(api).then(res => {
        console.log("取得優惠券列表", res.data);
        this.couponList = res.data;
      });
    }
  },
  created() {
    this.getCoupon();
  }
};
</script>
