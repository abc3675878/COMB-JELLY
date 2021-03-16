<template>
  <div>
    <Topbar></Topbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <h1>CATEGORIES</h1>
          <ul>
            <li>ALL</li>
            <li>OUTERWEAR</li>
            <li>TOP</li>
            <li>BOTTOM</li>
            <li>DRESS</li>
            <li>ACCESSORIES</li>
            <li>SALE</li>
          </ul>
        </div>
        <div class="col-9">
          <div class="row">
            <div class="col-4">123</div>
            <div class="col-4">123</div>
            <div class="col-4">123</div>
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
  }
};
</script>

<style lang="scss" scoped>
* {
  border: 1px solid black;
}

.container-fluid {
  position: absolute;
  top: 100px;
  padding: 12px;
}

h1 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
}

ul li {
  font-size: 14px;
  margin-bottom: 15px;
}
</style>
