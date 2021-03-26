<template>
  <div>
    ORDER CONFIRM
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getOrder() {
      const orderId = this.$route.params.id;
      const api = `${process.env.VUE_APP_API}api/abc3675878/order/${orderId}`;
      this.$http.get(api).then(res => {
        console.log("取得訂單", res.data);
      });
    }
  },
  created() {
    this.getOrder();
  }
};
</script>
