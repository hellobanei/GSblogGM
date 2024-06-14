<template>
  <div id="carouselExampleSlidesOnly" class="relative" data-twe-carousel-init data-twe-ride="carousel">
    <!--Carousel items-->
    <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      <!--First item-->
      <div
        class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-twe-carousel-item data-twe-carousel-active>
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="block w-full" alt="Wild Landscape">
        <span class="text-3xs dark:text-gray-600">xem thêm nhiều video thú vị về trò chơi
    <a href="https://www.youtube.com/channel/UCiS882YPwZt1NfaM0gR0D9Q">click here</a></span>
      </div>
    </div>
  </div>
  <FirestoreExample />
</template>

<script>
import FirestoreExample from '../components/FirestoreExample.vue';

export default {
  components:{
    FirestoreExample
  }
}
</script>

<style></style>