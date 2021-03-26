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
    <div class="collapse createConfirm" id="collapseExample">
      <div class="card card-body">
        <form>
          <div class="form-row">
            <div class="col d-flex align-items-center justify-content-center">
              <input
                class="form-control"
                type="text"
                placeholder="優惠券名稱"
                v-model="title"
              />
            </div>
            <div class="col-1 d-flex align-items-center justify-content-center">
              <input
                class="form-control"
                type="text"
                placeholder="折數"
                v-model="percent"
              />
            </div>
            <div class="col d-flex align-items-center justify-content-center">
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
            <div class="col-1 d-flex align-items-center justify-content-center">
              <button
                @click="createCoupon"
                type="submit"
                class="btn btn-primary"
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
      <tbody v-for="item in this.couponList.coupons" :key="item.id">
        <tr>
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
            <button
              class="btn btn-primary"
              type="button"
              data-toggle="collapse"
              :data-target="'#' + item.id"
            >
              修改
            </button>
          </td>
        </tr>
        <!-- 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位-->
        <!-- 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位-->
        <!-- 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位-->
        <!-- 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位-->
        <!-- 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位-->
        <!-- 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位-->
        <!-- 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位-->
        <!-- 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位 修改欄位-->
        <tr>
          <td colspan="6" class="border-0">
            <div class="collapse updateConfirm" :id="item.id">
              <div class="card card-body">
                <form>
                  <div class="form-row">
                    <div
                      class="col-1 d-flex align-items-center justify-content-center"
                    >
                      <button
                        type="button"
                        class="close"
                        @click="deleteCoupon(item.id)"
                      >
                        <span aria-hidden="true" class="font-weight-bold"
                          >&times; 刪除</span
                        >
                      </button>
                    </div>
                    <div
                      class="col d-flex align-items-center justify-content-center"
                    >
                      <input
                        class="form-control"
                        type="text"
                        placeholder="優惠券名稱"
                        v-model="item.title"
                      />
                    </div>
                    <div
                      class="col-1 d-flex align-items-center justify-content-center"
                    >
                      <input
                        class="form-control"
                        type="text"
                        placeholder="折數"
                        v-model="item.percent"
                      />
                    </div>
                    <div
                      class="col d-flex align-items-center justify-content-center"
                    >
                      <input
                        class="form-control"
                        type="text"
                        placeholder="優惠券代碼"
                        v-model="item.code"
                      />
                    </div>
                    <div
                      class="col-1 d-flex align-items-center justify-content-center"
                    >
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          :id="'check' + item.id"
                          v-model="item.is_enabled"
                        />
                        <label
                          class="custom-control-label"
                          :for="'check' + item.id"
                          >啟用</label
                        >
                      </div>
                    </div>
                    <div
                      class="col d-flex align-items-center justify-content-center flex-column"
                    >
                      <input
                        :id="'date' + item.id"
                        type="datetime-local"
                        v-model="item.due_date"
                      />
                      <label :for="'date' + item.id">到期日</label>
                    </div>
                    <div
                      class="col-1 d-flex align-items-center justify-content-center"
                    >
                      <button
                        @click="updateCoupon(item)"
                        type="submit"
                        class="btn btn-dark"
                      >
                        確認
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      title: "",
      is_enabled: 1,
      percent: 0,
      due_date: "",
      code: "",
      couponList: {}
      // updateCouponList: {}
    };
  },
  // computed: {
  //   updateCouponList() {
  //     return Object.assign({}, this.couponList)
  //   }
  // },
  methods: {
    createCoupon() {
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/coupon`;
      const discount_code = {
        title: this.title,
        is_enabled: this.is_enabled,
        percent: this.percent,
        due_date: this.due_date,
        code: this.code
      };
      this.$http.post(api, { data: discount_code }).then(res => {
        $(".createConfirm").collapse("hide");
        console.log("新增優惠券", res.data);
        this.getCoupon();
        this.title = "";
        this.is_enabled = "";
        this.percent = "";
        this.due_date = "";
        this.code = "";
      });
    },
    updateCoupon(item) {
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/coupon/${item.id}`;
      this.$http.put(api, { data: item }).then(res => {
        console.log("修改優惠券", res.data);
        $(".updateConfirm").collapse("hide");
        this.getCoupon();
      });
    },
    deleteCoupon(id) {
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/coupon/${id}`;
      this.$http.delete(api).then(res => {
        console.log("刪除優惠券", res.data);
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

<style scoped>
* {
  font-size: 14px !important;
}
</style>
