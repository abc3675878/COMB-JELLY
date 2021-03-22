<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <!-- Button trigger modal -->
      <button class="btn btn-dark" @click="openModal(true)">
        建立新的產品
      </button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addProduct" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- 上傳 1 -->
              <div class="col-sm-2">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-circle-notch fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                  :src="tempProduct.imageUrl"
                />
              </div>
              <!-- 上傳 2 -->
              <div class="col-sm-2">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl2"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-circle-notch fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files2"
                    @change="uploadFile2"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                  :src="tempProduct.imageUrl2"
                />
              </div>
              <!-- 上傳 3 -->
              <div class="col-sm-2">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl3"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-circle-notch fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files3"
                    @change="uploadFile3"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                  :src="tempProduct.imageUrl3"
                />
              </div>
              <!-- 上傳 4 -->
              <div class="col-sm-2">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl4"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-circle-notch fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files4"
                    @change="uploadFile4"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                  :src="tempProduct.imageUrl4"
                />
              </div>
              <!-- 上傳 5 -->
              <div class="col-sm-2">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl5"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-circle-notch fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files5"
                    @change="uploadFile5"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                  :src="tempProduct.imageUrl5"
                />
              </div>
              <!-- 上傳 6 -->
              <div class="col-sm-2">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl6"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-circle-notch fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files6"
                    @change="uploadFile6"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                  :src="tempProduct.imageUrl6"
                />
              </div>
              <div class="col-sm-12">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="title">標題</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder="請輸入標題"
                      v-model="tempProduct.title"
                    />
                  </div>
                  <div
                    class="col-md-6 d-flex align-items-center justify-content-center"
                  >
                    <div>尺寸:</div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox"
                        value="XS"
                        v-model="tempProduct.size"
                      />
                      <label class="form-check-label" for="inlineCheckbox"
                        >XS</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="S"
                        v-model="tempProduct.size"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >S</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="M"
                        v-model="tempProduct.size"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >M</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="L"
                        v-model="tempProduct.size"
                      />
                      <label class="form-check-label" for="inlineCheckbox3"
                        >L</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox4"
                        value="XL"
                        v-model="tempProduct.size"
                      />
                      <label class="form-check-label" for="inlineCheckbox4"
                        >XL</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox5"
                        value="F"
                        v-model="tempProduct.size"
                      />
                      <label class="form-check-label" for="inlineCheckbox5"
                        >F</label
                      >
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <!-- 使用 :true-value 來綁定 1或0 -->
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="delete_btn btn btn-danger"
              v-if="!isNew"
              @click="deleteProduct"
            >
              刪除商品
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <table class="table mt-4">
      <thead>
        <th width="100">分類</th>
        <th>品名</th>
        <th width="100">原價</th>
        <th width="100">售價</th>
        <th width="100">狀態</th>
        <th width="100">編輯</th>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price | currency }}
          </td>
          <td class="text-right">
            {{ item.price | currency }}
          </td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success"
              >已啟用</span
            >
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-primary" @click="openModal(false, item)">
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <nav>
      <ul class="pagination justify-content-center">
        <li
          class="page-item"
          :class="{ disabled: !pagination.has_pre }"
          @click.prevent="getProducts(pagination.current_page - 1)"
        >
          <a class="page-link" href="#">
            <span>&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pagination.total_pages"
          :key="page"
          :class="{ active: pagination.current_page === page }"
        >
          <!-- 把頁數帶入 -->
          <a class="page-link" href="#" @click.prevent="getProducts(page)">{{
            page
          }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: !pagination.has_next }"
          @click.prevent="getProducts(pagination.current_page + 1)"
        >
          <a class="page-link" href="#">
            <span>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// 須在此引入jquery，不然Vue不認得$是什麼
