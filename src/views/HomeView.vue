<template>
  <div id="carouselExampleCaptions" class="relative" data-twe-carousel-init data-twe-ride="carousel">
    <!--Khu vực ảnh bìa-->
    <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      <div
        class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-twe-carousel-active data-twe-carousel-item style="backface-visibility: hidden">
        <img src="https://wallpapercave.com/wp/wp7486978.jpg" class="block w-full" alt="..." />
      </div>
    </div>
  </div>
  <!--Thông tin kèm hình ảnh-->
  <section class="dark:bg-gray-100 dark:text-gray-800">
    <div class="container max-w-6xl p-6 mx-auto space-y6 sm:space-y-12">
      <a rel="noopener noreferrer" href="#"
        class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
        <img
          src="https://fastcdn.hoyoverse.com/content-v2/hk4e/123466/4171bc1f07005ec9b78387a19cadc062_8158829122826346191.jpg"
          alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 max-w-2xl">
        <div class="p-6 space-y-2 lg:col-span-5" style="line-height: 2rem; font-size: 24px;">
          <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline py-3">Thông tin mới
          </h3>
          <p>Thông tin về trò chơi phiên bản hiện tại.</p>
          <p>Các sự kiện diễn ra trong phiên bản 4.6</p>
          <p>Cập nhật các tính năng mới cho các phiên bản</p>
          <p>Nhiệm vụ truyền thuyết mới, nhân vật mới</p>
        </div>
      </a>
      <v-container class="pa-4 text-center">
        <v-row align="center" class="fill-height" justify="center">
          <template v-for="(item, i) in items" :key="i">
            <v-col cols="12" md="4">
              <v-hover v-slot="{ isHovering, props }">
                <v-card :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2" v-bind="props">
                  <v-img :src="item.img" height="225px" cover>
                    <v-card-title class="text-h6 text-white d-flex flex-column">
                      <p class="mt-4">
                        {{ item.title }}
                      </p>

                      <div>
                        <p class="ma-0 text-body-1 font-weight-bold">
                          {{ item.text }}
                        </p>
                        <p class="text-caption font-weight-medium">
                          {{ item.subtext }}
                        </p>
                      </div>
                    </v-card-title>
                    <div class="align-self-center">
                      <v-btn v-for="(img, index) in img" :key="index" :class="{ 'show-btns': isHovering }"
                        :color="transparent" :img="img" variant="text"></v-btn>
                    </div>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
        <div class="grid grid-cols-3 gap-4">
          <div class="mb-4">
            <!--Pic01-->
            <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <a href="../tintuc4" class="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                <img
                  src="https://www.siliconera.com/wp-content/uploads/2023/07/best-genshin-impact-interactive-map.jpg?fit=1200%2C675"
                  class="cityland max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="Louvre" />
              </a>
            </div>

          </div>
          <!--Pic02-->
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <a href="../tintuc4" class="cityland max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <img src="https://th.bing.com/th/id/OIP.tDbvhZGQzZrXoFwU62jOnQHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain"
                class="cityland max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="Louvre" />
            </a>
          </div>
          <!--Pic03-->
          <div class="cityland mb-4">
            <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img
                src="https://upload-os-bbs.hoyolab.com/upload/2023/12/28/173353178/24aea4eb7bf769927ad318f3f903368a_8902557596255235406.jpg"
                class="cityland max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="Louvre" />
            </div>
          </div>
        </div>
        <!--Pic4-->
        <div class="grid grid-cols-3 gap-4">
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://upload-os-bbs.hoyolab.com/upload/2023/02/28/134338015/b6ef6c0c1512d687e5fcef61f8ba120f_5597731972774887633.jpg"
              class="cityland max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="Louvre" />
          </div>
          <!--Pic05-->
          <div class="mb-4 md:mb-0">
            <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
              <img src="https://wallpaperaccess.com/full/11154553.jpg"
                class="cityland max-w-xs transition duration-300 ease-in-out hover:scale-110" alt="Louvre" />
            </div>
          </div>
        </div>

        <!-- thong bao 6 cai -->
      </v-container>
      <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!--Tintuc1-->
        <a rel="noopener noreferrer" href="#"
          class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
            src="https://fastcdn.hoyoverse.com/content-v2/hk4e/123617/a12798f7abb01598267ac17f60bd8c80_7990757920139135401.jpg">
          <div class="p-6 space-y-2">
            <router-link :to="{ name: 'tt1' }" style="text-decoration: none; font-size: 15px; ">
              <h3>Sự Kiện Phiên Bản 4.6 - Kỳ 2 "Lửa Rực Hai Thế Giới, Đêm Đỏ Dần Lụi Tàn"</h3>
              <p>Tham gia để nhận các phần quà trong trò chơi...</p>

            </router-link>
          </div>
        </a>
        <!--Tintuc2-->
        <a rel="noopener noreferrer" href="#"
          class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
            src="https://fastcdn.hoyoverse.com/content-v2/hk4e/123427/4a7284e64349ed87f7111189e93a1fb4_7796556057576239221.jpg">
          <div class="p-6 space-y-2">
            <router-link :to="{ name: 'tt2' }" style="text-decoration: none; font-size: 15px; ">
              <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">Kẻ Địch Mạnh Mới Xuất Hiện
                -
                Arlecchino</h3>
              <p>Nhà Lữ Hành thân mến! Sau khi cập nhật phiên bản 4.6, Nhà Lữ Hành sẽ gặp kẻ địch mạnh mới
                "Arlecchino"...</p>
            </router-link>
          </div>
        </a>
        <!--Tintuc3-->
        <a rel="noopener noreferrer" href="#"
          class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
          <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500"
            src="https://lh7-us.googleusercontent.com/docsz/AD_4nXcStQj_JlQkRhNy4P6H-uD9qApljApXdY-nv6wK2Rlu_HbOjo-5rlA--BeGoR9-DZgwdOS_qpFm92U5VoBn7RHDznS5oYfyl08Kq11-e1z_kmhiK_Z4YmtxYtj60R348ge6OJVgmCk_Xfy8soTsG7_WXJM?key=y5q_CssZkJ-E2KlrCUdXmQ">
          <div class="p-6 space-y-2">
            <router-link :to="{ name: 'tt3' }" style="text-decoration: none; font-size: 15px; ">
              <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">[Genshin Impact] Nhân vật
                mới sắp
                xuất hiện...</h3>
              <span class="text-3xs dark:text-gray-600">
                <router-link class="https://genshin.hoyoverse.com/en/home">Genshin Impact</router-link> những nhân vật
                tiếp
                theo được hé lộ trước các phiên cập nhật sẽ cho ta những...
              </span>
              <p></p>
            </router-link>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style>
.cityland {
  width: 320px;
  height: 180px;
}
</style>
