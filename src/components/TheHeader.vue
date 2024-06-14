<template>
  <!-- Mặc định reponsive của tailwind là ở chế độ điện thoại, nên canh chỉnh ở chế độ đt trước tiên, màng hình sẽ reponsive sẽ tăng lên dần -->
  <div class="w-full flex justify-around p-1 bg-blue-300">
    <div class="w-1/12 flex md:hidden py-6">
      <!-- độ rộng 1/12, kích thước màng hình từ md trở lên sẽ ẩn, ở chế độ đt sẽ hiện -->
      <span class="cursor-pointer" @click="showDrawer()">
        <MenuOutlined />
      </span>
    </div>
    <div class="w-11/12 flex justify-center md:justify-start">
      <router-link :to="{ name: 'home' }" style="text-decoration: none;">
        <img src="https://vectorlogo4u.com/wp-content/uploads/2020/10/Genshin-Impact-Vector-Logo-01.png" alt="logo"
          width="150px" height="50px" class="ms-3 me-3">
      </router-link>
      <div class="w-11/12 hidden md:flex md:justify-center py-6 ">
        <router-link :to="{ name: 'home' }" style="text-decoration: none;">
          <span class="px-8" style="color:aliceblue; font-size: 20px;">Trang Chủ</span>
        </router-link>
        <router-link :to="{ name: 'about' }" style="text-decoration: none;">
          <span class="px-8" style="color:aliceblue; font-size: 20px;">Tin Tức & Giới Thiệu</span>
        </router-link>
        <router-link :to="{ name: 'contact' }" style="text-decoration: none;">
          <span class="px-8" style="color:aliceblue; font-size: 20px;">Liên Hệ</span>
        </router-link>
        <router-link :to="{ name: 'login' }" style="text-decoration: none;">
          <span class="px-8" style="color:aliceblue; font-size: 20px;">Đăng Nhập</span>
        </router-link>
       
      </div>
    </div>
    <!-- <div class="w-1/12 flex py-6 pr-3 justify-end md:hidden">
      <span>X</span>
    </div> -->
  </div>
  <a-drawer v-model:visible="visible" placement="left">
    <TheMenu />
  </a-drawer>
</template>

<script>
import { MenuOutlined } from '@ant-design/icons-vue';
import {
  defineComponent,
  ref
} from 'vue';
import TheMenu from '../components/TheMenu.vue'
export default defineComponent({
  components: {
    MenuOutlined,
    TheMenu
  },
  setup() {
    const visible = ref(false);
    const showDrawer = () => {
      visible.value = true;
    };

    return {
      visible,
      showDrawer,

    };
  },

});

</script>
