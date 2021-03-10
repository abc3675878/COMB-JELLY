<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <SideBar></SideBar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <!-- 巢狀的 router view 所以在router中新增了children -->
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// 把原件拆分出去
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Alert from "../components/Alert";

export default {
  components: {
    Navbar,
    SideBar,
    Alert
  },
  created() {
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = myCookie;
  }
};
</script>

<style scoped></style>
