<template>
  <TheHeader />
  <router-view></router-view>
  <Footer />

</template>

<script>
import Footer from './components/Footer.vue';
import TheHeader from './components/TheHeader.vue';
import FirestoreExample from './components/FirestoreExample.vue';
export default{
  components:{
    TheHeader,
    Footer,
    FirestoreExample
  }
}

</script>