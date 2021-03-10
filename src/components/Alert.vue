<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        @click="removeMessage(i)"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      messages: [
        // {
        // message: "",
        // status: "",
        // timestamp: 0
        // }
      ]
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    }
  },
  created() {
    const vm = this;
    // 呼叫在main.js下掛載的$bus
    // 註冊名為 'message:push' 的方法
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    vm.$bus.$on("message:push", (message, status = "warning") => {
      // 把 message, status 傳到 updateMessage()
      vm.updateMessage(message, status);
    });
    // vm.$bus.$emit('message:push');
  }
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100;
}
</style>