import $ from "jquery";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      products: [],
      // 新增商品的欄位全綁定進來
      tempProduct: {
        size: [],
      },
      // 儲存商品的分頁顯示
      pagination: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      }
    };
  },
  filters: {
    // 價格千分號
    currency: function(num) {
      const n = Number(num);
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
        return currency;
      })}`;
    },
  },
  components: {
    Loading,
  },
  methods: {
    // 傳入頁數，可以設定預設值 = 1
    getProducts(page = 1) {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_API}api/abc3675878/products?page=${page}`;
      this.$http.get(api).then(res => {
        console.log(res.data);
        vm.isLoading = false;
        vm.products = res.data.products;
        vm.pagination = res.data.pagination;
      });
    },
    // 將預設的開啟方式改成用js開啟
    // 點按鈕時傳值進來 item是v-for遍歷的每個物件
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {
          size: [],
        };
        this.isNew = true;
      } else {
        // 使用 Object.assign 來複製一個item給tempProduct
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }
      $("#addProduct").modal("show");
    },
    // 新增/修改時觸發
    updateProduct() {
      let api = `${process.env.VUE_APP_API}api/abc3675878/admin/product`;
      let axiosMethod = "post";
      const vm = this;
      // 若是修改商品，使用put
      if (!vm.isNew) {
        api = api = `${process.env.VUE_APP_API}api/abc3675878/admin/product/${vm.tempProduct.id}`;
        axiosMethod = "put";
      }
      // post行為 api後面要傳值
      // 傳出去的資料需包在data裡面
      this.$http.[axiosMethod](api, { data: vm.tempProduct }).then(res => {
        console.log(res.data);
        // 若新增成功，把Modal關閉
        if (res.data.success) {
          $("#addProduct").modal("hide");
          this.getProducts();
        } else {
          alert("新增失敗");
        }
      });
    },
    deleteProduct() {
      const vm = this
      let api = `${process.env.VUE_APP_API}api/abc3675878/admin/product/${vm.tempProduct.id}`;
      this.$http.delete(api).then((res => {
        console.log(res.data);
        if (res.data.success) {
          $("#addProduct").modal("hide");
          this.getProducts();
        } else {
          alert("刪除失敗");
        }
      }))
    },
    uploadFile() {
      const vm = this
      // 1.抓出檔案的所在位置
      const uploadedFile = this.$refs.files.files[0];
      // 2.建立一個FormData物件，上傳圖片必須用FormData去送
      const formData = new FormData();
      // 3.追加新值到 FormData 物件已有的對應鍵上；若該鍵不存在，則為其追加新的鍵。
      formData.append('file-to-upload', uploadedFile);
      // 4.axios將圖片上傳
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/upload`;
      vm.status.fileUploading = true;
      this.$http.post(api, formData, {
        // 將表單形式改成 form-data
        // https://reurl.cc/ZQZQZl
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(res=> {
        console.log(res.data);
        vm.status.fileUploading = false;
        // 把圖片存到tempProduct
        if(res.data.success) {

          // 用set強制雙向綁定
          vm.$set(vm.tempProduct, 'imageUrl', res.data.imageUrl)
        } else {
          // 把錯誤訊息利用bus推送到Alert.vue
          this.$bus.$emit('message:push', res.data.message, 'danger')
        }
      })
    },
    uploadFile2() {
      const vm = this;
      const uploadedFile2 = this.$refs.files2.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile2);
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/upload`;
      vm.status.fileUploading = true;
      this.$http.post(api, formData, {
        // 將表單形式改成 form-data
        // https://reurl.cc/ZQZQZl
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(res=> {
        console.log(res.data);
        vm.status.fileUploading = false;
        // 把圖片存到tempProduct
        if(res.data.success) {

          // 用set強制雙向綁定
          vm.$set(vm.tempProduct, 'imageUrl2', res.data.imageUrl)
        } else {
          // 把錯誤訊息利用bus推送到Alert.vue
          this.$bus.$emit('message:push', res.data.message, 'danger')
        }
      })
    },
    uploadFile3() {
      const vm = this;
      const uploadedFile3 = this.$refs.files3.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile3);
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/upload`;
      vm.status.fileUploading = true;
      this.$http.post(api, formData, {
        // 將表單形式改成 form-data
        // https://reurl.cc/ZQZQZl
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(res=> {
        console.log(res.data);
        vm.status.fileUploading = false;
        // 把圖片存到tempProduct
        if(res.data.success) {

          // 用set強制雙向綁定
          vm.$set(vm.tempProduct, 'imageUrl3', res.data.imageUrl)
        } else {
          // 把錯誤訊息利用bus推送到Alert.vue
          this.$bus.$emit('message:push', res.data.message, 'danger')
        }
      })
    },
    uploadFile4() {
      const vm = this;
      const uploadedFile4 = this.$refs.files4.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile4);
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/upload`;
      vm.status.fileUploading = true;
      this.$http.post(api, formData, {
        // 將表單形式改成 form-data
        // https://reurl.cc/ZQZQZl
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(res=> {
        console.log(res.data);
        vm.status.fileUploading = false;
        // 把圖片存到tempProduct
        if(res.data.success) {

          // 用set強制雙向綁定
          vm.$set(vm.tempProduct, 'imageUrl4', res.data.imageUrl)
        } else {
          // 把錯誤訊息利用bus推送到Alert.vue
          this.$bus.$emit('message:push', res.data.message, 'danger')
        }
      })
    },
    uploadFile5() {
      const vm = this;
      const uploadedFile5 = this.$refs.files5.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile5);
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/upload`;
      vm.status.fileUploading = true;
      this.$http.post(api, formData, {
        // 將表單形式改成 form-data
        // https://reurl.cc/ZQZQZl
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(res=> {
        console.log(res.data);
        vm.status.fileUploading = false;
        // 把圖片存到tempProduct
        if(res.data.success) {

          // 用set強制雙向綁定
          vm.$set(vm.tempProduct, 'imageUrl5', res.data.imageUrl)
        } else {
          // 把錯誤訊息利用bus推送到Alert.vue
          this.$bus.$emit('message:push', res.data.message, 'danger')
        }
      })
    },
    uploadFile6() {
      const vm = this;
      const uploadedFile6 = this.$refs.files6.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile6);
      const api = `${process.env.VUE_APP_API}api/abc3675878/admin/upload`;
      vm.status.fileUploading = true;
      this.$http.post(api, formData, {
        // 將表單形式改成 form-data
        // https://reurl.cc/ZQZQZl
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(res=> {
        console.log(res.data);
        vm.status.fileUploading = false;
        // 把圖片存到tempProduct
        if(res.data.success) {

          // 用set強制雙向綁定
          vm.$set(vm.tempProduct, 'imageUrl6', res.data.imageUrl)
        } else {
          // 把錯誤訊息利用bus推送到Alert.vue
          this.$bus.$emit('message:push', res.data.message, 'danger')
        }
      })
    },
  },
  created() {
    this.getProducts();
  }
};
</script>

<style lang="scss" scoped>
.delete_btn {
  position: absolute;
  left: 10px;
}
</style>
