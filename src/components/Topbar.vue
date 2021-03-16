<template>
  <div>
    <div class="topbar">
      <div class="logo">
        COMB JELLY
      </div>
      <div class="navbar">
        <div class="nav">
          <li>
            <router-link to="/products">SHOP</router-link>
          </li>
          <li>SALE</li>
          <li>INFO</li>
          <li>SEARCH</li>
        </div>
        <div class="cart">CART</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.topbar {
  width: 100%;
  padding: 12px;
  position: fixed;
}

.logo {
  width: 100%;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: -5px;
}

.navbar {
  width: 100%;
  font-size: $font3;

  .nav li {
    padding-right: 35px;
  }
}
</style>
